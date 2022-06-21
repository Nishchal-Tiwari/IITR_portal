import {BrowserRouter} from 'react-router-dom';
import Routes from './routes/route';
import Nav from './components/navbar';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;

