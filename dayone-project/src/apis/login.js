import axios from "axios";

export const loginAPI = async (id, pw) => {
  const result = axios.post("http://front.cau-likelion.org", { id, pw });
  return result.data;
};
