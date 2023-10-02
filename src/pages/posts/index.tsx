import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import PostList from "../../componets/PostList";

export default function PostPage(){
    return (
        <>
        <Header />
        <PostList hasNavigation={false}/>
        <Footer />
        </>
    );
} 