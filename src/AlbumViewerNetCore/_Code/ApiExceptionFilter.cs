using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;

namespace AlbumViewerAspNet5
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException( ExceptionContext context)
        {

            if (context.Exception is ApiException)
            {
                var ex = context.Exception as ApiException;
                context.Exception = null;
                var apiError = new ApiError(ex.Message);

                context.HttpContext.Response.StatusCode = ex.StatusCode;
                context.Result = new JsonResult(apiError);
            }

            base.OnException(context);
        }
    }
}
