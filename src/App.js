import logo from './logo.svg';
import './App.css';
import './components/header/Header.js';
import Header from './components/header/Header.js';
import MainContent from './components/main/MainContent.js';
import LeftBar from './components/left/LeftBar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container >
      <Header />
      <LeftBar />
      <MainContent />
    </ Container >
  );
}

export default App;
