import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const featchData = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(featchData);
  }, []);

  return (
    <>
      <p className="text-3xl font-bold underline">안녕하세요</p>
      <Link to="/signIn">
        <button>로그인</button>
      </Link>
      <Link to="/signUp">
        <button>회원가입</button>
      </Link>
    </>
  );
}

export default Home;
