import { Wrapper } from "components/Wrapper/Wrapper";
import React from "react";
import "./style.scss";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { Link, useNavigate } from "react-router-dom";
export const EmailVerification = () => {
  const navigate = useNavigate();
  const [count, setCount] = React.useState(10);
  React.useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    if (count <= 0) {
      clearInterval(countdownTimer);
      navigate("/");
    }
    return () => {
      clearInterval(countdownTimer);
    };
  }, [count]);
  return (
    <div className="email-verification">
      <Wrapper>
        <div className="content">
          <div className="card-verify-email">
            <CloudDoneIcon className="ic" />
            <span>Email verification successfully </span>
            <div className="navs">
              <p>Redirecting to home... ({count}s)</p>
              <span>
                Or click <Link to="/">here</Link> to direct to home imediately
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
