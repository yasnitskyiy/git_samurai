import './App.css';
import Header from "./components/Header/Header";
import Friends from "./components/Friend/Friends";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'wrapper'}>
                <Header/>
                <div className={`content`}>
                    <Routes>
                        <Route path="/" element={<Main profilePages={props.state.profilePages } onPostChange={props.onPostChange}/>}/>
                        <Route path="/main/*" element={<Main profilePages={props.state.profilePages } onPostChange={props.onPostChange}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPages} addPost={props.addPost}/>}/>
                    </Routes>
                </div>
                <Friends/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;