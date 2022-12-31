import './App.css';
import Footer from './components/Footer/Footer';
import BasicCalculator from './pages/BasicCalculator/BasicCalculator';
import BasicTaskBoad from './pages/BasicTaskBoard/BasicTaskBoad';
import Counter from './pages/Counter/Counter';
import Painters from './pages/Painters/Painters';

function App() {
  return (
    <>
      <BasicTaskBoad />
      <BasicCalculator />
      <Counter />
      <Painters />
      <Footer />
    </>
  );
}

export default App;
