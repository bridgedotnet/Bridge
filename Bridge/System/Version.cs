namespace System
{
    using Text;

    // A Version object contains four hierarchical numeric components: major, minor,
    // build and revision.  Build and revision may be unspecified, which is represented
    // internally as a -1.  By definition, an unspecified component matches anything
    // (both unspecified and specified), and an unspecified component is "less than" any
    // specified component.
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public sealed class Version : ICloneable, IComparable<Version>, IEquatable<Version>
    {
        // AssemblyName depends on the order staying the same
        private int _Major;

        private int _Minor;
        private int _Build = -1;
        private int _Revision = -1;

        private static readonly char SeparatorsArray = '.';

        public Version(int major, int minor, int build, int revision)
        {
            if (major < 0)
                throw new ArgumentOutOfRangeException("major", "Cannot be < 0");

            if (minor < 0)
                throw new ArgumentOutOfRangeException("minor", "Cannot be < 0");

            if (build < 0)
                throw new ArgumentOutOfRangeException("build", "Cannot be < 0");

            if (revision < 0)
                throw new ArgumentOutOfRangeException("revision", "Cannot be < 0");

            _Major = major;
            _Minor = minor;
            _Build = build;
            _Revision = revision;
        }

        public Version(int major, int minor, int build)
        {
            if (major < 0)
                throw new ArgumentOutOfRangeException("major", "Cannot be < 0");

            if (minor < 0)
                throw new ArgumentOutOfRangeException("minor", "Cannot be < 0");

            if (build < 0)
                throw new ArgumentOutOfRangeException("build", "Cannot be < 0");

            _Major = major;
            _Minor = minor;
            _Build = build;
        }

        public Version(int major, int minor)
        {
            if (major < 0)
                throw new ArgumentOutOfRangeException("major", "Cannot be < 0");

            if (minor < 0)
                throw new ArgumentOutOfRangeException("minor", "Cannot be < 0");

            _Major = major;
            _Minor = minor;
        }

        public Version(String version)
        {
            Version v = Version.Parse(version);
            _Major = v.Major;
            _Minor = v.Minor;
            _Build = v.Build;
            _Revision = v.Revision;
        }

        public Version()
        {
            _Major = 0;
            _Minor = 0;
        }

        // Properties for setting and getting version numbers
        public int Major
        {
            get
            {
                return _Major;
            }
        }

        public int Minor
        {
            get
            {
                return _Minor;
            }
        }

        public int Build
        {
            get
            {
                return _Build;
            }
        }

        public int Revision
        {
            get
            {
                return _Revision;
            }
        }

        public short MajorRevision
        {
            get
            {
                return (short)(_Revision >> 16);
            }
        }

        public short MinorRevision
        {
            get
            {
                return (short)(_Revision & 0xFFFF);
            }
        }

        public Object Clone()
        {
            Version v = new Version();
            v._Major = _Major;
            v._Minor = _Minor;
            v._Build = _Build;
            v._Revision = _Revision;
            return (v);
        }

        public int CompareTo(Object version)
        {
            if (version == null)
            {
                return 1;
            }

            Version v = version as Version;
            if (v == null)
            {
                throw new ArgumentException("version should be of System.Version type");
            }

            if (this._Major != v._Major)
                if (this._Major > v._Major)
                    return 1;
                else
                    return -1;

            if (this._Minor != v._Minor)
                if (this._Minor > v._Minor)
                    return 1;
                else
                    return -1;

            if (this._Build != v._Build)
                if (this._Build > v._Build)
                    return 1;
                else
                    return -1;

            if (this._Revision != v._Revision)
                if (this._Revision > v._Revision)
                    return 1;
                else
                    return -1;

            return 0;
        }

        public int CompareTo(Version value)
        {
            if (value == null)
                return 1;

            if (this._Major != value._Major)
                if (this._Major > value._Major)
                    return 1;
                else
                    return -1;

            if (this._Minor != value._Minor)
                if (this._Minor > value._Minor)
                    return 1;
                else
                    return -1;

            if (this._Build != value._Build)
                if (this._Build > value._Build)
                    return 1;
                else
                    return -1;

            if (this._Revision != value._Revision)
                if (this._Revision > value._Revision)
                    return 1;
                else
                    return -1;

            return 0;
        }

        public override bool Equals(Object obj)
        {
            return Equals(obj as Version);
        }

        public bool Equals(Version obj)
        {
            if (obj == null)
                return false;

            // check that major, minor, build & revision numbers match
            if ((this._Major != obj._Major) ||
                (this._Minor != obj._Minor) ||
                (this._Build != obj._Build) ||
                (this._Revision != obj._Revision))
                return false;

            return true;
        }

        public override int GetHashCode()
        {
            // Let's assume that most version numbers will be pretty small and just
            // OR some lower order bits together.

            int accumulator = 0;

            accumulator |= (this._Major & 0x0000000F) << 28;
            accumulator |= (this._Minor & 0x000000FF) << 20;
            accumulator |= (this._Build & 0x000000FF) << 12;
            accumulator |= (this._Revision & 0x00000FFF);

            return accumulator;
        }

        public override String ToString()
        {
            if (_Build == -1) return (ToString(2));
            if (_Revision == -1) return (ToString(3));
            return (ToString(4));
        }

        public String ToString(int fieldCount)
        {
            StringBuilder sb;
            switch (fieldCount)
            {
                case 0:
                    return (String.Empty);

                case 1:
                    return (_Major.ToString());

                case 2:
                    sb = new StringBuilder();
                    AppendPositiveNumber(_Major, sb);
                    sb.Append('.');
                    AppendPositiveNumber(_Minor, sb);
                    return sb.ToString();

                default:
                    if (_Build == -1)
                        throw new ArgumentException("Build should be > 0 if fieldCount > 2", "fieldCount");

                    if (fieldCount == 3)
                    {
                        sb = new StringBuilder();
                        AppendPositiveNumber(_Major, sb);
                        sb.Append('.');
                        AppendPositiveNumber(_Minor, sb);
                        sb.Append('.');
                        AppendPositiveNumber(_Build, sb);
                        return sb.ToString();
                    }

                    if (_Revision == -1)
                        throw new ArgumentException("Revision should be > 0 if fieldCount > 3", "fieldCount");

                    if (fieldCount == 4)
                    {
                        sb = new StringBuilder();
                        AppendPositiveNumber(_Major, sb);
                        sb.Append('.');
                        AppendPositiveNumber(_Minor, sb);
                        sb.Append('.');
                        AppendPositiveNumber(_Build, sb);
                        sb.Append('.');
                        AppendPositiveNumber(_Revision, sb);
                        return sb.ToString();
                    }

                    throw new ArgumentException("Should be < 5", "fieldCount");
            }
        }

        private const int ZERO_CHAR_VALUE = (int)'0';

        private static void AppendPositiveNumber(int num, StringBuilder sb)
        {
            int index = sb.Length;
            int reminder;

            do
            {
                reminder = num % 10;
                num = num / 10;
                sb.Insert(index, (char)(ZERO_CHAR_VALUE + reminder));
            } while (num > 0);
        }

        public static Version Parse(string input)
        {
            if (input == null)
            {
                throw new ArgumentNullException("input");
            }

            VersionResult r = new VersionResult();
            r.Init("input", true);
            if (!TryParseVersion(input, ref r))
            {
                throw r.GetVersionParseException();
            }
            return r.m_parsedVersion;
        }

        public static bool TryParse(string input, out Version result)
        {
            VersionResult r = new VersionResult();
            r.Init("input", false);
            bool b = TryParseVersion(input, ref r);
            result = r.m_parsedVersion;
            return b;
        }

        private static bool TryParseVersion(string version, ref VersionResult result)
        {
            int major, minor, build, revision;

            if ((Object)version == null)
            {
                result.SetFailure(ParseFailureKind.ArgumentNullException);

                return false;
            }

            String[] parsedComponents = version.Split(SeparatorsArray);
            int parsedComponentsLength = parsedComponents.Length;

            if ((parsedComponentsLength < 2) || (parsedComponentsLength > 4))
            {
                result.SetFailure(ParseFailureKind.ArgumentException);
                return false;
            }

            if (!TryParseComponent(parsedComponents[0], "version", ref result, out major))
            {
                return false;
            }

            if (!TryParseComponent(parsedComponents[1], "version", ref result, out minor))
            {
                return false;
            }

            parsedComponentsLength -= 2;

            if (parsedComponentsLength > 0)
            {
                if (!TryParseComponent(parsedComponents[2], "build", ref result, out build))
                {
                    return false;
                }

                parsedComponentsLength--;

                if (parsedComponentsLength > 0)
                {
                    if (!TryParseComponent(parsedComponents[3], "revision", ref result, out revision))
                    {
                        return false;
                    }
                    else
                    {
                        result.m_parsedVersion = new Version(major, minor, build, revision);
                    }
                }
                else
                {
                    result.m_parsedVersion = new Version(major, minor, build);
                }
            }
            else
            {
                result.m_parsedVersion = new Version(major, minor);
            }

            return true;
        }

        private static bool TryParseComponent(string component, string componentName, ref VersionResult result, out int parsedComponent)
        {
            if (!Int32.TryParse(component, out parsedComponent))
            {
                result.SetFailure(ParseFailureKind.FormatException, component);
                return false;
            }

            if (parsedComponent < 0)
            {
                result.SetFailure(ParseFailureKind.ArgumentOutOfRangeException, componentName);
                return false;
            }

            return true;
        }

        public static bool operator ==(Version v1, Version v2)
        {
            if (Object.ReferenceEquals(v1, null))
            {
                return Object.ReferenceEquals(v2, null);
            }

            return v1.Equals(v2);
        }

        public static bool operator !=(Version v1, Version v2)
        {
            return !(v1 == v2);
        }

        public static bool operator <(Version v1, Version v2)
        {
            if ((Object)v1 == null)
                throw new ArgumentNullException("v1");

            return (v1.CompareTo(v2) < 0);
        }

        public static bool operator <=(Version v1, Version v2)
        {
            if ((Object)v1 == null)
                throw new ArgumentNullException("v1");

            return (v1.CompareTo(v2) <= 0);
        }

        public static bool operator >(Version v1, Version v2)
        {
            return (v2 < v1);
        }

        public static bool operator >=(Version v1, Version v2)
        {
            return (v2 <= v1);
        }

        internal enum ParseFailureKind
        {
            ArgumentNullException,
            ArgumentException,
            ArgumentOutOfRangeException,
            FormatException
        }

        internal struct VersionResult
        {
            internal Version m_parsedVersion;
            internal ParseFailureKind m_failure;
            internal string m_exceptionArgument;
            internal string m_argumentName;
            internal bool m_canThrow;

            internal void Init(string argumentName, bool canThrow)
            {
                m_canThrow = canThrow;
                m_argumentName = argumentName;
            }

            internal void SetFailure(ParseFailureKind failure)
            {
                SetFailure(failure, String.Empty);
            }

            internal void SetFailure(ParseFailureKind failure, string argument)
            {
                m_failure = failure;
                m_exceptionArgument = argument;
                if (m_canThrow)
                {
                    throw GetVersionParseException();
                }
            }

            internal Exception GetVersionParseException()
            {
                switch (m_failure)
                {
                    case ParseFailureKind.ArgumentNullException:
                        return new ArgumentNullException(m_argumentName);

                    case ParseFailureKind.ArgumentException:
                        return new ArgumentException("VersionString");

                    case ParseFailureKind.ArgumentOutOfRangeException:
                        return new ArgumentOutOfRangeException(m_exceptionArgument, "Cannot be < 0");

                    case ParseFailureKind.FormatException:
                        // Regenerate the FormatException as would be thrown by Int32.Parse()
                        try
                        {
                            Int32.Parse(m_exceptionArgument);
                        }
                        catch (FormatException e)
                        {
                            return e;
                        }
                        catch (OverflowException e)
                        {
                            return e;
                        }

                        return new FormatException("InvalidString");

                    default:
                        return new ArgumentException("VersionString");
                }
            }
        }
    }
}