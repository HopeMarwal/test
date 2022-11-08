import './App.css';
import User from './components/User';
import Profile from './components/Profile';
import Cart from './components/Cart';
import { UserContextProvider } from './context/UserContext';
import { MessageContextProvider } from './context/MessageContext'

function App() {
  return (
    <MessageContextProvider>
      <UserContextProvider>
        <div className="App">
          <h1>App</h1>
          <User />
          <Profile />
          <Cart />
        </div>
      </UserContextProvider>
    </MessageContextProvider>

  );
}

export default App;
