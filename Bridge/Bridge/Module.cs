using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bridge
{
    [External]
    [Name("Bridge")]
    public static class Module
    {
        [Template("Bridge.loadModule({type:module})")]
        public static extern Task Load(params Type[] type);
    }
}