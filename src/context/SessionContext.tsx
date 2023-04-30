import React, { useContext, useEffect, useState } from 'react';

export const SessionContext = React.createContext({} as SessionContextProps);

export interface SessionContextProps {
  session: Session;
  load: (search, record, session, history) => void;
}

interface Session {
  search: any;
  record: any;
  session: any;
  history: any;
}

export type SessionState = {
  session: Session;
  load: (search, record, session, history) => void;
}

interface SessionProviderProps {
  children: React.ReactNode;
  load: (search, record, session, history) => void;
}

export const SessionProvider:React.FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session>({
    search:null,
    record:null,
    session:null,
    history:null
  });
  const [hydrated, setHydrated] = useState(true);

  const load = (search, record, session, history) => {
    setSession({
      search,
      record,
      session,
      history,
    });
    setHydrated(false);
  };

  const searchCleanup = () => {
    const cleanupKeys = ['firstName', 'lastName', 'state', 'age', 'thinMatch'];
    let s = session;
    cleanupKeys.forEach((key) => {
      s?.search?.[key] && delete s.search[key];
      s?.session?.[key] && delete s.session[key];
    });
    setSession(s);
  };

  useEffect(() => {
    const hydrateSessionStorage = () => {
      sessionStorage.setItem('session', JSON.stringify(session.session));
      setHydrated(true);
    };
    if (session?.session !== null && !hydrated) {
      hydrateSessionStorage();
    }
  }, [session?.session, hydrated])

  return (
    <SessionContext.Provider value={{ session, load }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = ():SessionState => useContext(SessionContext);