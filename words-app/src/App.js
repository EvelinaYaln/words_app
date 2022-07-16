import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Slider from './components/Slider';
import NotFound from './components/NotFound';
import { WordsContextProvider } from './context/context-words';
function App() {
  return (
    <div className="App">
      <Header/>
      <WordsContextProvider>
        <Routes>
          <Route path="/game" element={<Slider choosenCard={3}/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </WordsContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
