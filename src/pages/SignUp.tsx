import styled from "styled-components";
import { useState } from "react";
import { Wrapper, Title, Inputs, Input } from "../components/Common";
import { register } from "../apis/login";
import Button from "../components/Button";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async () => {
    if (!id) {
      alert("아이디를 입력하세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력하세요.");
      return;
    } else if (password.length < 8) {
      alert("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    if (!confirmPassword) {
      alert("비밀번호 확인을 입력하세요.");
      return;
    } else if (confirmPassword !== password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!nickname) {
      alert("닉네임을 입력하세요.");
      return;
    }
    await register({ id, password, nickname });
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="아이디" value={id} onChange={onChangeId} />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />
        <Input
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={onChangeNickname}
        />
      </Inputs>
      <CustomButton onClick={handleSubmit}>회원가입</CustomButton>
    </Wrapper>
  );
};

const CustomButton = styled(Button)`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

export default SignUp;
