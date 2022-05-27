export const ADD_POSTS = "ADD_POSTS";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const RESET_COMMENTS = "RESET_COMMENTS";
export const ADD_USER_POST_COMMENT = "ADD_USER_POST_COMMENT";


// Posts
const addPosts = (posts) => ({
    type: ADD_POSTS,
    posts
});
export const loadPostsThunk = () => (dispatch, _, axios) => {
    axios("https://jsonplaceholder.typicode.com/posts")
        .then(({data}) => dispatch(addPosts(data)))
        .catch(err => console.log(err))
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
        .catch(err => console.log(err))
};

// Comment POST via Modal
export const addUserComment = POSTcomment => ({
    type: ADD_USER_POST_COMMENT,
    POSTcomment
})