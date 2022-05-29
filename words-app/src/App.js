import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Slider from './components/Slider';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/game" element={<Slider choosenCard={3}/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
