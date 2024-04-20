import { Provider } from 'react-redux';

import { RenderRoutes } from './core/routes/components/RenderRoutes.tsx';
import { ErrorBoundary } from './main/components/ErrorBoundary.tsx';
import { AuthProvider } from './auth/components/AuthProvider.tsx';
import { store } from './core/store/constants/store.ts';
import {
  CLIENT_ID,
  KEYCLOAK_AUTHORIZE_URL,
  KEYCLOAK_TOKEN_URL,
  REDIRECT_URL,
} from './core/config/urls.ts';

export const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthProvider
          authorizeUrl={KEYCLOAK_AUTHORIZE_URL}
          tokenUrl={KEYCLOAK_TOKEN_URL}
          clientId={CLIENT_ID}
          redirectUri={REDIRECT_URL}
          scope="openid"
        >
          <RenderRoutes />
        </AuthProvider>
      </Provider>
    </ErrorBoundary>
  );
};
