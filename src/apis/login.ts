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

const accessToken = localStorage.getItem("access");
const parsedToken = accessToken ? JSON.parse(accessToken) : null;
export const getUser = async () => {
  const result = await axios.get(`https://moneyfulpublicpolicy.co.kr/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${parsedToken.accessToken}`,
    },
  });
  return result.data;
};

export const profileChange = async ({ formData }: { formData: FormData }) => {
  const result = await axios.patch(
    `https://moneyfulpublicpolicy.co.kr/profile`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${parsedToken.accessToken}`,
      },
    }
  );
  return result.data;
};
