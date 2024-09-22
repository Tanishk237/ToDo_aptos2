import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddNewList from './components/AddNewList';
import ConnectWalletButton from './components/ConnectWalletButton';
import './App.css';

const App: React.FC = () => {
  const [currentList, setCurrentList] = useState<string | null>(null);

  const handleConnectWallet = () => {
    // Implement wallet connection logic here
    console.log('Connecting wallet...');
  };

  return (
    <div className="app">
      <div className="header">
        <ConnectWalletButton  />
      </div>
      {!currentList ? (
        <div className="create-list">
          <h1>Our todolist</h1>
          <AddNewList onCreateList={setCurrentList} />
        </div>
      ) : (
        <TodoList listId={currentList} />
      )}
    </div>
  );
};

export default App;