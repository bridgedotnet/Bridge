#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

write-output ("Setting up '" + $project.ProjectName + "'.")

# Remove all references of object
$project.Object.References | foreach-object {
 if ($_.Identity.ToLower().StartsWith("system") -or $_.Identity.ToLower().StartsWith("microsoft")) {
  write-output ("Removing reference to '" + $_.Identity + "'.")
  $_.Remove()
 }
}

write-output "All done."