import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Transaction from './components/Transaction';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container style={{ backgroundColor: '#27496d'}} classroom="projectContainer">
        <Balance />
        <Transaction />
        <AddTransaction />
      </Container>
    </div>
  );
}

export default App;
