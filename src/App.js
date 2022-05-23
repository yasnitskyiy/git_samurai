import './App.css';
import Header from "./components/Header/Header";
import Friends from "./components/Friend/Friends";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <div className={`content`}>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/main/*" element={<Main />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                    <Route path="/users/*" element={<UsersContainer />}/>
                </Routes>
            </div>
            <Friends/>
            <Footer/>
        </div>
    );
}

export default App;