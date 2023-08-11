import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import CreateUser from "./components/CreateUser";
import EditPost from "./components/EditPost";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
