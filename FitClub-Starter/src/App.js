import './App.css';
import Hero from './components/HeroSection/Hero';
import Plans from './components/plans/Plans';
import Programs from './components/Programs';
import Reasons from './components/reason/Reasons';
import Testimonial from './components/testimonial/Testimonial';
import Join from './components/joinF/Join';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons></Reasons>
          <Plans/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
