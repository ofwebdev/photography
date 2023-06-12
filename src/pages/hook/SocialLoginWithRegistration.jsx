import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

import { Google } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const GoogleButton = styled(Button)`
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  text-transform: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const SocialLoginWithRegistration = ({ login }) => {
  const { signInWithGmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLog = () => {
    signInWithGmail().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://backend-pi-ten.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <GoogleButton onClick={handleGoogleLog} fullWidth>
          <Google />
          {login === "Login" ? "Login" : "Register"} with Google
        </GoogleButton>
      </div>
    </div>
  );
};

export default SocialLoginWithRegistration;
