import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      setError("아이디(이메일)와 비밀번호를 모두 입력해주세요.");
    } else {
      setError("");
      alert(`아이디: ${email}\n비밀번호: ${password}`);
    }
  };

  return (
    <>
      <p>로그인</p>
      <div>
        <label>아이디(이메일)</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSignIn}>로그인</button>
    </>
  );
};

export default SignIn;
