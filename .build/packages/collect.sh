#!/bin/sh

# This script will extract paths from the collect.bat file and copy them over.
# Pretty much, it translates the .bat file into the .sh context.
collectbat="collect.bat"

if [ ! -e "${collectbat}" ]; then
 scriptdir="$(dirname "${0}")"
 if [ -d "${scriptdir}" ]; then
  echo "Moving to wd: ${scriptdir}"
  cd "${scriptdir}"
  if [ ! -e "${collectbat}" ]; then
   echo "This script should be run from the path where '${collectbat}' is."
   exit 1
  fi
 fi
fi

build=""
root=""
output=""

settings="$(egrep "^SET +[a-zA-Z0-9]+=" "${collectbat}")"
_ifs="${IFS}"
IFS=$'\n'
settings=( ${settings} )
IFS="${_ifs}"

for setting in "${settings[@]}"; do
 key="$(echo "${setting}" | sed -E "s/^SET +([^=]+)=.*\$/\1/")"
 val="$(echo "${setting}" | sed -E "s/^SET +[^=]+=(.*)\$/\1/")"

 case "${key}" in
  'build') build="${val}";;
  'root')
   root="${val//\\//}"
   root="${root//\"/}/" # better be safe with a trailing slash!
   ;;
  'output')
   output="${val//\\//}"
   output="${output//\"/}/."
   ;;
  *) echo "Read unknown setting from '${collectbat}': ${key} (${val}).";;
 esac
done

# expand '%root' in 'output' contents
output="${output//%root%/${root}}"

# cleanup double slashes on paths (if any)
root="${root//\/\///}"
output="${output//\/\///}"

echo "Settings collected from '${collectbat}':
- build: ${build}
- root: ${root}
- output: ${output}
"

if [ -z "${build}" -o -z "${root}" -o -z "${output}" ]; then
 echo "Unable to infer one or more required settings from '${collectbat}'."
 exit 1
fi

if [ ! -d "${output}" ]; then
 echo "Set up output directory does not exist."
 exit 1
fi

filelist="$(egrep 'echo f \| xcopy' "${collectbat}" | \
 sed -E "s/  +/ /g;s/^echo .* xcopy \/f \/y \"%root%([^\"]+)\".*\$/\1/")"

IFS=$'\n'
filelist=( ${filelist} )
IFS="${_ifs}"

for file in "${filelist[@]}"; do
 file="${file//\\//}"
 file="${file//%build%/${build}}" # expand %build%

 path="${file%/*}"
 file_pattern="${file##*/}"

 cp -v -f "${root}${path}/"${file_pattern} "${output}" 2>/dev/null
done
