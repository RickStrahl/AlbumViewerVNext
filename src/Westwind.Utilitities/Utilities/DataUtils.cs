#region License
/*
 **************************************************************
 *  Author: Rick Strahl 
 *          © West Wind Technologies, 2009
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

using System;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using System.Text;


namespace Westwind.Utilities
{
    /// <summary>
    /// Utility library for common data operations.
    /// </summary>
    public static class DataUtils
    {        
        public const BindingFlags MemberAccess =
            BindingFlags.Public | BindingFlags.NonPublic |
            BindingFlags.Static | BindingFlags.Instance | BindingFlags.IgnoreCase;

        public const BindingFlags MemberPublicInstanceAccess =
            BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase;

        
        /// <summary>
        /// Generates a unique Id as a string of up to 16 characters.
        /// Based on a GUID and the size takes that subset of a the
        /// Guid's 16 bytes to create a string id.
        /// 
        /// String Id contains numbers and lower case alpha chars 36 total.
        /// 
        /// Sizes: 6 gives roughly 99.97% uniqueness. 
        ///        8 gives less than 1 in a million doubles.
        ///        16 will give full GUID strength uniqueness
        /// </summary>
        /// <returns></returns>
        /// <summary>
        public static string GenerateUniqueId(int stringSize = 8)
        {
            string chars = "abcdefghijkmnopqrstuvwxyz1234567890";
            StringBuilder result = new StringBuilder(stringSize);
            int count = 0;

            

            foreach (byte b in Guid.NewGuid().ToByteArray())
            {
                result.Append(chars[b % (chars.Length - 1)]);
                count++;
                if (count >= stringSize)
                    return result.ToString();
            }
            return result.ToString();
        }


        /// Generates a unique numeric ID. Generated off a GUID and
        /// returned as a 64 bit long value
        /// </summary>
        /// <returns></returns>
        public static long GenerateUniqueNumericId()
        {
            byte[] bytes = Guid.NewGuid().ToByteArray();            
            return BitConverter.ToInt64(bytes, 0);
        }

        static Random rnd = new Random();

        /// <summary>
        /// Returns a random integer in a range of numbers
        /// a single seed value.
        /// </summary>
        /// <param name="min">The minimum value</param>
        /// <param name="max">The max value *including* this value (unlike Random.Next() which doesn't include it)</param>
        /// <returns></returns>
        public static int GetRandomNumber(int min, int max)
        {
            return rnd.Next(min, max + 1);
        }
       

      
        /// <summary>
        /// Copies the data of one object to another. The target object 'pulls' properties of the first. 
        /// This any matching properties are written to the target.
        ///
        /// The object copy is a shallow copy only. Any nested types will be copied as 
        /// whole values rather than individual property assignments (ie. via assignment)
        /// </summary>
        /// <param name="source">The source object to copy from</param>
        /// <param name="target">The object to copy to</param>
        /// <param name="excludedProperties">A comma delimited list of properties that should not be copied</param>
        /// <param name="memberAccess">Reflection binding access</param>
        public static void CopyObjectData(object source, object target, string excludedProperties = null, BindingFlags memberAccess = MemberAccess)
        {
            string[] excluded = null;
            if (!string.IsNullOrEmpty(excludedProperties))
                excluded = excludedProperties.Split(new char[1] { ',' }, StringSplitOptions.RemoveEmptyEntries);

            MemberInfo[] miT = target.GetType().GetTypeInfo().GetMembers(memberAccess);
            foreach (MemberInfo Field in miT)
            {
                string name = Field.Name;

                // Skip over any property exceptions
                if (!string.IsNullOrEmpty(excludedProperties) &&
                    excluded.Contains(name))
                    continue;

                    PropertyInfo piTarget = Field as PropertyInfo;
                    PropertyInfo SourceField = source.GetType().GetTypeInfo().GetProperty(name, memberAccess);
                    if (SourceField == null)
                        continue;

                    if (piTarget.CanWrite && SourceField.CanRead)
                    {
                        object SourceValue = SourceField.GetValue(source, null);
                        piTarget.SetValue(target, SourceValue, null);
                    }
            }
        }

    }
}
