using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumViewerBusiness.Configuration
{
    /// <summary>
    /// Application Configuration class that holds application settings.
    /// This configuration can be injected with IOptions<ApplicationConfiguration>
    /// using the "Application" subkey in appSettings.json.
    /// </summary>
    public class ApplicationConfiguration
    {
        public string ApplicationName { get; set; } = "West Wind AlbumViewer";
        public int MaxListItems { get; set; } = 10;

        public EmailConfiguration EmailSettings { get; set; } = new EmailConfiguration();

        public TokenConfiguration JwtToken { get; set; } = new TokenConfiguration();
    }

    public class EmailConfiguration
    {
        public string MailServer { get; set; } = "localhost";
        public bool UseTls { get; set; } 
        public string MailServerUsername { get; set; }
        public string MailServerPassword { get; set; }

        public string SenderAddress { get; set; } = "admin@west-wind.com";
        public string SenderName { get; set; } = "West Wind Administration";
    }

    public class TokenConfiguration
    {
        public string Issuer { get; set; } = "https://timetrakker.com";
        public string Audience { get; set; } = "https://timetrakker.com";

        public string SigningKey { get; set; } = "4rTGTad3Asdd$123ads*asd3iotgfd#12axads9310#";

        public int TokenTimeoutMinutes { get; set; } = 45;
    }
}
