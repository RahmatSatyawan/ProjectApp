import {
  IonContent,
  IonText,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React, { useState } from "react";

import WorldMap from "../../public/WorldMap.svg";
import "./Login.css";

import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = () => {
    // Perform login logic here
    console.log("Logged in with:", email, password);
    //clear the form
    setEmail("");
    setPassword("");

    // Perform login logic here
    alert("Registered with: " + name + " " + email + " " + password);
    // Send a POST request to create the task
  };

  return (
    <IonPage className="ion-padding">
      <IonContent>
        <IonCard className="card-login">
          <img
            alt="World Map"
            src={WorldMap}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://ionicframework.com/docs/img/demos/card-media.png";
            }}
          />
          <IonCardHeader>
            <IonText>
              <IonCardTitle>Login</IonCardTitle>
              <IonCardSubtitle>
                Welcome back, hope you're doing well
              </IonCardSubtitle>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <form className="group-login">
              <IonInput
                aria-label="Tertiary input"
                color="tertiary"
                labelPlacement="stacked"
                label="Email"
                type="email"
                placeholder="Enter email@domain.com"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
              <IonInput
                aria-label="Tertiary input"
                color="tertiary"
                labelPlacement="stacked"
                label="Password"
                type="password"
                placeholder="Enter password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </form>
            <IonButton expand="block" color="tertiary" onClick={loginHandle}>
              <FontAwesomeIcon className="icon" icon={faArrowRightToBracket} />
              Login
            </IonButton>
            <span>
              Don't have got an account?{" "}
              <a href="/register" color="tertiary">
                Register
              </a>
            </span>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
