using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlbumViewerBusiness.Configuration
{
    /// <summary>
    /// Application instance that holds constants and a few other reusable objects
    /// </summary>
    public class App
    {
        /// <summary>
        /// Global static Configuration instance
        /// -- Note this has to be set if read from configuration settings
        /// -- in application startup
        /// </summary>
        public static ApplicationConfiguration Configuration;

        /// <summary>
        /// Empty date
        /// </summary>
        public static DateTime MIN_DATE_VALUE = new DateTime(1900, 1, 1);


        static App()
        {
            // always assign but this may be reassigned during application configuration
            Configuration = new ApplicationConfiguration();
        }

    }
}
