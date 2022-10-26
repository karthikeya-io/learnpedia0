import { Outlet } from 'react-router-dom';
import '../css/App.css';
import Nav from './Nav';


function App() {
  return (
    <div className="App body">
      <div>
        <header className="App-header">
          <Nav></Nav>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
