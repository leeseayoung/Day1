import { useEffect, useState } from "react";
import { getUser } from "../apis/login";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UserInfo = styled.div`
  margin: 10px 0;
  font-size: 1.2em;
  color: #333;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 10px 0;
`;

const Mypage = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUserData(user);
    };
    fetchUser();
  }, []);

  return (
    <Container>
      <UserInfo>아이디: {userData.id}</UserInfo>
      <Avatar src={userData.avatar} alt="프로필 이미지" />
      <UserInfo>닉네임: {userData.nickname}</UserInfo>
    </Container>
  );
};

export default Mypage;
