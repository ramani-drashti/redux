import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../Redux/Alert_Action/user_action";
import { Button } from "react-bootstrap";

const Home = () => {
  // const [user, setuser] = useState(false);
  // const token = localStorage.getItem("user");
  // const Homeuser = useSelector((state) => state.user);
  // console.warn(Homeuser);

  // useEffect(() => {
  //   if (user === true) {
  //     setuser(true);
  //   }
  // });
  // const route = () => {
  //   let path = `/`;
  //   navigate(path);
  // };
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const change = (e) => {
  //   // localStorage.setItem("user",false)
  //   dispatch(logout());
  //   // localStorage.clear();
  //   route();
  // };

  return (
    <Container>
      <div>
        <h3>
          .....Welcome to home page....
          {/* <span style={{ color: "green" }}>{Homeuser}</span> */}
        </h3>
      </div>
      <div
        style={{
          textAlign: "center",
          // marginTop: "20px"
        }}
      >
        {/* <Button onClick={change} variant="outline-success">
          Logout
        </Button> */}
      </div>
    </Container>
  );
};

export default Home;
