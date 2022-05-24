export const ADD_POSTS = "ADD_POSTS";
export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const RESET_SINGLE_USER = "RESET_SINGLE_USER";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const RESET_COMMENTS = "RESET_COMMENTS";


// Posts
const addPosts = (posts) => ({
    type: ADD_POSTS,
    posts
});
export const loadPostsThunk = () => (dispatch, _, axios) => {
    axios("https://jsonplaceholder.typicode.com/posts")
        .then(({data}) => dispatch(addPosts(data)))
};



// Comments
export const resetComments = {
    type: RESET_COMMENTS
};

const addComments = (comments) => ({
    type: ADD_COMMENTS,
    comments
});
export const loadPostCommentsThunk = (postId) => (dispatch, _, axios) => {
    axios("https://jsonplaceholder.typicode.com/comments")
        .then(({data}) => data.filter(el => el.postId === postId))
        .then(comments => dispatch(addComments(comments)))
};
