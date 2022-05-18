import './App.css';
import Header from "./components/Header/Header";
import Friends from "./components/Friend/Friends";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'wrapper'}>
                <Header/>
                <div className={`content`}>
                    <Routes>
                        <Route path="/" element={<Main store={props.store}/>}/>
                        <Route path="/main/*" element={<Main store={props.store}/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                    </Routes>
                </div>
                <Friends/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;