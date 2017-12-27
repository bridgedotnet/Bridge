#!/bin/bash

bridgepkgs=(Bridge.Core Bridge.Min Bridge.Html5 Bridge)
#bridgepkgs=()
frameworkpkgs=(Bridge.Bootstrap Bridge.Html5.Console Bridge.jQuery Bridge.QUnit Bridge.WebGL)
#frameworkpkgs=()
otherpkgs=(
 "Bridge.Clean:Bridge"
 "Bridge.Newtonsoft.Json:"
 "Bridge.Test:"
 "Bridge.Test.Core:Test"
 "Bridge.Aspect:"
)
#otherpkgs=("Bridge.Test:")

logfile="publish.log"
nuget_exe="../../.nuget/nuget.exe"

echo -n "Inferring Bridge version: "
version="$(egrep AssemblyInformationalVersion ../common/CommonAssemblyInfo.cs | cut -f2 -d\")"

function trigger_error() {
 if [ ${#@} -gt 0 ]; then
  >&2 echo "*** Error: ${@}"
  log "Error: ${@}"
 else
  >&2 echo "*** Error. Aborting script execution."
  log "Error."
 fi
 exit 1
}

function log() {
 echo "$(date) - ${@}" >> "${logfile}"
}

log "Publish script started."

if [ -z "${version}" ]; then
 echo "error."
 trigger_error "Unable to fetch Bridge version number. Bailing out."
fi
echo "${version}."

dry_run=false
if [ "${1}" == "--dry-run" ]; then
 dry_run=true
fi

if [ ! -x "${nuget_exe}" ]; then
 trigger_error "Unable to run NuGet client at: ${nuget_exe}."
fi

function nuget_ver_exists() {
 local nupkg="${1}"
 local versn="${2}"
 local versions="$(curl -s https://api.nuget.org/v3-flatcontainer/${1}/index.json)"

 if echo "${versions}" | egrep -q "\"${versn//\./\\\.}\""; then
  return 0
 else
  return 1
 fi
}

echo "Pre-checking whether all NuGet packages exist and need updating."
packages_to_publish=()

for pkg in "${bridgepkgs[@]}"; do
 echo -n "- ${pkg}: v${version} "
 filename="${pkg}.${version}.nupkg"
 if [ ! -e "${filename}" ]; then
  echo "error."
  trigger_error "Unable to find package: ${filename}"
 fi

 if nuget_ver_exists "${pkg}" "${version}"; then
  echo "already published."
 else
  echo "should be published."
  packages_to_publish+=("${filename}")
 fi
done

for pkg in "${frameworkpkgs[@]}"; do
 echo -n "- ${pkg}: "

 nuspecfile="../../../Frameworks/.build/specs/${pkg}.nuspec"
 if [ ! -e "${nuspecfile}" ]; then
  echo "error."
  trigger_error "Unable to find .nuspec file for '${pkg}': ${nuspecfile}"
 fi
 pkgdir="$(egrep "^ *<file src=\"\.\.\\\\\.\.\\\\" "${nuspecfile}" | head -n1 | cut -f3 -d\\)"
 asmifile="../../../Frameworks/${pkgdir}/Properties/AssemblyInfo.cs"

 if [ ! -e "${asmifile}" ]; then
  echo "error."
  trigger_error "Unable to find assembly info file: ${asmifile}"
 fi

 pkgver="$(egrep "AssemblyInformationalVersion" "${asmifile}" | cut -f2 -d\")"
 if [ -z "${pkgver}" ]; then
  echo "error."
  trigger_error "Unable to infer version for the package."
 fi
 echo -n "v${pkgver} "
 filename="${pkg}.${pkgver}.nupkg"
 if [ ! -e "${filename}" ]; then
  echo "error."
  trigger_error "Unable to find package: ${filename}"
 fi

 if nuget_ver_exists "${pkg}" "${pkgver}"; then
  echo "already published."
 else
  echo "should be published."
  packages_to_publish+=("${filename}")
 fi
done

for pkgpair in "${otherpkgs[@]}"; do
 pkg="${pkgpair%%:*}"
 echo -n "- ${pkg%%:*}: "

 asmifile="${pkgpair#*:}"

 if [ -z "${asmifile}" ]; then
  if [ -d "../../../${pkg}" ]; then
   asmifile="${pkg}"
  elif [ -d "../../../${pkg#*.}" ]; then
   asmifile="${pkg#*.}"
  fi
 fi

 asmifile="../../../${asmifile}/.build/common/CommonAssemblyInfo.cs"
 if [ ! -e "${asmifile}" ]; then
  echo "error."
  trigger_error "Unable to find assembly info file: ${asmifile}"
 fi

 pkgver="$(egrep "AssemblyInformationalVersion" "${asmifile}" | cut -f2 -d\")"
 if [ -z "${pkgver}" ]; then
  echo "error."
  trigger_error "Unable to infer version for the package."
 fi
 echo -n "v${pkgver} "
 filename="${pkg}.${pkgver}.nupkg"
 if [ ! -e "${filename}" ]; then
  echo "error."
  trigger_error "Unable to find package: ${filename}"
 fi

 if nuget_ver_exists "${pkg}" "${pkgver}"; then
  echo "already published."
 else
  echo "should be published."
  packages_to_publish+=("${filename}")
 fi
done

if ! ${dry_run}; then
 echo "
About to publish the following packages:"
 for pkg in "${packages_to_publish[@]}"; do
  echo "- ${pkg}"
 done

 echo -n "
Enter NuGet API Key: "
 read -s apikey

 if [ "${#apikey}" -ne 36 -o "${apikey}" != "${apikey//[^a-f0-9-]/}" ]; then
  trigger_error "Invalid API key."
 else
  echo "API key read."
 fi

 for pkg in "${packages_to_publish[@]}"; do
  log "Publishing ${pkg}"
  echo -n "Publishing: ${pkg%.nupkg}"
  result="$("${nuget_exe}" push "${pkg}" -source "https://www.nuget.org/" -apikey "${apikey}" -verbosity detailed -timeout 600 -noninteractive -forceenglishoutput 2>&1)"
  exit_status="${?}"

  log "Command output:
${result}"
  if [ ${exit_status} -ne 0 ]; then
   echo "$(date) - Error trying to publish ${pkg}. Output:
${result}
$(date) - End of report." >> publish.error.log
   echo ", failed."
   trigger_error "NuGet push failed. See 'publish.error.log' for details."
  else
   echo ", succeeded."
   log "Publishing ${pkg} succeeded."
  fi
 done
 echo "Done. Total: ${#packages_to_publish[@]} packages published.

Please notice it may take a while for NuGet API and website to reflect the
updated packages' version. This means, running this script right after a-f0-9-
successful publish sweep will still report the versions as not published."
else
 echo "
Packages that would have been published:"
 for pkg in "${packages_to_publish[@]}"; do
  echo "- ${pkg}"
 done
 echo "Total: ${#packages_to_publish[@]} packages. Won't publish anything (dry-run)."
fi

log "Publish script finished."