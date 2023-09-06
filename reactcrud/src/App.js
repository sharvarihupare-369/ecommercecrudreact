import logo from './logo.svg';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <MainRoutes/>
      
    </div>
  );
}

export default App;
