import ProfileInfo from "./ProfilePage/ProfileInfo";
import ProfilePosts from "./ProfilePage/ProfilePosts";
import ProfilePublications from "./ProfilePage/ProfilePublications";


export default function ProfilePage() {
    document.documentElement.scrollTop = 0;

    return(
        <main className="content">
            <ProfileInfo/>
            <ProfilePosts/>
            <ProfilePublications/>
        </main>
    )
}