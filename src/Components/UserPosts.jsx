// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom"
// import { loadPostsThunk } from "./Redux/profile/profileAction";


// export default function UserPosts() {
//     const { userId, name } = useParams();
//     const dispatch = useDispatch();
//     const UserPosts = useSelector(state => state.profile.posts.filter(el => el.userId = userId));
    
//     console.log(UserPosts);


//     useEffect(() => {
//         dispatch(loadPostsThunk());
//     }, [dispatch])

//     return (
//         <main className="container">
//             <div className="content">
//                 {userId && name}

//             </div>
//         </main>
//     )
// }