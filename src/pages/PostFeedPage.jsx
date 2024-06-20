import useFetch from "../hooks/useFetch";
import PostFeed from "../components/PostFeed";

export default function PostFeedPage() {
  const response = useFetch("http://localhost:8001/posts");
  if (response.loading) return <h1>Loading...</h1>;
  if (response.error) {
    return <p>{response.error}</p>;
  }
  return (
    <>
      <h1>Post Feed</h1>
      <PostFeed posts={response.data} />
    </>
  );
}
