import { useCallback, useEffect, useRef, useState } from "react";
import { getUser, profileChange } from "../apis/login";
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

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Mypage = () => {
  const [userData, setUserData] = useState({
    id: "",
    nickname: "",
    avatar: "",
  });

  const [imgFile, setImgFile] = useState<File | null>(null);
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUserData(user);
    };
    fetchUser();
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImgFile(e.target.files[0]);
      }
    },
    []
  );

  const onUploadImageButtonClick = async () => {
    if (!imgFile) {
      alert("이미지를 선택해주세요");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", imgFile);
    const image = await profileChange({ formData });

    setUserData((prevData) => ({
      ...prevData,
      avatar: image.avatar,
    }));
    console.log(image);

    alert("프로필 이미지가 변경 되었습니다");
  };

  const nicknameChange = async () => {
    if (!nickname) {
      alert("닉네임을 입력해주세요");
      return;
    }
    const formData = new FormData();
    formData.append("nickname", nickname);
    const userNickname = await profileChange({ formData });

    setUserData((prevData) => ({
      ...prevData,
      nickname: userNickname.nickname,
    }));
    alert("닉네임이 변경 되었습니다");
    setNickname("");
  };

  return (
    <Container>
      <UserInfo>아이디: {userData.id}</UserInfo>
      <>
        <Avatar src={userData.avatar} alt="프로필 이미지" />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onUploadImage}
        />
        <Button onClick={onUploadImageButtonClick}>저장하기</Button>
      </>

      <UserInfo>
        닉네임: {userData.nickname}
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <Button onClick={nicknameChange}>버튼</Button>
      </UserInfo>
    </Container>
  );
};

export default Mypage;
