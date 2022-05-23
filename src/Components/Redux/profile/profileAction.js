export const ADD_POSTS = "ADD_POSTS";
export const GET_SINGLE_USER = "GET_SINGLE_USER";

const addPosts = (posts) => ({
    type: ADD_POSTS,
    posts
});
export const loadPostsThunk = (id) => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => posts.filter(el => el.userId === id))
        .then(posts => dispatch(addPosts(posts)))
}
    
    
    
const addUserProfile = (userInfo) => ({
    type: GET_SINGLE_USER,
    userInfo
});
export const getSingleUser = (name) => (dispatch, getState) => {
    const userInfo = () => getState().users.find(el => el.name === name); 
    dispatch(addUserProfile(userInfo))
}
// console.log(getState().users.find(el => el.name === name)); 