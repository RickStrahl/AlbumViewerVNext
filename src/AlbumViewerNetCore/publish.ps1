# Credential set with:
# Get-Credential | Export-CliXml  -Path .\FtpCredential.xml
# return
$credential = Import-Clixml -Path .\Publish_Credential.xml

if( $null -eq $credential)
{
    Get-Credential | Export-CliXml  -Path .\Publish_Credential.xml
    $credential = Import-Clixml -Path .\Publish_Credential.xml
    if( $null -eq $credential) {
        return;
    }
}

$uid = $credential.Username;
$pwd = $credential.Password
$pswd = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($pwd))
if(!$pswd) {Exit;}

dotnet publish /p:PublishProfile="Properties/PublishProfiles/albumviewer.west-wind.com.pubxml" /p:Username=$uid /p:Password=$pswd -c Release
