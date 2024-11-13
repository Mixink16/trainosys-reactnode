import React, { useContext } from 'react';

const UserSettingsContext = React.createContext();

const sharedData = {
  username: 'Bryan',
  theme: 'light',
};

function ContextActivity() {
  const { username, theme } = useContext(UserSettingsContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Wazzup, {username}!</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export function ContextWrapper() {
  return (
    <UserSettingsContext.Provider value={sharedData}>
      <div>
        <h2>This is the Context Activity</h2>
        <ContextActivity />
      </div>
    </UserSettingsContext.Provider>
  );
}
