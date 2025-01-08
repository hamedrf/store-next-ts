import axios from "axios";

export const AutoLogin = async () => {
  try {
    const phone = { phone: "09213570822" };
    const { data: codeData } = await axios.post(
      `https://kharidpardeh.ir/api/auth/login`,
      phone,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("Code Data:", codeData);

    if (!codeData || !codeData.code) {
      throw new Error("Code not received or invalid response from server.");
    }

    const verify_code = {
      phone: "09213570822",
      code: `${codeData.code}`,
    };

    const { data: token } = await axios.post(
      `https://kharidpardeh.ir/api/auth/verify_code`,
      verify_code,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("Token:", token);

    if (!token) {
      throw new Error("Token not received or invalid response from server.");
    }

    return token.token;
  } catch (error) {
    console.log(
      "Error in autoLogin:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
};
