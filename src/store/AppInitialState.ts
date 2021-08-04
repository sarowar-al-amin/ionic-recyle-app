import { AppState } from './AppState';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppInitialState: AppState = {
  loading: {
    show: false
  },
  login: {
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
    isRecoveredPassword: false,
    isRecoveringPassword: false
  }
};
