import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <>
      <button onClick={goBack}>Go Back</button>
      <h1>Error 404: Page not found!</h1>
    </>
  );
}
