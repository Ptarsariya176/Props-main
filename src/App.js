import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  const user = {
    name: 'Swarg Patel',
    age: 19,
    location: 'Gujarat, INDIA',
    bio: 'A passionate software developer who loves coding and exploring new technologies.'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Profile
        </a>
        <h1>Welcome to the User Information App</h1>
        {/* Passing individual props to UserProfile */}
        <UserProfile 
        name={user.name} 
        age={user.age} 
        location={user.location} 
        bio={user.bio} 
      />
      </header>
    </div>
  );
}
export default App;
