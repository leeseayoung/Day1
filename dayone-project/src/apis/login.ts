import axios from "axios";

export const login = async (id: string, password: string): Promise<string> => {
  const result = await axios.post("https://moneyfulpublicpolicy.co.kr/login", {
    id,
    password,
  });
  return result.data;
};

type RegisterRequestProps = {
  id: string;
  password: string;
  nickname: string;
};

type RegisterResponseProps = {
  message: string;
  success: string;
};

export const register = async ({
  id,
  password,
  nickname,
}: RegisterRequestProps): Promise<RegisterResponseProps> => {
  const result = await axios.post(
    "https://moneyfulpublicpolicy.co.kr/register",
    {
      id,
      password,
      nickname,
    }
  );

  return result.data;
};

export const getUser = async () => {
  const user = JSON.parse(localStorage.getItem("access"));
  const result = await axios.get(`https://moneyfulpublicpolicy.co.kr/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return result.data;
};

export const profileChange = async ({ formData }) => {
  const user = JSON.parse(localStorage.getItem("access"));
  const result = await axios.patch(
    `https://moneyfulpublicpolicy.co.kr/profile`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.accessToken}`,
      },
    }
  );
  return result.data;
};
