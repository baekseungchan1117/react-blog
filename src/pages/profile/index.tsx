import Profile from "componets/Profile"
import Header from "componets/Header"
import Footer from "componets/Footer"
import PostList from "componets/PostList"


export default function ProfilePage(){
    return (
        <>
            <Header />
            <Profile />
            <PostList hasNavigation={false}/>
            <Footer />
        </>
    )
}