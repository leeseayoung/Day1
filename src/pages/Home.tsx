import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../apis/login";
import { Form, Title, Wrapper, Inputs, Input } from "../components/Common";
import Button from "../components/Button";

const Home = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 로그인 기능
  const onClick = async () => {
    const result = await login(id, password);
    localStorage.setItem("access", JSON.stringify(result));
    router("/mypage");
  };

  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input placeholder="아이디" onChange={onChangeId} value={id} />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={onChangePw}
          />
        </Inputs>
        <CustomButton onClick={onClick}>Login</CustomButton>
      </Form>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  );
};

const CustomButton = styled(Button)`
  background-color: black;
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
export default Home;
