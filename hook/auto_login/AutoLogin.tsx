import axios from "axios";
import { useState } from "react";

export const AutoLogin = async () => {
  const [loading, setLoading] = useState(true);
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

    const { data } = await axios.post(
      `https://kharidpardeh.ir/api/auth/verify_code`,
      verify_code,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const token: string = data.token;

    if (!token) {
      throw new Error("Token not received or invalid response from server.");
    }

    setLoading(false);
    return { token, loading };
  } catch (error) {
    console.error(
      "Error in autoLogin:",
      error instanceof Error ? error.message : error
    );
    return { token: null, loading: false };
  }
};
