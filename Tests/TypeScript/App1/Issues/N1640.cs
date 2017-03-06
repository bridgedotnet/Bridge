namespace TypeScript.Issues
{
    using System;

    public class N1640
    {
        public interface IGamePlay
        {
            void StartGame(string s);
            event EventHandler<string> OnGameEvent;
        }

        public class GamePlay : IGamePlay
        {
            public void StartGame(string s)
            {
                if (OnGameEvent != null)
                {
                    OnGameEvent(this, s);
                }
            }

            public void Subscribe(EventHandler<string> handler)
            {
                OnGameEvent += handler;
            }

            public event EventHandler<string> OnGameEvent;
        }
    }
}