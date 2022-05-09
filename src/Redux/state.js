import {renderEntireTree} from "../render";

let state = {
    messagesPages: {
        dialogs: [
            {id: 1, name: "Vlad"},
            {id: 2, name: "Oleg"},
            {id: 3, name: "Polina"},
            {id: 4, name: "Ilona"},
        ],
        messages: [
            {id: 1, text: "Hello world", me: true},
            {id: 2, text: "React cool, how about continue work a bit harder?!", me: true},
            {id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Accusamus amet animi aperiam dignissimos distinctio fuga impedit" +
                    " itaque, nemo odit officiis placeat quia ratione reiciendis saepe" +
                    " sunt ullam ut voluptas voluptatem?", me: false
            },
            {id: 4, text: "putin hu*lo and this info all knows!", me: false},
            {id: 5, text: "Totally confirm your words!!!", me: true},
            {id: 6, text: "React cool, how about continue work a bit harder?!", me: true},
        ]
    },
    profilePages:{
        posts:[
            {
                id: 1,
                title: "Some new post",
                titleText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum deleniti deserunt doloremque eaque et illum inventore ipsum molestias necessitatibus  perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus?"
            },

            {
                id: 2,
                title: "My post title",
                titleText: "Et illum inventore ipsum molestias necessitatibus perferendis praesentium provident quia, rem sit temporibus, tenetur voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum deleniti deserunt doloremque eaque ?"
            }
        ],
        newPostText: ''
    }
}

export let addPost = (msgText) => {
    let newMsg = {
        id: state.messagesPages.messages[ state.messagesPages.messages.length - 1].id + 1,
        text: msgText,
        me: true
    }
    state.messagesPages.messages.push(newMsg);
    renderEntireTree(state);
}

export let onPostChange = (newText) => {
    state.profilePages.newPostText = newText;
}

export default state;