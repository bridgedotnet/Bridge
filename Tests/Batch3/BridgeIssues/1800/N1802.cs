using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1802 - {0}")]
    public class Bridge1802
    {
        public static int @bool()
        {
            return 1;
        }
        public static int @byte()
        {
            return 2;
        }
        public static int @sbyte()
        {
            return 3;
        }
        public static int @short()
        {
            return 4;
        }
        public static int @ushort()
        {
            return 5;
        }
        public static int @int()
        {
            return 6;
        }
        public static int @uint()
        {
            return 7;
        }
        public static int @long()
        {
            return 8;
        }
        public static int @ulong()
        {
            return 9;
        }
        public static int @double()
        {
            return 10;
        }
        public static int @float()
        {
            return 11;
        }
        public static int @decimal()
        {
            return 12;
        }
        public static int @string()
        {
            return 13;
        }
        public static int @char()
        {
            return 14;
        }
        public static int @object()
        {
            return 15;
        }
        public static int @typeof()
        {
            return 16;
        }
        public static int @sizeof()
        {
            return 17;
        }
        public static int @null()
        {
            return 18;
        }
        public static int @true()
        {
            return 19;
        }
        public static int @false()
        {
            return 20;
        }
        public static int @if()
        {
            return 21;
        }
        public static int @else()
        {
            return 22;
        }
        public static int @while()
        {
            return 23;
        }
        public static int @for()
        {
            return 24;
        }
        public static int @foreach()
        {
            return 25;
        }
        public static int @do()
        {
            return 26;
        }
        public static int @switch()
        {
            return 27;
        }
        public static int @case()
        {
            return 28;
        }
        public static int @default()
        {
            return 29;
        }
        public static int @lock()
        {
            return 30;
        }
        public static int @try()
        {
            return 31;
        }
        public static int @throw()
        {
            return 32;
        }
        public static int @catch()
        {
            return 33;
        }
        public static int @finally()
        {
            return 34;
        }
        public static int @goto()
        {
            return 35;
        }
        public static int @break()
        {
            return 36;
        }
        public static int @continue()
        {
            return 37;
        }
        public static int @return()
        {
            return 38;
        }
        public static int @public()
        {
            return 39;
        }
        public static int @private()
        {
            return 40;
        }
        public static int @internal()
        {
            return 41;
        }
        public static int @protected()
        {
            return 42;
        }
        public static int @static()
        {
            return 43;
        }
        public static int @readonly()
        {
            return 44;
        }
        public static int @sealed()
        {
            return 45;
        }
        public static int @const()
        {
            return 46;
        }
        public static int @new()
        {
            return 47;
        }
        public static int @override()
        {
            return 48;
        }
        public static int @abstract()
        {
            return 49;
        }
        public static int @virtual()
        {
            return 50;
        }
        public static int @partial()
        {
            return 51;
        }
        public static int @ref()
        {
            return 52;
        }
        public static int @out()
        {
            return 53;
        }
        public static int @in()
        {
            return 54;
        }
        public static int @where()
        {
            return 55;
        }
        public static int @params()
        {
            return 56;
        }
        public static int @this()
        {
            return 57;
        }
        public static int @base()
        {
            return 58;
        }
        public static int @namespace()
        {
            return 59;
        }
        public static int @using()
        {
            return 60;
        }
        public static int @class()
        {
            return 61;
        }
        public static int @struct()
        {
            return 62;
        }
        public static int @interface()
        {
            return 63;
        }
        public static int @delegate()
        {
            return 64;
        }
        public static int @checked()
        {
            return 65;
        }
        public static int @get()
        {
            return 66;
        }
        public static int @set()
        {
            return 67;
        }
        public static int @add()
        {
            return 68;
        }
        public static int @remove()
        {
            return 69;
        }
        public static int @operator()
        {
            return 70;
        }
        public static int @implicit()
        {
            return 71;
        }
        public static int @explicit()
        {
            return 72;
        }
        public static int @fixed()
        {
            return 73;
        }
        public static int @extern()
        {
            return 74;
        }
        public static int @event()
        {
            return 75;
        }
        public static int @enum()
        {
            return 76;
        }
        public static int @unsafe()
        {
            return 77;
        }

        [Test]
        public void TestReservedWordsAsMethodName()
        {
            Assert.AreEqual(1, @bool());
            Assert.AreEqual(1, Bridge1802.@bool());

            Assert.AreEqual(2, @byte());
            Assert.AreEqual(2, Bridge1802.@byte());

            Assert.AreEqual(3, @sbyte());
            Assert.AreEqual(3, Bridge1802.@sbyte());

            Assert.AreEqual(4, @short());
            Assert.AreEqual(4, Bridge1802.@short());

            Assert.AreEqual(5, @ushort());
            Assert.AreEqual(5, Bridge1802.@ushort());

            Assert.AreEqual(6, @int());
            Assert.AreEqual(6, Bridge1802.@int());

            Assert.AreEqual(7, @uint());
            Assert.AreEqual(7, Bridge1802.@uint());

            Assert.AreEqual(8, @long());
            Assert.AreEqual(8, Bridge1802.@long());

            Assert.AreEqual(9, @ulong());
            Assert.AreEqual(9, Bridge1802.@ulong());

            Assert.AreEqual(10, @double());
            Assert.AreEqual(10, Bridge1802.@double());

            Assert.AreEqual(11, @float());
            Assert.AreEqual(11, Bridge1802.@float());

            Assert.AreEqual(12, @decimal());
            Assert.AreEqual(12, Bridge1802.@decimal());

            Assert.AreEqual(13, @string());
            Assert.AreEqual(13, Bridge1802.@string());

            Assert.AreEqual(14, @char());
            Assert.AreEqual(14, Bridge1802.@char());

            Assert.AreEqual(15, @object());
            Assert.AreEqual(15, Bridge1802.@object());

            Assert.AreEqual(16, @typeof());
            Assert.AreEqual(16, Bridge1802.@typeof());

            Assert.AreEqual(17, @sizeof());
            Assert.AreEqual(17, Bridge1802.@sizeof());

            Assert.AreEqual(18, @null());
            Assert.AreEqual(18, Bridge1802.@null());

            Assert.AreEqual(19, @true());
            Assert.AreEqual(19, Bridge1802.@true());

            Assert.AreEqual(20, @false());
            Assert.AreEqual(20, Bridge1802.@false());

            Assert.AreEqual(21, @if());
            Assert.AreEqual(21, Bridge1802.@if());

            Assert.AreEqual(22, @else());
            Assert.AreEqual(22, Bridge1802.@else());

            Assert.AreEqual(23, @while());
            Assert.AreEqual(23, Bridge1802.@while());

            Assert.AreEqual(24, @for());
            Assert.AreEqual(24, Bridge1802.@for());

            Assert.AreEqual(25, @foreach());
            Assert.AreEqual(25, Bridge1802.@foreach());

            Assert.AreEqual(26, @do());
            Assert.AreEqual(26, Bridge1802.@do());

            Assert.AreEqual(27, @switch());
            Assert.AreEqual(27, Bridge1802.@switch());

            Assert.AreEqual(28, @case());
            Assert.AreEqual(28, Bridge1802.@case());

            Assert.AreEqual(29, @default());
            Assert.AreEqual(29, Bridge1802.@default());

            Assert.AreEqual(30, @lock());
            Assert.AreEqual(30, Bridge1802.@lock());

            Assert.AreEqual(31, @try());
            Assert.AreEqual(31, Bridge1802.@try());

            Assert.AreEqual(32, @throw());
            Assert.AreEqual(32, Bridge1802.@throw());

            Assert.AreEqual(33, @catch());
            Assert.AreEqual(33, Bridge1802.@catch());

            Assert.AreEqual(34, @finally());
            Assert.AreEqual(34, Bridge1802.@finally());

            Assert.AreEqual(35, @goto());
            Assert.AreEqual(35, Bridge1802.@goto());

            Assert.AreEqual(36, @break());
            Assert.AreEqual(36, Bridge1802.@break());

            Assert.AreEqual(37, @continue());
            Assert.AreEqual(37, Bridge1802.@continue());

            Assert.AreEqual(38, @return());
            Assert.AreEqual(38, Bridge1802.@return());

            Assert.AreEqual(39, @public());
            Assert.AreEqual(39, Bridge1802.@public());

            Assert.AreEqual(40, @private());
            Assert.AreEqual(40, Bridge1802.@private());

            Assert.AreEqual(41, @internal());
            Assert.AreEqual(41, Bridge1802.@internal());

            Assert.AreEqual(42, @protected());
            Assert.AreEqual(42, Bridge1802.@protected());

            Assert.AreEqual(43, @static());
            Assert.AreEqual(43, Bridge1802.@static());

            Assert.AreEqual(44, @readonly());
            Assert.AreEqual(44, Bridge1802.@readonly());

            Assert.AreEqual(45, @sealed());
            Assert.AreEqual(45, Bridge1802.@sealed());

            Assert.AreEqual(46, @const());
            Assert.AreEqual(46, Bridge1802.@const());

            Assert.AreEqual(47, @new());
            Assert.AreEqual(47, Bridge1802.@new());

            Assert.AreEqual(48, @override());
            Assert.AreEqual(48, Bridge1802.@override());

            Assert.AreEqual(49, @abstract());
            Assert.AreEqual(49, Bridge1802.@abstract());

            Assert.AreEqual(50, @virtual());
            Assert.AreEqual(50, Bridge1802.@virtual());

            Assert.AreEqual(51, @partial());
            Assert.AreEqual(51, Bridge1802.@partial());

            Assert.AreEqual(52, @ref());
            Assert.AreEqual(52, Bridge1802.@ref());

            Assert.AreEqual(53, @out());
            Assert.AreEqual(53, Bridge1802.@out());

            Assert.AreEqual(54, @in());
            Assert.AreEqual(54, Bridge1802.@in());

            Assert.AreEqual(55, @where());
            Assert.AreEqual(55, Bridge1802.@where());

            Assert.AreEqual(56, @params());
            Assert.AreEqual(56, Bridge1802.@params());

            Assert.AreEqual(57, @this());
            Assert.AreEqual(57, Bridge1802.@this());

            Assert.AreEqual(58, @base());
            Assert.AreEqual(58, Bridge1802.@base());

            Assert.AreEqual(59, @namespace());
            Assert.AreEqual(59, Bridge1802.@namespace());

            Assert.AreEqual(60, @using());
            Assert.AreEqual(60, Bridge1802.@using());

            Assert.AreEqual(61, @class());
            Assert.AreEqual(61, Bridge1802.@class());

            Assert.AreEqual(62, @struct());
            Assert.AreEqual(62, Bridge1802.@struct());

            Assert.AreEqual(63, @interface());
            Assert.AreEqual(63, Bridge1802.@interface());

            Assert.AreEqual(64, @delegate());
            Assert.AreEqual(64, Bridge1802.@delegate());

            Assert.AreEqual(65, @checked());
            Assert.AreEqual(65, Bridge1802.@checked());

            Assert.AreEqual(66, @get());
            Assert.AreEqual(66, Bridge1802.@get());

            Assert.AreEqual(67, @set());
            Assert.AreEqual(67, Bridge1802.@set());

            Assert.AreEqual(68, @add());
            Assert.AreEqual(68, Bridge1802.@add());

            Assert.AreEqual(69, @remove());
            Assert.AreEqual(69, Bridge1802.@remove());

            Assert.AreEqual(70, @operator());
            Assert.AreEqual(70, Bridge1802.@operator());

            Assert.AreEqual(71, @implicit());
            Assert.AreEqual(71, Bridge1802.@implicit());

            Assert.AreEqual(72, @explicit());
            Assert.AreEqual(72, Bridge1802.@explicit());

            Assert.AreEqual(73, @fixed());
            Assert.AreEqual(73, Bridge1802.@fixed());

            Assert.AreEqual(74, @extern());
            Assert.AreEqual(74, Bridge1802.@extern());

            Assert.AreEqual(75, @event());
            Assert.AreEqual(75, Bridge1802.@event());

            Assert.AreEqual(76, @enum());
            Assert.AreEqual(76, Bridge1802.@enum());

            Assert.AreEqual(77, @unsafe());
            Assert.AreEqual(77, Bridge1802.@unsafe());
        }
    }
}