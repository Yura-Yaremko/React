const { default: profileReducer, addPostCreator, deletePost } = require("./profile-reducer");

let newState = profileReducer({}, {})

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'It\'s my first post', likeCount: 11 }
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    let action = addPostCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('it-kamasutra.com')
});

test('after deleting of messages should be decrement ', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});

test('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});