using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System
{
    /// <summary>
    /// Specifies the location where an environment variable is stored or retrieved in a set or get operation.
    /// </summary>
    [External]
    [Enum(Emit.Value)]
    public enum EnvironmentVariableTarget
    {
        Process = 0,
        User = 1,
        Machine = 2,
    }

    /// <summary>
    /// Provides information about, and means to manipulate, the current environment and platform. This class cannot be inherited.
    /// Some methods have Bridge implementation that differ from .Net.
    /// </summary>
    public static class Environment
    {
        /// <summary>
        /// Specifies enumerated constants used to retrieve directory paths to system special folders.
        /// </summary>
        [External]
        [Enum(Emit.Value)]
        public enum SpecialFolder
        {
            //
            //      Represents the file system directory that serves as a common repository for
            //       application-specific data for the current, roaming user.
            //     A roaming user works on more than one computer on a network. A roaming user's
            //       profile is kept on a server on the network and is loaded onto a system when the
            //       user logs on.
            //
            ApplicationData = Win32Native.CSIDL_APPDATA,
            //
            //      Represents the file system directory that serves as a common repository for application-specific data that
            //       is used by all users.
            //
            CommonApplicationData = Win32Native.CSIDL_COMMON_APPDATA,
            //
            //     Represents the file system directory that serves as a common repository for application specific data that
            //       is used by the current, non-roaming user.
            //
            LocalApplicationData = Win32Native.CSIDL_LOCAL_APPDATA,
            //
            //     Represents the file system directory that serves as a common repository for Internet
            //       cookies.
            //
            Cookies = Win32Native.CSIDL_COOKIES,
            Desktop = Win32Native.CSIDL_DESKTOP,
            //
            //     Represents the file system directory that serves as a common repository for the user's
            //       favorite items.
            //
            Favorites = Win32Native.CSIDL_FAVORITES,
            //
            //     Represents the file system directory that serves as a common repository for Internet
            //       history items.
            //
            History = Win32Native.CSIDL_HISTORY,
            //
            //     Represents the file system directory that serves as a common repository for temporary
            //       Internet files.
            //
            InternetCache = Win32Native.CSIDL_INTERNET_CACHE,
            //
            //      Represents the file system directory that contains
            //       the user's program groups.
            //
            Programs = Win32Native.CSIDL_PROGRAMS,
            MyComputer = Win32Native.CSIDL_DRIVES,
            MyMusic = Win32Native.CSIDL_MYMUSIC,
            MyPictures = Win32Native.CSIDL_MYPICTURES,
            //      "My Videos" folder
            MyVideos = Win32Native.CSIDL_MYVIDEO,
            //
            //     Represents the file system directory that contains the user's most recently used
            //       documents.
            //
            Recent = Win32Native.CSIDL_RECENT,
            //
            //     Represents the file system directory that contains Send To menu items.
            //
            SendTo = Win32Native.CSIDL_SENDTO,
            //
            //     Represents the file system directory that contains the Start menu items.
            //
            StartMenu = Win32Native.CSIDL_STARTMENU,
            //
            //     Represents the file system directory that corresponds to the user's Startup program group. The system
            //       starts these programs whenever any user logs on to Windows NT, or
            //       starts Windows 95 or Windows 98.
            //
            Startup = Win32Native.CSIDL_STARTUP,
            //
            //     System directory.
            //
            System = Win32Native.CSIDL_SYSTEM,
            //
            //     Represents the file system directory that serves as a common repository for document
            //       templates.
            //
            Templates = Win32Native.CSIDL_TEMPLATES,
            //
            //     Represents the file system directory used to physically store file objects on the desktop.
            //       This should not be confused with the desktop folder itself, which is
            //       a virtual folder.
            //
            DesktopDirectory = Win32Native.CSIDL_DESKTOPDIRECTORY,
            //
            //     Represents the file system directory that serves as a common repository for documents.
            //
            Personal = Win32Native.CSIDL_PERSONAL,
            //
            // "MyDocuments" is a better name than "Personal"
            //
            MyDocuments = Win32Native.CSIDL_PERSONAL,
            //
            //     Represents the program files folder.
            //
            ProgramFiles = Win32Native.CSIDL_PROGRAM_FILES,
            //
            //     Represents the folder for components that are shared across applications.
            //
            CommonProgramFiles = Win32Native.CSIDL_PROGRAM_FILES_COMMON,
#if !FEATURE_CORECLR
            //
            //      <user name>\Start Menu\Programs\Administrative Tools
            //
            AdminTools = Win32Native.CSIDL_ADMINTOOLS,
            //
            //      USERPROFILE\Local Settings\Application Data\Microsoft\CD Burning
            //
            CDBurning = Win32Native.CSIDL_CDBURN_AREA,
            //
            //      All Users\Start Menu\Programs\Administrative Tools
            //
            CommonAdminTools = Win32Native.CSIDL_COMMON_ADMINTOOLS,
            //
            //      All Users\Documents
            //
            CommonDocuments = Win32Native.CSIDL_COMMON_DOCUMENTS,
            //
            //      All Users\My Music
            //
            CommonMusic = Win32Native.CSIDL_COMMON_MUSIC,
            //
            //      Links to All Users OEM specific apps
            //
            CommonOemLinks = Win32Native.CSIDL_COMMON_OEM_LINKS,
            //
            //      All Users\My Pictures
            //
            CommonPictures = Win32Native.CSIDL_COMMON_PICTURES,
            //
            //      All Users\Start Menu
            //
            CommonStartMenu = Win32Native.CSIDL_COMMON_STARTMENU,
            //
            //      All Users\Start Menu\Programs
            //
            CommonPrograms = Win32Native.CSIDL_COMMON_PROGRAMS,
            //
            //     All Users\Startup
            //
            CommonStartup = Win32Native.CSIDL_COMMON_STARTUP,
            //
            //      All Users\Desktop
            //
            CommonDesktopDirectory = Win32Native.CSIDL_COMMON_DESKTOPDIRECTORY,
            //
            //      All Users\Templates
            //
            CommonTemplates = Win32Native.CSIDL_COMMON_TEMPLATES,
            //
            //      All Users\My Video
            //
            CommonVideos = Win32Native.CSIDL_COMMON_VIDEO,
            //
            //      windows\fonts
            //
            Fonts = Win32Native.CSIDL_FONTS,
            //
            //      %APPDATA%\Microsoft\Windows\Network Shortcuts
            //
            NetworkShortcuts = Win32Native.CSIDL_NETHOOD,
            //
            //      %APPDATA%\Microsoft\Windows\Printer Shortcuts
            //
            PrinterShortcuts = Win32Native.CSIDL_PRINTHOOD,
            //
            //      USERPROFILE
            //
            UserProfile = Win32Native.CSIDL_PROFILE,
            //
            //      x86 Program Files\Common on RISC
            //
            CommonProgramFilesX86 = Win32Native.CSIDL_PROGRAM_FILES_COMMONX86,
            //
            //      x86 C:\Program Files on RISC
            //
            ProgramFilesX86 = Win32Native.CSIDL_PROGRAM_FILESX86,
            //
            //      Resource Directory
            //
            Resources = Win32Native.CSIDL_RESOURCES,
            //
            //      Localized Resource Directory
            //
            LocalizedResources = Win32Native.CSIDL_RESOURCES_LOCALIZED,
            //
            //      %windir%\System32 or %windir%\syswow64
            //
            SystemX86 = Win32Native.CSIDL_SYSTEMX86,
            //
            //      GetWindowsDirectory()
            //
            Windows = Win32Native.CSIDL_WINDOWS,
#endif // !FEATURE_CORECLR
        }

        /// <summary>
        /// Specifies options to use for getting the path to a special folder.
        /// </summary>
        [External]
        [Enum(Emit.Value)]
        public enum SpecialFolderOption
        {
            None = 0,
            Create = Win32Native.CSIDL_FLAG_CREATE,
            DoNotVerify = Win32Native.CSIDL_FLAG_DONT_VERIFY,
        }

        [External]
        private static class Win32Native
        {
            // .NET Framework 4.0 and newer - all versions of windows ||| \public\sdk\inc\shlobj.h
            internal const int CSIDL_FLAG_CREATE = 0x8000; // force folder creation in SHGetFolderPath
            internal const int CSIDL_FLAG_DONT_VERIFY = 0x4000; // return an unverified folder path
            internal const int CSIDL_ADMINTOOLS = 0x0030; // <user name>\Start Menu\Programs\Administrative Tools
            internal const int CSIDL_CDBURN_AREA = 0x003b; // USERPROFILE\Local Settings\Application Data\Microsoft\CD Burning
            internal const int CSIDL_COMMON_ADMINTOOLS = 0x002f; // All Users\Start Menu\Programs\Administrative Tools
            internal const int CSIDL_COMMON_DOCUMENTS = 0x002e; // All Users\Documents
            internal const int CSIDL_COMMON_MUSIC = 0x0035; // All Users\My Music
            internal const int CSIDL_COMMON_OEM_LINKS = 0x003a; // Links to All Users OEM specific apps
            internal const int CSIDL_COMMON_PICTURES = 0x0036; // All Users\My Pictures
            internal const int CSIDL_COMMON_STARTMENU = 0x0016; // All Users\Start Menu
            internal const int CSIDL_COMMON_PROGRAMS = 0X0017; // All Users\Start Menu\Programs
            internal const int CSIDL_COMMON_STARTUP = 0x0018; // All Users\Startup
            internal const int CSIDL_COMMON_DESKTOPDIRECTORY = 0x0019; // All Users\Desktop
            internal const int CSIDL_COMMON_TEMPLATES = 0x002d; // All Users\Templates
            internal const int CSIDL_COMMON_VIDEO = 0x0037; // All Users\My Video
            internal const int CSIDL_FONTS = 0x0014; // windows\fonts
            internal const int CSIDL_MYVIDEO = 0x000e; // "My Videos" folder
            internal const int CSIDL_NETHOOD = 0x0013; // %APPDATA%\Microsoft\Windows\Network Shortcuts
            internal const int CSIDL_PRINTHOOD = 0x001b; // %APPDATA%\Microsoft\Windows\Printer Shortcuts
            internal const int CSIDL_PROFILE = 0x0028; // %USERPROFILE% (%SystemDrive%\Users\%USERNAME%)
            internal const int CSIDL_PROGRAM_FILES_COMMONX86 = 0x002c; // x86 Program Files\Common on RISC
            internal const int CSIDL_PROGRAM_FILESX86 = 0x002a; // x86 C:\Program Files on RISC
            internal const int CSIDL_RESOURCES = 0x0038; // %windir%\Resources
            internal const int CSIDL_RESOURCES_LOCALIZED = 0x0039; // %windir%\resources\0409 (code page)
            internal const int CSIDL_SYSTEMX86 = 0x0029; // %windir%\system32
            internal const int CSIDL_WINDOWS = 0x0024; // GetWindowsDirectory()

            // .NET Framework 3.5 and earlier - all versions of windows
            internal const int CSIDL_APPDATA = 0x001a;
            internal const int CSIDL_COMMON_APPDATA = 0x0023;
            internal const int CSIDL_LOCAL_APPDATA = 0x001c;
            internal const int CSIDL_COOKIES = 0x0021;
            internal const int CSIDL_FAVORITES = 0x0006;
            internal const int CSIDL_HISTORY = 0x0022;
            internal const int CSIDL_INTERNET_CACHE = 0x0020;
            internal const int CSIDL_PROGRAMS = 0x0002;
            internal const int CSIDL_RECENT = 0x0008;
            internal const int CSIDL_SENDTO = 0x0009;
            internal const int CSIDL_STARTMENU = 0x000b;
            internal const int CSIDL_STARTUP = 0x0007;
            internal const int CSIDL_SYSTEM = 0x0025;
            internal const int CSIDL_TEMPLATES = 0x0015;
            internal const int CSIDL_DESKTOPDIRECTORY = 0x0010;
            internal const int CSIDL_PERSONAL = 0x0005;
            internal const int CSIDL_PROGRAM_FILES = 0x0026;
            internal const int CSIDL_PROGRAM_FILES_COMMON = 0x002b;
            internal const int CSIDL_DESKTOP = 0x0000;
            internal const int CSIDL_DRIVES = 0x0011;
            internal const int CSIDL_MYMUSIC = 0x000d;
            internal const int CSIDL_MYPICTURES = 0x0027;
        }

        /// <summary>
        /// A helper property to get global scope
        /// </summary>
        private static dynamic Global
        {
            [Template("Bridge.global")]
            get;
        }

        private static dynamic Location
        {
            get
            {
                var g = Global;

                if (g && g.location)
                {
                    return g.location;
                }

                return null;
            }
        }

        private static Dictionary<string, string> Variables;

        private static Dictionary<string, string> PatchDictionary(Dictionary<string, string> d)
        {
            d.As<dynamic>().noKeyCheck = true;

            return d;
        }

        static Environment()
        {
            Variables = new Dictionary<string, string>();
            PatchDictionary(Variables);
        }

        /// <summary>
        /// Gets the command line for this process.
        /// The Bridge implementation returns location.pathname + " " + location.search
        /// </summary>
        public static string CommandLine
        {
            get
            {
                return string.Join(" ", GetCommandLineArgs());
            }
        }

        /// <summary>
        /// Gets or sets the fully qualified path of the current working directory.
        /// The Bridge implementation controls window.location.pathname.
        /// </summary>
        public static string CurrentDirectory
        {
            get
            {
                var l = Location;

                return l ? l.pathname : "";
            }

            set
            {
                var l = Location;

                if (l)
                {
                    l.pathname = value;
                }
            }
        }

        /// <summary>
        /// Gets a unique identifier for the current managed thread.
        /// The Bridge implementation returns zero.
        /// </summary>
        public static extern int CurrentManagedThreadId
        {
            [Template("0")]
            get;
        }

        /// <summary>
        /// Gets or sets the exit code of the process.
        /// </summary>
        public static int ExitCode
        {
            get;
            set;
        } = 0;

        /// <summary>
        /// Gets a value that indicates whether the current application domain is being unloaded or the common language runtime (CLR) is shutting down.
        /// The Bridge implementation returns false.
        /// </summary>
        public static bool HasShutdownStarted
        {
            [Template("false")]
            get;
        }

        /// <summary>
        /// Determines whether the current operating system is a 64-bit operating system.
        /// </summary>
        public static bool Is64BitOperatingSystem
        {
            get
            {
                dynamic n = Global ? Global.navigator : null;

                if (n && (n.userAgent.indexOf("WOW64") != -1 || n.userAgent.indexOf("Win64") != -1))
                {
                    return true;
                }

                return false;
            }
        }

        /// <summary>
        /// Determines whether the current process is a 64-bit process.
        /// The Bridge implementation returns false.
        /// </summary>
        public static bool Is64BitProcess
        {
            [Template("false")]
            get;
        }

        /// <summary>
        /// Gets the NetBIOS name of this local computer.
        /// The Bridge implementation returns an empty string.
        /// </summary>
        public static string MachineName
        {
            [Template("\"\"")]
            get;
        }

        /// <summary>
        /// Gets the newline string defined for this environment.
        /// The Bridge implementation returns "\n".
        /// </summary>
        public static extern string NewLine
        {
            [Template("\"\\n\"")]
            get;
        }

        /// <summary>
        /// The Bridge implementation returns null.
        /// </summary>
        public static object OSVersion
        {
            [Template("null")]
            get;
        }

        /// <summary>
        /// Gets the number of processors on the current machine.
        /// The Bridge implementation returns navigator.hardwareConcurrency if exists, otherwise 1.
        /// </summary>
        public static int ProcessorCount
        {
            get
            {
                dynamic n = Global ? Global.navigator : null;

                if (n && n.hardwareConcurrency)
                {
                    return n.hardwareConcurrency;
                }

                return 1;
            }
        }

        /// <summary>
        /// Gets current stack trace information.
        /// </summary>
        public static string StackTrace
        {
            get
            {
                var err = Script.Write<dynamic>("new Error()");
                string s = err.stack;

                if (!string.IsNullOrEmpty(s))
                {
                    if (s.IndexOf("at") >= 0)
                    {
                        return s.Substring(s.IndexOf("at"));
                    }
                }

                return "";
            }
        }

        /// <summary>
        /// Gets the fully qualified path of the system directory.
        /// The Bridge implementation returns an empty string;
        /// </summary>
        public static string SystemDirectory
        {
            [Template("\"\"")]
            get;
        }


        /// <summary>
        /// Gets the number of bytes in the operating system's memory page.
        /// The Bridge implementation returns 1.
        /// </summary>
        public static int SystemPageSize
        {
            [Template("1")]
            get;
        }

        /// <summary>
        /// Gets the number of milliseconds elapsed since the system started.
        /// The Bridge implementation returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
        /// </summary>
        public static int TickCount
        {
            [Template("Date.now()")]
            get;
        }

        /// <summary>
        /// Gets the network domain name associated with the current user.
        /// The Bridge implementation returns an empty string;
        /// </summary>
        public static string UserDomainName
        {
            [Template("\"\"")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the current process is running in user interactive mode.
        /// The Bridge implementation returns true;
        /// </summary>
        public static bool UserInteractive
        {
            [Template("true")]
            get;
        }

        /// <summary>
        /// Gets the user name of the person who is currently logged on to the Windows operating system.
        /// The Bridge implementation returns an empty string;
        /// </summary>
        public static string UserName
        {
            [Template("\"\"")]
            get;
        }

        /// <summary>
        /// Gets a Version object that describes the major, minor, build, and revision numbers of the common language runtime.
        /// The Bridge implementation returns Bridge Compiler version.
        /// </summary>
        public static Version Version
        {
            get
            {
                var s = Bridge.Utils.SystemAssembly.Assembly.CompilerVersionString;

                Version v;

                if (Version.TryParse(s, out v))
                {
                    return v;
                }

                return new Version();
            }
        }

        /// <summary>
        /// Gets the amount of physical memory mapped to the process context.
        /// The Bridge implementation returns zero.
        /// </summary>
        public static long WorkingSet
        {
            [Template("System.Int64(0)")]
            get;
        }

        /// <summary>
        /// Terminates this process and returns an exit code to the operating system.
        /// The Bridge implementation just sets ExitCode.
        /// </summary>
        /// <param name="exitCode">The exit code to return to the operating system. Use 0 (zero) to indicate that the process completed successfully.</param>
        public static void Exit(int exitCode)
        {
            ExitCode = exitCode;
        }

        /// <summary>
        /// Replaces the name of each environment variable embedded in the specified string with the string equivalent of the value of the variable, then returns the resulting string.
        /// </summary>
        /// <param name="name">A string containing the names of zero or more environment variables. Each environment variable is quoted with the percent sign character (%).</param>
        /// <returns>A string with each environment variable replaced by its value.</returns>
        public static string ExpandEnvironmentVariables(string name)
        {
            if (name == null)
            {
                throw new ArgumentNullException(name);
            }

            // Case sensitive
            foreach (var pair in Variables)
            {
                name = name.Replace("%" + pair.Key + "%", pair.Value);
            }

            return name;
        }

        /// <summary>
        /// Immediately terminates a process after writing a message to the Windows Application event log, and then includes the message in error reporting to Microsoft.
        /// The Bridge implementation throws an exception with the message specified. Note it will run finally block if any.
        /// </summary>
        /// <param name="message">A message that explains why the process was terminated, or null if no explanation is provided.</param>
        public static void FailFast(string message)
        {
            throw new Exception(message);
        }

        /// <summary>
        /// Immediately terminates a process after writing a message to the Windows Application event log, and then includes the message and exception information in error reporting to Microsoft.
        /// The Bridge implementation throws an exception with the message specified. Note it will run finally block if any.
        /// </summary>
        /// <param name="message">A message that explains why the process was terminated, or null if no explanation is provided.</param>
        /// <param name="exception">An exception that represents the error that caused the termination. This is typically the exception in a catch block.</param>
        public static void FailFast(string message, Exception exception)
        {
            throw new Exception(message, exception);
        }

        /// <summary>
        /// Returns a string array containing the command-line arguments for the current process.
        /// </summary>
        /// <returns>The Bridge implementation returns location.pathname and query parameters.</returns>
        public static string[] GetCommandLineArgs()
        {
            var l = Location;

            if (l)
            {
                var args = new List<string>();

                string path = l.pathname;

                if (!string.IsNullOrEmpty(path))
                {
                    args.Add(path);
                }

                string search = l.search;

                if (!string.IsNullOrEmpty(search) && search.Length > 1)
                {
                    var query = search.Substring(1).Split('&');

                    for (int i = 0; i < query.Length; i++)
                    {
                        var param = query[i].Split('=');

                        for (int j = 0; j < param.Length; j++)
                        {
                            args.Add(param[j]);
                        }
                    }
                }

                return args.ToArray();
            }

            return new string[0];
        }

        /// <summary>
        /// Retrieves the value of an environment variable from the current process.
        /// </summary>
        /// <param name="variable">The name of the environment variable.</param>
        /// <returns>The value of the environment variable specified by variable, or null if the environment variable is not found.</returns>
        public static string GetEnvironmentVariable(string variable)
        {
            if (variable == null)
            {
                throw new ArgumentNullException("variable");
            }

            string r;

            if (Variables.TryGetValue(variable.ToLower(), out r))
            {
                return r;
            }

            return null;
        }

        /// <summary>
        /// Retrieves the value of an environment variable from the current process or from the Windows operating system registry key for the current user or local machine.
        /// </summary>
        /// <param name="variable">The name of an environment variable.</param>
        /// <param name="target">Ignored by Bridge. One of the EnvironmentVariableTarget values.</param>
        /// <returns>The Bridge implementation ignores target. The value of the environment variable specified by variable, or null if the environment variable is not found.</returns>
        public static string GetEnvironmentVariable(string variable, EnvironmentVariableTarget target)
        {
            return GetEnvironmentVariable(variable);
        }

        /// <summary>
        /// Retrieves all environment variable names and their values from the current process.
        /// </summary>
        /// <returns>A dictionary that contains all environment variable names and their values; otherwise, an empty dictionary if no environment variables are found.</returns>
        public static IDictionary GetEnvironmentVariables()
        {
            return PatchDictionary(new Dictionary<string, string>(Variables));
        }

        /// <summary>
        /// Retrieves all environment variable names and their values from the current process, or from the Windows operating system registry key for the current user or local machine.
        /// </summary>
        /// <param name="target">One of the EnvironmentVariableTarget values.</param>
        /// <returns>The Bridge implementation ignores target. A dictionary that contains all environment variable names and their values; otherwise, an empty dictionary if no environment variables are found.</returns>
        public static IDictionary GetEnvironmentVariables(EnvironmentVariableTarget target)
        {
            return GetEnvironmentVariables();
        }

        /// <summary>
        /// Gets the path to the system special folder that is identified by the specified enumeration.
        /// </summary>
        /// <param name="folder">An enumerated constant that identifies a system special folder.</param>
        /// <returns>The Bridge implementation returns an empty string.</returns>
        [Template("\"\"")]
        public static extern string GetFolderPath(Environment.SpecialFolder folder);

        /// <summary>
        /// Gets the path to the system special folder that is identified by the specified enumeration, and uses a specified option for accessing special folders.
        /// </summary>
        /// <param name="folder">An enumerated constant that identifies a system special folder.</param>
        /// <param name="option">Specifies options to use for accessing a special folder.</param>
        /// <returns>The Bridge implementation returns an empty string.</returns>
        [Template("\"\"")]
        public static extern string GetFolderPath(Environment.SpecialFolder folder, Environment.SpecialFolderOption option);

        /// <summary>
        /// Returns an array of string containing the names of the logical drives on the current computer.
        /// </summary>
        /// <returns>The Bridge implementation returns an empty string[].</returns>
        public static string[] GetLogicalDrives()
        {
            return new string[0];
        }

        /// <summary>
        /// Creates, modifies, or deletes an environment variable stored in the current process.
        /// </summary>
        /// <param name="variable">The name of an environment variable.</param>
        /// <param name="value">A value to assign to variable.</param>
        public static void SetEnvironmentVariable(string variable, string value)
        {
            if (variable == null)
            {
                throw new ArgumentNullException("variable");
            }

            if (string.IsNullOrEmpty(variable)
                || variable.StartsWith(char.MinValue.ToString())
                || variable.Contains("=")
                || variable.Length > 32767)
            {
                throw new ArgumentException("Incorrect variable (cannot be empty, contain zero character nor equal sign, be longer than 32767).");
            }

            variable = variable.ToLower();

            if (string.IsNullOrEmpty(value))
            {
                if (Variables.ContainsKey(variable))
                {
                    Variables.Remove(variable);
                }
            }
            else
            {
                Variables[variable] = value;
            }
        }

        /// <summary>
        /// Creates, modifies, or deletes an environment variable stored in the current process or in the Windows operating system registry key reserved for the current user or local machine.
        /// </summary>
        /// <param name="variable">The name of an environment variable.</param>
        /// <param name="value">A value to assign to variable.</param>
        /// <param name="target">Ignored by Bridge. One of the enumeration values that specifies the location of the environment variable.</param>
        public static void SetEnvironmentVariable(string variable, string value, EnvironmentVariableTarget target)
        {
            SetEnvironmentVariable(variable, value);
        }
    }
}