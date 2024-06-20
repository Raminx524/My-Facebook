import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function PostDetails() {
  const id = useParams().id;
  const {
    data: post,
    error,
    loading,
  } = useFetch(`http://localhost:8001/posts/${id}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, Something Went Wrong</p>;
  return (
    <>
      <h1>Post Details</h1>
      {/* <Post /> */}
    </>
  );
}
