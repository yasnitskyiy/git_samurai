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
                        <Route path="/" element={<Main state={props.state} dispatch={props.dispatch}/>}/>
                        {/*<Route path="/main/*" element={<Main state={props.state} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>}/>*/}
                        {/*<Route path="/dialogs/*" element={<Dialogs state={props.state} updateMessageText={props.updateMessageText} addMessage={props.addMessage}/>}/>*/}
                    </Routes>
                </div>
                <Friends/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;