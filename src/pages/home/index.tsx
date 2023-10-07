import { Link } from "react-router-dom";
import Header from "componets/Header";
import Footer from "componets/Footer";
import PostList from "componets/PostList";
import Carousel from "componets/Carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel /> 
      <PostList />
      <Footer />
    </div>
  )
}

export default Home