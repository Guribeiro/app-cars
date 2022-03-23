import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';
import Alert from '@shared/components/Alert';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface AlertState {
  title?: string;
  message: string;
  type: AlertTypesVariations;
}

interface AlertContextData {
  alert(data: AlertState): void;
}

export type AlertTypesVariations = 'success' | 'error' | 'info' | 'warning';

const AlertContext = createContext<AlertContextData>({} as AlertContextData);

interface AlertProviderProps {
  children: ReactNode;
}

const AlertProvider = ({ children }: AlertProviderProps): JSX.Element => {
  const INITIAL_VALUE = -300;
  const FINAL_VALUE = 30;
  const [alertState, setAlertState] = useState({} as AlertState);

  const alertOffset = useSharedValue(INITIAL_VALUE);
  const alertOpacity = useSharedValue(0);

  const alertAnimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: alertOffset.value,
      opacity: alertOpacity.value,
    };
  });

  const showAnimatedAlert = useCallback(() => {
    alertOffset.value = withTiming(FINAL_VALUE, {
      duration: 300,
      easing: Easing.ease,
    });
    alertOpacity.value = withTiming(1, {
      duration: 200,
      easing: Easing.ease,
    });
  }, [alertOffset, alertOpacity]);

  const hideAnimatedAlert = useCallback(() => {
    alertOffset.value = withTiming(INITIAL_VALUE, {
      duration: 300,
      easing: Easing.ease,
    });
    alertOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.ease,
    });

    setAlertState({} as AlertState);
  }, [alertOffset, INITIAL_VALUE, alertOpacity]);

  const alert = useCallback(
    ({ title, message, type }: AlertState) => {
      setAlertState({
        title,
        message,
        type,
      });
      showAnimatedAlert();
    },
    [showAnimatedAlert],
  );

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}

      <Animated.View style={alertAnimatedStyle}>
        <Alert {...alertState} onClose={hideAnimatedAlert} />
      </Animated.View>
    </AlertContext.Provider>
  );
};

function useAlert(): AlertContextData {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
}

export { AlertProvider, useAlert };
