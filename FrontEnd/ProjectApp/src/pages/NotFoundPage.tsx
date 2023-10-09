import { IonButton } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
  const history = useHistory();

  const handleBackToHome = () => {
    // Navigate back to the home page or the desired route
    history.push("/");
  };
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <img
        style={{ maxWidth: "200px" }}
        src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=740&t=st=1696854042~exp=1696854642~hmac=a84a6c67a4b6c72433e2c15051e36701f05fb0e15dae9b762aaf341bee6ef4d6"
        alt="erorr 404"
      />
      <h1>404</h1>
      <h3>Not found page</h3>
      <IonButton onClick={handleBackToHome}>Back to Home</IonButton>
    </div>
  );
};

export default NotFoundPage;
