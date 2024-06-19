import useFetch from "../hooks/useFetch";

export function PostFeed() {
  const {
    data: posts,
    login,
    logout,
  } = useFetch("http://localhost:8001/posts");
  console.log(posts);
  return <h1>Post Feed</h1>;
}
