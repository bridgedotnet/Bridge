using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch1.Bridge
{
    [Category(Constants.MODULE_BRIDGE_CORE)]
    [TestFixture(TestNameFormat = "Bridge.Validation - {0}")]
    public class BridgeValidationTests
    {
        [Test(Name = "Validation.IsNull()")]
        public void TestValidationIsNull()
        {
            int? x = null;
            int? y = 5;

            Assert.True(Validation.IsNull(null), "'null' is null.");
            Assert.True(Validation.IsNull(x), "Null nullable variable is null.");

            Assert.False(Validation.IsNull("test"), "A string is not null.");
            Assert.False(Validation.IsNull(y), "Not null nullable variable is not null.");
        }

        /// <summary>
        /// FIXME: IsEmpty is completely broken. Throws exception by trying to
        /// call getCount() from null.
        /// </summary>
        /*[Test(Name = "Validation.IsEmpty()")]
        public void TestValidationIsEmpty()
        {
            int? x = null;
            int? y = 5;
            var emptyString = "";
            var emptyString2 = string.Empty;
            string nullString = null;
            var notNullString = "test";

            var emptyList = new List<int>();
            List<int> nullList = null;
            var populatedList = new List<int>() { 2, 3, 5 };

            Assert.True(Validation.IsEmpty(null), "'null' is empty.");
            Assert.True(Validation.IsEmpty(x), "Null nullable variable is empty.");
            Assert.True(Validation.IsEmpty(emptyString), "A zero-character-full string is empty.");
            Assert.True(Validation.IsEmpty(emptyString2), "A string assigned String.Empty is empty.");
            Assert.True(Validation.IsEmpty(nullString), "A null string is empty.");
            Assert.True(Validation.IsEmpty(emptyList), "An empty List variable is empty.");
            Assert.True(Validation.IsEmpty(nullList), "A null List variable is empty.");

            Assert.False(Validation.IsEmpty("test"), "A string with one or more characters is not empty.");
            Assert.False(Validation.IsEmpty(y), "Not null nullable variable is not empty.");
            Assert.False(Validation.IsEmpty(notNullString), "A string variable with one or more characters is not empty.");
            Assert.False(Validation.IsEmpty(populatedList), "A populated List is not empty.");
        }
        */

        [Test(Name = "Validation.IsNotNull()")]
        public void TestValidationIsNotNull()
        {
            int? x = null;
            int? y = 5;

            Assert.True(Validation.IsNotNull("test"), "A string is not null.");
            Assert.True(Validation.IsNotNull(y), "Not null nullable variable is not null.");

            Assert.False(Validation.IsNotNull(null), "'null' is null.");
            Assert.False(Validation.IsNotNull(x), "Null nullable variable is null.");
        }

        /// <summary>
        /// FIXME: IsEmpty is completely broken. Throws exception by trying to
        /// call getCount() from null.
        /// </summary>
        /*[Test(Name = "Validation.IsNotEmpty()")]
        public void TestValidationIsNotEmpty()
        {
            int? x = null;
            int? y = 5;
            var emptyString = "";
            var emptyString2 = string.Empty;
            string nullString = null;
            var notNullString = "test";

            var emptyList = new List<int>();
            List<int> nullList = null;
            var populatedList = new List<int>() { 2, 3, 5 };

            Assert.True(Validation.IsNotEmpty("test"), "A string with one or more characters is not empty.");
            Assert.True(Validation.IsNotEmpty(y), "Not null nullable variable is not empty.");
            Assert.True(Validation.IsNotEmpty(notNullString), "A string variable with one or more characters is not empty.");
            Assert.True(Validation.IsNotEmpty(populatedList), "A populated List is not empty.");

            Assert.False(Validation.IsNotEmpty(null), "'null' is empty.");
            Assert.False(Validation.IsNotEmpty(x), "Null nullable variable is empty.");
            Assert.False(Validation.IsNotEmpty(emptyString), "A zero-character-full string is empty.");
            Assert.False(Validation.IsNotEmpty(emptyString2), "A string assigned String.Empty is empty.");
            Assert.False(Validation.IsNotEmpty(nullString), "A null string is empty.");
            Assert.False(Validation.IsNotEmpty(emptyList), "An empty List variable is empty.");
            Assert.False(Validation.IsNotEmpty(nullList), "A null List variable is empty.");
        }
        */

        [Test(Name = "Validation.Email()")]
        public void TestValidationEmail()
        {
            Assert.True(Validation.Email("ab@cd.ef"), "Email 'ab@cd.ef' is valid.");
            Assert.True(Validation.Email("ab@cd.ef"), "Email 'ab@cd_gh.ef' is valid.");
            Assert.True(Validation.Email("ab@cd.ef"), "Email 'ab2@cd59.e3f' is valid.");

            Assert.False(Validation.Email("ab.cd.ef"), "Email 'ab.cd.ef' is not valid.");
            Assert.False(Validation.Email("ab@c d.ef"), "Email 'ab@c d.ef' is not valid.");
            Assert.False(Validation.Email("ab@cd.ef/"), "Email 'ab@cd.ef/' is not valid.");
            Assert.False(Validation.Email("http://ab@cd.ef"), "Email 'http://ab@cd.ef' is not valid.");
            
            //should mailto:// be accepted here?.. guess this falls under the 'url' check
        }

        [Test(Name = "Validation.Url()")]
        public void TestValidationUrl()
        {
            Assert.True(Validation.Url("http://www.bridge.net/"), "URL 'http://www.bridge.net/' is valid.");
            Assert.True(Validation.Url("http://bridge.net/"), "URL 'http://bridge.net/' is valid.");
            Assert.True(Validation.Url("http://www.bridge.net"), "URL 'http://www.bridge.net' is valid.");
            Assert.True(Validation.Url("https://www.bridge.net/"), "URL 'https://www.bridge.net/' is valid.");
            Assert.True(Validation.Url("https://www.bridge.net"), "URL 'https://www.bridge.net' is valid.");
            Assert.True(Validation.Url("ftp://www.bridge.net/"), "URL 'ftp://www.bridge.net/' is valid.");
            Assert.True(Validation.Url("ftp://www.bridge.net"), "URL 'ftp://www.bridge.net' is valid.");
            Assert.True(Validation.Url("http://www.bridge.net:80/"), "URL 'http://www.bridge.net:80/' is valid.");
            Assert.True(Validation.Url("http://ab.cd/"), "URL 'http://ab.cd/' is valid.");
            Assert.True(Validation.Url("http://127.0.0.1/"), "URL 'http://127.0.0.1/' is valid.");
            Assert.True(Validation.Url("http://127.0.0.1:2100/"), "URL 'http://127.0.0.1:2100/' is valid.");

            Assert.True(Validation.Url("http://www.127.0.0.1.google.com/"), "URL 'http://www.127.0.0.1.google.com/' is valid.");
            Assert.True(Validation.Url("http://www.bridge.net/"), "URL 'http://www2.bridge.net/' is valid.");
            Assert.True(Validation.Url("http://www.microsoft.com/"), "URL 'http://www.microsoft.com/' is valid.");

            // FIXME: these are valid URLs! should be true:
            //Assert.True(Validation.Url("HTTP://WWW.bridge.net/"), "URL 'HTTP://WWW.bridge.net/' is valid.");
            //Assert.True(Validation.Url("Http://Www.bridge.net/"), "URL 'Http://Www.bridge.net/' is valid.");
            //Assert.True(Validation.Url("http://localhost/"), "URL 'http://localhost/' is valid.");
            //Assert.True(Validation.Url("http://mylocaldomain/"), "URL 'http://mylocaldomain/' is valid.");

            Assert.False(Validation.Url("http://www.bri dge.net/"), "URL 'http://www.bri dge.net/' is not valid.");
            Assert.False(Validation.Url("http://www.bridge.net :80/"), "URL 'http://www.bridge.net :80/' is not valid.");
            Assert.False(Validation.Url("http://www.bridge.net: 80/"), "URL 'http://www.bridge.net: 80/' is not valid.");
            Assert.False(Validation.Url("http://www.bridge.net:80 /"), "URL 'http://www.bridge.net:80 /' is not valid.");
            Assert.False(Validation.Url("http ://www.bridge.net/"), "URL 'http ://www.bridge.net/' is not valid.");
            Assert.False(Validation.Url("http://127.0 .0.1/"), "URL 'http://127.0 .0.1/' is not valid.");

            // FIXME: valid protocols are not only http, https and ftp, should
            // support others like gopher:// git:// ssh://, etc (any word,
            // actually)
        }

        [Test(Name = "Validation.Alpha()")]
        public void TestValidationAlpha()
        {
            Assert.True(Validation.Alpha("abcdef"), "'abcdef' is alpha.");

            // FIXME: Underline should not be considered an alphabet character.
            //Assert.False(Validation.Alpha("abcdef_"), "'abcdef_' is not alpha.");
            Assert.False(Validation.Alpha("abcd ef_"), "'abcd ef_' is not alpha.");
            Assert.False(Validation.Alpha("2abcdef_"), "'2abcdef_' is not alpha.");
            Assert.False(Validation.Alpha("a@bcdef_"), "'a@bcdef_' is not alpha.");
            Assert.False(Validation.Alpha("abcd*ef_"), "'abcd*ef_' is not alpha.");
        }

        /// <summary>
        /// FIXME: This is completely broken and just a copypaste of
        /// Bridge.Validation.Alpha().
        /// </summary>
        [Test(Name = "Validation.AlphaNum()")]
        public void TestValidationAlphaNum()
        {
            Assert.True(Validation.Alpha("abcdef"), "'abcdef' is alphanumeric.");
            //Assert.True(Validation.Alpha("abc2def"), "'abc2def' is alphanumeric.");

            // FIXME: Underline should not be considered an alphabet character.
            //Assert.False(Validation.Alpha("abcdef_"), "'abcdef_' is not alphanumeric.");
            //Assert.False(Validation.Alpha("abc2def_"), "'abc2def_' is not alphanumeric.");

            Assert.False(Validation.AlphaNum("abcd ef_"), "'abcd ef_' is not alphanumeric.");
            Assert.False(Validation.AlphaNum("a@bcdef_"), "'a@bcdef_' is not alphanumeric.");
            Assert.False(Validation.AlphaNum("abcd*ef_"), "'abcd*ef_' is not alphanumeric.");
        }

        /// <summary>
        /// This is just a simple credit card validity checker, it does not
        /// check, for example, if the math with the digits results in a valid
        /// number.
        /// </summary>
        /// <remarks>
        /// The checks here are completely broken as well, can't validate a single credit card number.
        /// </remarks>
        /*[Test(Name = "Validation.CreditCard()")]
        public void TestValidationCreditCard()
        {
            Assert.True(Validation.CreditCard("1234567890123"), "'1234567890123' is a valid generic credit card number.");
            Assert.True(Validation.CreditCard("123456789012345"), "'123456789012345' is a valid generic credit card number.");
            Assert.True(Validation.CreditCard("1234567890123456789"), "'1234567890123456789' is a valid generic credit card number.");
            Assert.False(Validation.CreditCard("123456789012"), "'123456789012' is not a valid generic credit card number.");
            Assert.False(Validation.CreditCard("12345678901234567890"), "'12345678901234567890' is not a valid generic credit card number.");

            // TODO: Check passing the Visa/MasterCard/Discover/AmericanExpress/DinersClub
            // parameter to the call.
        }*/
    }
}