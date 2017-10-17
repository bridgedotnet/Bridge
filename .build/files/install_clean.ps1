#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

# Sets the NoStdLib setting to True for every project configuration.
# See Issue #419 for more information on why.
# https://github.com/bridgedotnet/Bridge/issues/419
# Once Visual Studio or NuGet defect is fixed, lines 24-133 can be removed.

$projectMSBuild = [Microsoft.Build.Construction.ProjectRootElement]::Open($project.FullName)

if ($projectMSBuild)
{
    # Clean all NoStdLib, AddAdditionalExplicitAssemblyReferences and AdditionalExplicitAssemblyReferences to avoid duplicates
    # Check if the project already has all the required properties - it means no Save&Reload dialog required
    $effectiveStd = $false
    $effectiveAAEAR = $false
    $effectiveAEAR = $false

    $wasModified = $false

    ForEach ($item in $projectMSBuild.Properties)
    {
        $name = $item.Name
        if ($name -ieq "NoStdLib" -or $name -ieq "AddAdditionalExplicitAssemblyReferences" -or $name -ieq "AdditionalExplicitAssemblyReferences")
        {
            #Write-Host ($item.Name + ":" + $item.Value + " Condition:" + $item.Condition  + " Parent Condition:" + $item.Parent.Condition)

            # Consider only properties with no conditions
            $condition = !($item.Condition) -and !($item.Parent.Condition)

            $isEffective = $false

            # The required property does not have condition i.e. applied everytime
            # Then check if the property has required value
            # The last one (as there may be several similar properties) matters
            switch ($name)
            {
                "NoStdLib"
                { 
                    $effectiveStd = $condition -and ($item.Value -ieq "true");
                    $isEffective =  $effectiveStd;
                } 
                "AddAdditionalExplicitAssemblyReferences"
                {
                    $effectiveAAEAR = $condition -and ($item.Value -ieq "false");
                    $isEffective =  $effectiveAAEAR;
                } 
                "AdditionalExplicitAssemblyReferences"
                {
                    $effectiveAEAR = $condition -and (($item.Value -eq $null) -or ($item.Value -eq ""));
                    $isEffective =  $effectiveAEAR;
                } 
            }

            # Remove the property if it is not appropriate - conditional or having wrong value
            if (!$isEffective)
            {
                Try
                {
                    $item.Parent.RemoveChild($item);
                    $wasModified = $true;
                    Write-Host ("Removed Property " + $name)
                }
                Catch
                {
                    Write-Host ("Failed to remove Property " + $name + "Error: " +  $_.Exception.Message)
                }
            }
        }
    }

    if (!$effectiveStd)
    {
        $projectMSBuild.AddProperty('NoStdLib', 'true');
        Write-Host ("Added Property NoStdLib")
        $wasModified = $true;
    }

    if (!$effectiveAAEAR)
    {
        $projectMSBuild.AddProperty('AddAdditionalExplicitAssemblyReferences', 'false');
        Write-Host ("Added Property AddAdditionalExplicitAssemblyReferences")
        $wasModified = $true;
    }

    if (!$effectiveAEAR)
    {
        $propEnableNuGetImport = $projectMSBuild.AddProperty('AdditionalExplicitAssemblyReferences', $null);
        Write-Host ("Added Property AdditionalExplicitAssemblyReferences")        
        $wasModified = $true;
    }

    if ($wasModified)
    {
        $project.Save();
        Write-Host ("Saved the project as <NoStdLib>, <AddAdditionalExplicitAssemblyReferences> or <AdditionalExplicitAssemblyReferences> properties adjusted")
    }
    
    if ($effectiveStd -and $effectiveAAEAR -and $effectiveAEAR)
    {
        Write-Host ("Reloading the project is not required")
    }
    else
    {
        $p = $(get-item $project.FullName)
        if ($p)
        {
            Write-Host $p.lastwritetime
            $p.lastwritetime=get-date
            Write-Host ("Triggered project reloading as it is required to fix possible IntelliSense errors")
        }
    }
}