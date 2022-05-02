import './App.css';
import Header from "./components/Header";
import Friends from "./components/Friends";
import Main from "./components/Main";
import Footer from "./components/Footer";


const App = () => {
  return (
   <div className={'box'}>
       <Header />
       <Friends />
       <Main />
       <Footer />
   </div>
  );
}

export default App;