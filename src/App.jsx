import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import PostFeedPage from "./pages/PostFeedPage";
import PostDetails from "./pages/PostDetailsPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts">
          <Route index element={<PostFeedPage />} />
          <Route path=":id" element={<PostDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
