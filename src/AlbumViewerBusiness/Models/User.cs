namespace AlbumViewerBusiness
{

    /// <summary>
    /// A user for authentication
    /// </summary>
    public class User
    {
        public int Id { get; set; }


        /// <summary>
        /// User name to identify the user to log into the application
        /// </summary>
        public string Username { get; set;  }


        /// <summary>
        /// Password for the user
        /// </summary>
        public string Password { get; set;  }


        /// <summary>
        /// Full descriptive name for the user used for display
        /// </summary>
        public string Fullname { get; set;  } 
    }
}