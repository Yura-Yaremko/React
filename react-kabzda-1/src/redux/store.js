import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: 12 },
                { id: 2, message: 'It\'s my first post', likeCount: 11 }
            ],
            newPostText: 'Hi, write something what you think is cool)'
        },
        dialogPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' }
            ],
            newMessageText: 'Hi, how\'re you doing today '
        },
        sideBar: {
            items: [
                { id: 1, title: 'Profile', path: '/profile' },
                { id: 2, title: 'Messages', path: '/dialogs' },
                { id: 3, title: 'News', path: '/news' },
                { id: 4, title: 'Music', path: '/music' },
                { id: 5, title: 'Settings', path: '/settings' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State is changed')
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)
    }
}







export default store