import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input />
          <Input />
        </Inputs>
        <Button>Login</Button>
      </Form>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  );
};

export default Home;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;
const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Input = styled.input`
  font-size: 20px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  &::placeholder {
    color: darkgray;
    font-size: 20px;
    font-weight: 500;
    font-family: "OTWelcomeRA";
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
`;

const Form = styled.div`
  display: flex;
  height: 100%;
`;

// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   useEffect(() => {
//     const featchData = fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//     console.log(featchData);
//   }, []);

//   return (
//     <>
//       <p className="text-3xl font-bold underline">안녕하세요</p>
//       <Link to="/signIn">
//         <button>로그인</button>
//       </Link>
//       <Link to="/signUp">
//         <button>회원가입</button>
//       </Link>
//     </>
//   );
// }

// export default Home;
