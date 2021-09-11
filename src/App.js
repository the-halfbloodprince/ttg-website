import './App.css';
import 'bootstrap';
import Events from './components/Events';
import Faq from './components/Faq';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Testimonals from './components/Testimonals';
import Timeline from './components/Timeline';
import Video from './components/Video';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Events />
      <Video />
      <Timeline />
      <Faq />
      <ScrollTop />
    </div>
   
  );
}

export default App;
