using Microsoft.AspNet.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AlbumViewerAspNet5
{

    public class ApiException : Exception
    {
        public int StatusCode { get; set; }

        public ApiException(string message, int statusCode = 500) :
            base(message)
        {
            StatusCode = statusCode;
        }
        public ApiException(Exception ex, int statusCode = 500) : base(ex.Message)
        {
            StatusCode = statusCode;
        }
    }

}