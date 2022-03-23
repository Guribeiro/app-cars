import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthenticationContextData {
  userName: string | undefined;
  loading: boolean;
  signInLoading: boolean;
  signIn(data: SignInProps): Promise<void>;
  signOut(): Promise<void>;
  updateUserName(data: UpdateUserNameProps): Promise<void>;
}

const AuthenticationContext = createContext<AuthenticationContextData>(
  {} as AuthenticationContextData,
);

interface AuthenticationProviderProps {
  children: ReactNode;
}

type UserNameState = string | undefined;

interface UpdateUserNameProps {
  name: string;
}

interface SignInProps {
  name: string;
}

const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps): JSX.Element => {
  const [userName, setUserName] = useState<UserNameState>();
  const [signInLoading, setSignInLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const userNameStoraged = await AsyncStorage.getItem('@app-cars/username');

      if (userNameStoraged) {
        setUserName(JSON.parse(userNameStoraged));
      }
    })();
  }, []);

  const signIn = useCallback(async ({ name }: SignInProps) => {
    setSignInLoading(true);
    setUserName(name);
    await AsyncStorage.setItem('@app-cars/username', JSON.stringify(name));
    setSignInLoading(false);
  }, []);

  const updateUserName = useCallback(
    async ({ name }: UpdateUserNameProps) => {
      setLoading(true);
      setUserName(name);

      await AsyncStorage.setItem('@app-cars/username', JSON.stringify(name));
      setLoading(false);
    },
    [setUserName],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@app-cars/username');
    setUserName(undefined);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        userName,
        loading,
        signInLoading,
        signIn,
        updateUserName,
        signOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuthentication(): AuthenticationContextData {
  const context = useContext(AuthenticationContext);

  if (!context)
    throw new Error(
      'useAuthentication must be used within an AuthenticationProvder ',
    );
  return context;
}

export { useAuthentication, AuthenticationProvider };
