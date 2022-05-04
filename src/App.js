import './App.css';
import Header from "./components/Header/Header";
import Friends from "./components/Friend/Friends";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'box'}>
                <Header/>
                <Friends/>
                <div className={`gridItem main`}>
                    <Routes>
                        <Route path="/main" element={<Main />}/>
                        <Route path="/dialogs" element={<Dialogs />}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;