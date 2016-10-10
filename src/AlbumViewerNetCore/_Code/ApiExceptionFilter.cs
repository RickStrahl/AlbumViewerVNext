using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Westwind.Utilities;

namespace AlbumViewerAspNetCore
{
public class ApiExceptionFilter : ExceptionFilterAttribute
{
public override void OnException(ExceptionContext context)
{
    ApiError apiError = null;
    if (context.Exception is ApiException)
    {
        // handle explicit 'known' API errors
        var ex = context.Exception as ApiException;
        context.Exception = null;
        apiError = new ApiError(ex.Message);
        apiError.errors = ex.Errors;

        context.HttpContext.Response.StatusCode = ex.StatusCode;
                
    }
    else if (context.Exception is UnauthorizedAccessException)
    {
        apiError = new ApiError("Unauthorized Access");
        context.HttpContext.Response.StatusCode = 401;                
    }
    else
    {
        // Unhandled errors
#if !DEBUG
        var msg = "An unhandled error occurred.";                
#else
        var msg = context.Exception.Message;                
#endif                
        apiError = new ApiError(msg);
        context.HttpContext.Response.StatusCode = 500;

        // handle logging here
    }
            
    // always return a JSON result
    context.Result = new JsonResult(apiError);

    base.OnException(context);
}
    }
}
