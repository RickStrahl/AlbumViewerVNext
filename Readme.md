# West Wind Album Viewer ASP.NET 5 Sample
**Sample SPA application demonstrating ASP.NET 5 features**

This is the sample code for the Album Viewer sample application from the 
CoDe Magazine Article *A First Look at ASP.NET vNext* and various vNext blog
posts from Rick Strahl's Web Log.

This sample is a Mobile Web enabled album viewer that allows you to browse, add and music albums and artists that demonstrates using a client side AngularJs application talking to a ASP.NET 5 API backend using Entity Framework and a simple layer to handle data access. 

> Current Supported Version: Beta4 (use tags for others)

* [A First Look at ASP.NET VNext](http://www.codemag.com/Article/1501081)
* [ASP.NET VNext: The Next Generation](http://www.codemag.com/Article/1501061)
* [Online Sample](http://samples.west-wind.com/albumviewer/index.html)

![](AlbumViewer.png)

### Getting Started ###
The sample uses SQL Server sample data which you can import from a SQL script.

To use it:

* Open the Sql Data Tools or Sql Server Management Studio
* Create a database named AlbumViewerVNext (or whatever)
* Select the database
* Run the AlbumViewerVNext.sql script from the AlbumViewerAspNet5\App_Data folder

The script creates the tables and sample data in order for the application to run.

### Running the Application ###
You can run the application in a number of different ways. The easiest is probably
using Visual Studio and simply opening the project and View in Web Browser or Run
the application. Alternately you can run the sample from the command line.

**From Visual Studio**
* Open Visual Studio
* Open the AlbumViewerVNext Solution
* Run the AlbumViewerAspNet5 Project
* Or: Select Index.html in /wwwroot/ and View in Web Browser


**From the command line:**

If you don't have the KRE Runtime installed:

* Go to: https://github.com/aspnet/Home#getting-started
* Follow the KRuntime install directions
* Install with PowerShell
* Run dnvm upgrade -runtime CoreClr 
* Run dnvm upgrade -runtime Clr

Once the runtime is installed:

* Change to <install>\src\albumviewervnext folder
* Run dnx web
* Navigate to http://localhost:5000/ in your browser

**Requirements:**
* .NET 4.5.1 or later
* dnx Runtime Installation  (see supported version in tags)

**License:**
This sample is licensed under MIT license. Use, play with integrate code from
this repository as you see fit, at your own risk. This code is based on pre-release
code and updated regularly to reflect the latest current builds.

**Warranty Disclaimer: No Warranty!**

IN NO EVENT SHALL THE AUTHOR, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE 
THIS PROGRAM AND DOCUMENTATION, BE LIABLE FOR ANY COMMERCIAL, SPECIAL, INCIDENTAL, OR 
CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM INCLUDING, 
BUT NOT LIMITED TO, LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED 
BY YOU OR LOSSES SUSTAINED BY THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH 
ANY OTHER PROGRAMS, EVEN IF YOU OR OTHER PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY 
OF SUCH DAMAGES.
