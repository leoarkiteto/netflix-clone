import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { auth } from 'customFirebase';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuth {
  user: User | null;
  loading: boolean;
  error: string | null;
  logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuth>({
  user: null,
  error: null,
  loading: false,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
        router.push('/login');
      }

      setInitialLoading(false);
    });
  }, [auth]);

  async function signUp(email: string, password: string) {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        router.push('/');
        setLoading(false);
      })
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }

  async function signIn(email: string, password: string) {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        router.push('/');
        setLoading(false);
      })
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }

  async function logout() {
    setLoading(true);

    signOut(auth)
      .then(() => setUser(null))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }

  const memoedValue = useMemo(
    () => ({ user, error, signUp, signIn, loading, logout }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
