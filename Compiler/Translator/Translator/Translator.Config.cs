using System.Diagnostics;
using System.IO;

using Bridge.Translator.Utils;

namespace Bridge.Translator
{
    public partial class Translator
    {
        public virtual void RunEvent(string e)
        {
            var info = new ProcessStartInfo()
            {
                FileName = e
            };
            info.WindowStyle = ProcessWindowStyle.Hidden;

            if (!File.Exists(e))
            {
                throw new TranslatorException("The specified file '" + e + "' couldn't be found." +
                    "\nWarning: Bridge.NET translator working directory: " + Directory.GetCurrentDirectory());
            }

            using (var p = Process.Start(info))
            {
                p.WaitForExit();

                if (p.ExitCode != 0)
                {
                    throw new TranslatorException("Error: The command '" + e + "' returned with exit code: " + p.ExitCode);
                }
            }
        }

        internal virtual void ApplyProjectPropertiesToConfig()
        {
            this.Log.Trace("ApplyProjectPropertiesToConfig...");

            var configReader = new AssemblyConfigHelper(this.Log);
            configReader.ApplyTokens(this.AssemblyInfo, this.ProjectProperties);

            this.Log.Trace("ApplyProjectPropertiesToConfig done");
        }
    }
}