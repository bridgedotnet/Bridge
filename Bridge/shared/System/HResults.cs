// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

//=============================================================================
//
//
// Purpose: Define HResult constants. Every exception has one of these.
//
//
//===========================================================================*/
// Note: FACILITY_URT is defined as 0x13 (0x8013xxxx).  Within that
// range, 0x1yyy is for Runtime errors (used for Security, Metadata, etc).
// In that subrange, 0x15zz and 0x16zz have been allocated for classlib-type 
// HResults. Also note that some of our HResults have to map to certain 
// COM HR's, etc.

// Reflection will use 0x1600 -> 0x161f.  IO will use 0x1620 -> 0x163f.
// Security will use 0x1640 -> 0x165f


using System;

namespace System
{
    internal static partial class HResults
    {
        [Bridge.InlineConst]
        internal const int COR_E_ABANDONEDMUTEX = unchecked((int)0x8013152D);
        [Bridge.InlineConst]
        internal const int COR_E_AMBIGUOUSMATCH = unchecked((int)0x8000211D);
        [Bridge.InlineConst]
        internal const int COR_E_APPDOMAINUNLOADED = unchecked((int)0x80131014);
        [Bridge.InlineConst]
        internal const int COR_E_APPLICATION = unchecked((int)0x80131600);
        [Bridge.InlineConst]
        internal const int COR_E_ARGUMENT = unchecked((int)0x80070057);
        [Bridge.InlineConst]
        internal const int COR_E_ARGUMENTOUTOFRANGE = unchecked((int)0x80131502);
        [Bridge.InlineConst]
        internal const int COR_E_ARITHMETIC = unchecked((int)0x80070216);
        [Bridge.InlineConst]
        internal const int COR_E_ARRAYTYPEMISMATCH = unchecked((int)0x80131503);
        [Bridge.InlineConst]
        internal const int COR_E_BADEXEFORMAT = unchecked((int)0x800700C1);
        [Bridge.InlineConst]
        internal const int COR_E_BADIMAGEFORMAT = unchecked((int)0x8007000B);
        [Bridge.InlineConst]
        internal const int COR_E_CANNOTUNLOADAPPDOMAIN = unchecked((int)0x80131015);
        [Bridge.InlineConst]
        internal const int COR_E_COMEMULATE = unchecked((int)0x80131535);
        [Bridge.InlineConst]
        internal const int COR_E_CONTEXTMARSHAL = unchecked((int)0x80131504);
        [Bridge.InlineConst]
        internal const int COR_E_CUSTOMATTRIBUTEFORMAT = unchecked((int)0x80131605);
        [Bridge.InlineConst]
        internal const int COR_E_DATAMISALIGNED = unchecked((int)0x80131541);
        [Bridge.InlineConst]
        internal const int COR_E_DIRECTORYNOTFOUND = unchecked((int)0x80070003);
        [Bridge.InlineConst]
        internal const int COR_E_DIVIDEBYZERO = unchecked((int)0x80020012); // DISP_E_DIVBYZERO
        [Bridge.InlineConst]
        internal const int COR_E_DLLNOTFOUND = unchecked((int)0x80131524);
        [Bridge.InlineConst]
        internal const int COR_E_DUPLICATEWAITOBJECT = unchecked((int)0x80131529);
        [Bridge.InlineConst]
        internal const int COR_E_ENDOFSTREAM = unchecked((int)0x80070026);  // OS defined
        [Bridge.InlineConst]
        internal const int COR_E_ENTRYPOINTNOTFOUND = unchecked((int)0x80131523);
        [Bridge.InlineConst]
        internal const int COR_E_EXCEPTION = unchecked((int)0x80131500);
        [Bridge.InlineConst]
        internal const int COR_E_EXECUTIONENGINE = unchecked((int)0x80131506);
        [Bridge.InlineConst]
        internal const int COR_E_FIELDACCESS = unchecked((int)0x80131507);
        [Bridge.InlineConst]
        internal const int COR_E_FILELOAD = unchecked((int)0x80131621);
        [Bridge.InlineConst]
        internal const int COR_E_FILENOTFOUND = unchecked((int)0x80070002);
        [Bridge.InlineConst]
        internal const int COR_E_FORMAT = unchecked((int)0x80131537);
        [Bridge.InlineConst]
        internal const int COR_E_HOSTPROTECTION = unchecked((int)0x80131640);
        [Bridge.InlineConst]
        internal const int COR_E_INDEXOUTOFRANGE = unchecked((int)0x80131508);
        [Bridge.InlineConst]
        internal const int COR_E_INSUFFICIENTEXECUTIONSTACK = unchecked((int)0x80131578);
        [Bridge.InlineConst]
        internal const int COR_E_INSUFFICIENTMEMORY = unchecked((int)0x8013153D);
        [Bridge.InlineConst]
        internal const int COR_E_INVALIDCAST = unchecked((int)0x80004002);
        [Bridge.InlineConst]
        internal const int COR_E_INVALIDCOMOBJECT = unchecked((int)0x80131527);
        [Bridge.InlineConst]
        internal const int COR_E_INVALIDFILTERCRITERIA = unchecked((int)0x80131601);
        [Bridge.InlineConst]
        internal const int COR_E_INVALIDOLEVARIANTTYPE = unchecked((int)0x80131531);
        [Bridge.InlineConst]
        internal const int COR_E_INVALIDOPERATION = unchecked((int)0x80131509);
        [Bridge.InlineConst]
        internal const int COR_E_INVALIDPROGRAM = unchecked((int)0x8013153A);
        [Bridge.InlineConst]
        internal const int COR_E_IO = unchecked((int)0x80131620);
        [Bridge.InlineConst]
        internal const int COR_E_KEYNOTFOUND = unchecked((int)0x80131577);
        [Bridge.InlineConst]
        internal const int COR_E_MARSHALDIRECTIVE = unchecked((int)0x80131535);
        [Bridge.InlineConst]
        internal const int COR_E_MEMBERACCESS = unchecked((int)0x8013151A);
        [Bridge.InlineConst]
        internal const int COR_E_METHODACCESS = unchecked((int)0x80131510);
        [Bridge.InlineConst]
        internal const int COR_E_MISSINGFIELD = unchecked((int)0x80131511);
        [Bridge.InlineConst]
        internal const int COR_E_MISSINGMANIFESTRESOURCE = unchecked((int)0x80131532);
        [Bridge.InlineConst]
        internal const int COR_E_MISSINGMEMBER = unchecked((int)0x80131512);
        [Bridge.InlineConst]
        internal const int COR_E_MISSINGMETHOD = unchecked((int)0x80131513);
        [Bridge.InlineConst]
        internal const int COR_E_MISSINGSATELLITEASSEMBLY = unchecked((int)0x80131536);
        [Bridge.InlineConst]
        internal const int CvOR_E_MULTICASTNOTSUPPORTED = unchecked((int)0x80131514);
        [Bridge.InlineConst]
        internal const int COR_E_NOTFINITENUMBER = unchecked((int)0x80131528);
        [Bridge.InlineConst]
        internal const int COR_E_NOTSUPPORTED = unchecked((int)0x80131515);
        [Bridge.InlineConst]
        internal const int COR_E_NULLREFERENCE = unchecked((int)0x80004003);
        [Bridge.InlineConst]
        internal const int COR_E_OBJECTDISPOSED = unchecked((int)0x80131622);
        [Bridge.InlineConst]
        internal const int COR_E_OPERATIONCANCELED = unchecked((int)0x8013153B);
        [Bridge.InlineConst]
        internal const int COR_E_OUTOFMEMORY = unchecked((int)0x8007000E);
        [Bridge.InlineConst]
        internal const int COR_E_OVERFLOW = unchecked((int)0x80131516);
        [Bridge.InlineConst]
        internal const int COR_E_PATHTOOLONG = unchecked((int)0x800700CE);
        [Bridge.InlineConst]
        internal const int COR_E_PLATFORMNOTSUPPORTED = unchecked((int)0x80131539);
        [Bridge.InlineConst]
        internal const int COR_E_RANK = unchecked((int)0x80131517);
        [Bridge.InlineConst]
        internal const int COR_E_REFLECTIONTYPELOAD = unchecked((int)0x80131602);
        [Bridge.InlineConst]
        internal const int COR_E_RUNTIMEWRAPPED = unchecked((int)0x8013153E);
        [Bridge.InlineConst]
        internal const int COR_E_SAFEARRAYRANKMISMATCH = unchecked((int)0x80131538);
        [Bridge.InlineConst]
        internal const int COR_E_SAFEARRAYTYPEMISMATCH = unchecked((int)0x80131533);
        [Bridge.InlineConst]
        internal const int COR_E_SAFEHANDLEMISSINGATTRIBUTE = unchecked((int)0x80131623);
        [Bridge.InlineConst]
        internal const int COR_E_SECURITY = unchecked((int)0x8013150A);
        [Bridge.InlineConst]
        internal const int COR_E_SEMAPHOREFULL = unchecked((int)0x8013152B);
        [Bridge.InlineConst]
        internal const int COR_E_SERIALIZATION = unchecked((int)0x8013150C);
        [Bridge.InlineConst]
        internal const int COR_E_STACKOVERFLOW = unchecked((int)0x800703E9);
        [Bridge.InlineConst]
        internal const int COR_E_SYNCHRONIZATIONLOCK = unchecked((int)0x80131518);
        [Bridge.InlineConst]
        internal const int COR_E_SYSTEM = unchecked((int)0x80131501);
        [Bridge.InlineConst]
        internal const int COR_E_TARGET = unchecked((int)0x80131603);
        [Bridge.InlineConst]
        internal const int COR_E_TARGETINVOCATION = unchecked((int)0x80131604);
        [Bridge.InlineConst]
        internal const int COR_E_TARGETPARAMCOUNT = unchecked((int)0x8002000E);
        [Bridge.InlineConst]
        internal const int COR_E_THREADABORTED = unchecked((int)0x80131530);
        [Bridge.InlineConst]
        internal const int COR_E_THREADINTERRUPTED = unchecked((int)0x80131519);
        [Bridge.InlineConst]
        internal const int COR_E_THREADSTART = unchecked((int)0x80131525);
        [Bridge.InlineConst]
        internal const int COvR_E_THREADSTATE = unchecked((int)0x80131520);
        [Bridge.InlineConst]
        internal const int COR_E_THREADSTOP = unchecked((int)0x80131521);
        [Bridge.InlineConst]
        internal const int COR_E_TIMEOUT = unchecked((int)0x80131505);
        [Bridge.InlineConst]
        internal const int COR_E_TYPEACCESS = unchecked((int)0x80131543);
        [Bridge.InlineConst]
        internal const int COR_E_TYPEINITIALIZATION = unchecked((int)0x80131534);
        [Bridge.InlineConst]
        internal const int COR_E_TYPELOAD = unchecked((int)0x80131522);
        [Bridge.InlineConst]
        internal const int COR_E_TYPEUNLOADED = unchecked((int)0x80131013);
        [Bridge.InlineConst]
        internal const int COR_E_UNAUTHORIZEDACCESS = unchecked((int)0x80070005);
        [Bridge.InlineConst]
        internal const int COR_E_UNSUPPORTEDFORMAT = unchecked((int)0x80131523);
        [Bridge.InlineConst]
        internal const int COR_E_VERIFICATION = unchecked((int)0x8013150D);
        [Bridge.InlineConst]
        internal const int COR_E_WAITHANDLECANNOTBEOPENED = unchecked((int)0x8013152C);
        [Bridge.InlineConst]
        internal const int DISP_E_OVERFLOW = unchecked((int)0x8002000A);
        [Bridge.InlineConst]
        internal const int E_BOUNDS = unchecked((int)0x8000000B);
        [Bridge.InlineConst]
        internal const int E_CHANGED_STATE = unchecked((int)0x8000000C);
        [Bridge.InlineConst]
        internal const int E_FAIL = unchecked((int)0x80004005);
        [Bridge.InlineConst]
        internal const int E_HANDLE = unchecked((int)0x80070006);
        [Bridge.InlineConst]
        internal const int E_INVALIDARG = unchecked((int)0x80070057);
        [Bridge.InlineConst]
        internal const int E_NOTIMPL = unchecked((int)0x80004001);
        [Bridge.InlineConst]
        internal const int E_POINTER = unchecked((int)0x80004003);
        [Bridge.InlineConst]
        internal const int ERROR_MRM_MAP_NOT_FOUND = unchecked((int)0x80073B1F);
        [Bridge.InlineConst]
        internal const int RO_E_CLOSED = unchecked((int)0x80000013);
        [Bridge.InlineConst]
        internal const int TYPE_E_TYPEMISMATCH = unchecked((int)0x80028CA0);
    }
}
