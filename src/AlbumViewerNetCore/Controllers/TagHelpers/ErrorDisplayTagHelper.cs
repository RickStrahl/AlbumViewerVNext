using Microsoft.AspNetCore.Razor.TagHelpers;

namespace AlbumViewerAspNet5.Controllers.TagHelpers
{

    /// <summary>
    /// TagHelper that display a bootstrap alert window conditionally 
    /// if a message or header are set on this helper. Otherwise - nothing
    /// displays.
    /// </summary>
    [HtmlTargetElement("error-display")]
public class ErrorDisplayTagHelper : TagHelper
{
    /// <summary>
    /// the main message that gets displayed
    /// </summary>
    [HtmlAttributeName("message")]
    public string message { get; set; }

    /// <summary>
    /// Optional header that is displayed in big text. Use for 
    /// 'noisy' warnings and stop errors only please :-)
    /// The message is displayed below the header.
    /// </summary>
    [HtmlAttributeName("header")]
    public string header { get; set; }

    /// <summary>
    /// Font-awesome icon name without the fa- prefix.
    /// Example: info-circle, warning, lightbulb-o
    /// If none is specified - warning is used
    /// </summary>
    [HtmlAttributeName("icon")]
    public string icon { get; set; }

    /// <summary>
    /// CSS class. Handled here so we can capture the existing
    /// class value and append the BootStrap alert class.
    /// </summary>
    [HtmlAttributeName("class")]
    public string cssClass { get; set; }

    /// <summary>
    /// Optional - specifies the alert class used on the top level
    /// window. If not specified uses the same as the icon. 
    /// Override this if the icon and alert classes are different
    /// (often they are not).
    /// </summary>
    [HtmlAttributeName("alert-class")]
    public string alertClass { get; set; }

    /// <summary>
    /// If true embeds the message text as HTML. Use this 
    /// flag if you need to display HTML text. If false
    /// the text is HtmlEncoded.
    /// </summary>
    [HtmlAttributeName("message-as-html")]
    public bool messageAsHtml { get; set; }

    /// <summary>
    /// If true embeds the message text as HTML. Use this 
    /// flag if you need to display HTML text. If false
    /// the text is HtmlEncoded.
    /// </summary>
    [HtmlAttributeName("header-as-html")]
    public bool headerAsHtml { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {


        if (string.IsNullOrEmpty(message) && string.IsNullOrEmpty(header))
            return;

        if (string.IsNullOrEmpty(icon))
            icon = "warning";
        if (icon == "warning" || icon == "error" || icon == "danger")
            icon = icon + " error";

        if (string.IsNullOrEmpty(alertClass))
            alertClass = icon;

        string messageText = !messageAsHtml ? System.Net.WebUtility.HtmlEncode(message) : message;

        output.TagName = "div";

        // fix up CSS class            
        if (cssClass != null)
            cssClass = cssClass + " alert alert-" + alertClass;
        else
            cssClass = "alert alert-" + alertClass;
        output.Attributes.Add("class", cssClass);

        if (string.IsNullOrEmpty(header))
            output.Content.SetContent($"<i class='fa fa-{icon}'></i> {messageText}");
        else
        {
            output.Content.SetContent(
                $"<h3><i class='fa fa-{icon}'></i> {header}</h3>\r\n" +
                "<hr/>\r\n" +
                $"{messageText}\r\n");
        }
    }
}
}
