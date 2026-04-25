import React, { useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './src/screens/Login';

/**
 * Application entry point
 */
const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn ? (<AppNavigator />) : (<Login onLoginSuccess={() => setIsLoggedIn(true)} />)}
    </QueryClientProvider>
  );
};

export default App;
