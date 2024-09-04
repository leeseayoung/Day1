import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      alert("이메일을 입력해 주세요.");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    if (password.length < 8) {
      alert("8자 이상 입력해 주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const API_URL = "http://localhost:5173";

      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
      });

      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        alert("회원가입 성공! 당신의 JWT가 로컬스토리지에 저장되었습니다.");
      } else {
        alert("회원가입 실패. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인:</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUp;
