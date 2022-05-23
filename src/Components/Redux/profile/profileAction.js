export const ADD_POSTS = "ADD_POSTS";
export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const RESET_SINGLE_USER = "RESET_SINGLE_USER";


// Posts
const addPosts = (posts) => ({
    type: ADD_POSTS,
    posts
});
export const loadPostsThunk = () => (dispatch, _, axios) => {
    axios("https://jsonplaceholder.typicode.com/posts")
        .then(({data}) => dispatch(addPosts(data)))
};
