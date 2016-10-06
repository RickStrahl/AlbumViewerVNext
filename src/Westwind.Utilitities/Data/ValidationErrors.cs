#region License
/*
 **************************************************************
 *  Author: Rick Strahl 
 *          © West Wind Technologies, 2014
 *          http://www.west-wind.com/
 * 
 * Created: 11/25/2014
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **************************************************************  
*/
#endregion

using System.Collections;
using System.Text;

namespace Westwind.Utilities
{

	/// <summary>
	/// Object that holds a single Validation Error for the business object
	/// </summary>
	public class ValidationError 
	{		
		/// <summary>
		/// The error message for this validation error.
		/// </summary>
		public string Message { get; set; }
		

		/// <summary>
		/// The name of the field that this error relates to.
		/// </summary>
		public string ControlID { get; set; }
		
		/// <summary>
		/// An ID set for the Error. This ID can be used as a correlation between bus object and UI code.
		/// </summary>
		public string ID { get; set; }
		
		public ValidationError() {}

		public ValidationError(string message, string fieldName = null, string id = null)            
		{
			Message = message;
			ControlID = fieldName;
			ID = id;
		}

	}
}
