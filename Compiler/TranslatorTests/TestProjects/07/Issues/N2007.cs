using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TestProject.Issues
{
    class N2007
    {
        /// <summary>
        /// Event for OnConnected
        /// </summary>
        public event Action<String> OnConnected;

        /// <summary>
        /// Event for OnDisconnected
        /// </summary>
        public event Action OnDisconnected;
    }
}
