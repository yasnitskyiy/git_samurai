// import profileReducer from "./profileReduser";
// import messagesReducer from "./messagesReduser";
//
// let store = {
//     _state: {
//         messagesPages: {
//             dialogs: [
//                 {id: 1, name: "Vlad"},
//                 {id: 2, name: "Oleg"},
//                 {id: 3, name: "Polina"},
//                 {id: 4, name: "Ilona"},
//             ],
//             messages: [
//                 {id: 1, text: "Hello world", me: true},
//                 {id: 2, text: "React cool, how about continue work a bit harder?!", me: true},
//                 {id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
//                         " Accusamus amet animi aperiam dignissimos distinctio fuga impedit" +
//                         " itaque, nemo odit officiis placeat quia ratione reiciendis saepe" +
//                         " sunt ullam ut voluptas voluptatem?", me: false
//                 },
//                 {id: 4, text: "putin hu*lo and this info all knows!", me: false},
//                 {id: 5, text: "Totally confirm your words!!!", me: true},
//                 {id: 6, text: "React cool, how about continue work a bit harder?!", me: true},
//             ],
//             newMessageText: ''
//         },
//         profilePages:{
//             posts:[
//                 {
//                     id: 1,
//                     postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum deleniti deserunt doloremque eaque et illum inventore ipsum molestias necessitatibus  perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus?"
//                 },
//
//                 {
//                     id: 2,
//                     postText: "Et illum inventore ipsum molestias necessitatibus perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum deleniti deserunt doloremque eaque ?"
//                 }
//             ],
//             newPostText: ''
//         }
//     },
//     _callSubscriber(){
//         console.log('change');
//     },
//
//     getState(){
//         console.log("get state work");
//         return this._state;
//     },
//     subscribe(observer){
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action){
//         profileReducer(this._state.profilePages, action);
//         messagesReducer(this._state.messagesPages, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;
