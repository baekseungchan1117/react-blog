import { Link } from "react-router-dom";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import PostList from "../../componets/PostList";

const Home = () => {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  )
}

export default Home