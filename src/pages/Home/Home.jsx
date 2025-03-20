import '../../App.css'
import Hero from '../../components/hero-section/hero'
import Money from '../../components/money/money';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App">
       <Hero/>
       <Money/>
    </div>
  );
}

export default Home