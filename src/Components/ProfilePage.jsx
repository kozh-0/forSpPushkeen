

// import Preloader from "./Help/Preloader";
import ProfileInfo from "./ProfilePage/ProfileInfo";
import ProfilePosts from "./ProfilePage/ProfilePosts";



export default function ProfilePage() {

    return(
        <main className="content">
            <ProfileInfo/>
            <ProfilePosts/>

            <div className="user_publications"></div>
        </main>
    )
}