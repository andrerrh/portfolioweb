import style from './App.module.scss';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'

function App() {

  return (
    <div className={style.app}>
      <Header />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
