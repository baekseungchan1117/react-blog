import { Route, Routes, Navigate} from "react-router-dom";
import Home from '../pages/home';
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import ProfilePage from "../pages/profile";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

const Router = () => {
  return (
    <>
    {/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Post List</Link>
      </li>
      <li>
        <Link to="/posts/:id">Post Detail</Link>
      </li>
      <li>
        <Link to="/posts/new">Post New</Link>
      </li>
      <li>
        <Link to="/posts/edit/:id">Post Edit</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul> */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/posts' element={<PostList />}/>
      <Route path='/posts/:id' element={<PostDetail />}/>
      <Route path='/posts/new' element={<PostNew />}/>
      <Route path='/posts/edit/:id' element={<PostEdit />}/>
      <Route path='/profile' element={<ProfilePage />}/>
      <Route path='login' element={<LoginPage />}/>
      <Route path='signup' element={<SignupPage />}/>
      <Route path='*' element={<Navigate replace to={"/"}/>}/>
    </Routes>
    </>
  )
}

export default Router