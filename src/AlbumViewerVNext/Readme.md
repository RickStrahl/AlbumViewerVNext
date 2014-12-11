# West Wind Album Viewer VNext Sample
** Sample SPA application demonstrating some VNext features**

This is the sample code for the Album Viewer sample application from the 
CoDe Magazine Article *A First Look at ASP.NET vNext* and various vNext blog
posts from Rick Strahl's Web Log.


### Getting Started ###
The sample uses SQL Server sample data from a database that is provided 
as a backup file.

You can restore the backup into SQL Server with:

```sql
-- change the path to your install location (c:\code\ here)
RESTORE DATABASE MusicStore
 FROM DISK = 'c:\code\AlbumViewerVNext\src\AlbumViewerVNext\app_data\musicstore.bak'
 WITH MOVE 'MusicStore' TO 'c:\code\AlbumViewerVNext\src\AlbumViewerVNext\app_data\musicstore.mdf',
      MOVE 'MusicStore_Log' TO 'c:\code\AlbumViewerVNext\src\AlbumViewerVNext\app_data\musicstore.log'
```

### Running the Application ###
You can run the application in a number of different ways. The easiest is probably
using Visual Studio and simply opening the project and View in Web Browser or Run
the application. Alternately you can run the sample from the command line.

**From Visual Studio**
* Open Visual Studio
* Open the AlbumViewerVNext Solution
* Run the AlbumViewerVNext Project
* Or: Select Index.html and View in Web Browser


**From the command line:**
If you don't have the KRE Runtime installed:

* Go to: https://github.com/aspnet/Home#getting-started
* Follow the KRuntime install directions
* Install with PowerShell

Once the runtime is installed:

* Change to <install>\src\albumviewervnext folder
* Run k web
* Navigate to http://localhost:5000/

Alternately:

* Run k kestrel  (to use the native .NET Kestrel Web server)
* Navigate to http://localhost:5004/index.html


**Requirements:**
* .NET 4.5.1 or later
* KRuntime Installation

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
