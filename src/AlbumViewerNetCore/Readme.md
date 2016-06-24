# West Wind Album Viewer ASP.NET Core Sample
**Sample SPA application demonstrating ASP.NET Core features**

This is the sample code for the Album Viewer sample application from the 
CoDe Magazine Article *A First Look at ASP.NET vNext* and various ASP.NET Core blog
posts from Rick Strahl's Web Log. Actually this code has changed drastically since the article was published.

This sample currently supports:  
**ASP.NET Core RC2**

This sample is a Mobile Web enabled album viewer that allows you to browse, add and music albums and artists that demonstrates using a client side AngularJs (1.x) application talking to a ASP.NET 5 API backend using Entity Framework and a simple layer to handle data access.  Yes I know - porting to Angular 2 is one of the next things to do.


### Related Links
* [AlbumViewer Online Sample](http://samples.west-wind.com/AlbumViewerCore/#/albums)


### Screen Shot
![](AlbumViewer.png)


### Getting Started ###
If you're running the application locally through IIS or Kestrel, the application should just work as is. By default it uses a SqLite data base that is create in the Web app's content (not Web) root. The sample also works with SQL Server. To determine which is used the Appsettings.json file is used:

```json
"Data": {
    "AlbumViewer": {
      "useSqLite": "true",
      "SqlServerConnectionString": "server=.;database=AlbumViewer;integrated security=true;",
    } 
},
//... other settings omitted
```  

##### Using SqLite
SqLite will autmoatically create the database file in the content root. For this to work make sure that the account the Web application is running under has rights to create a new file and read/write to that file.

##### Using Sql Server
To use Sql Server create a new database and then point the connection string at the new database. Make sure the account the Web server is running under has rights to create tables,read/write data.

#### Platforms 
Currently the app has been tested only to run under Windows. But using SqLite should also work on other platforms. Officially tested version coming soon.


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
