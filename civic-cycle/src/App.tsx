import React, { useEffect } from 'react';
import Header from './components/Header';
import { initializeAnalytics, trackPageView } from './analytics';

const App: React.FC = () => {
  useEffect(() => {
    initializeAnalytics();
    trackPageView('Home');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">
          Welcome to the Loyalty Rewards Dashboard
        </h1>
      </main>
    </div>
  );
};

export default App;