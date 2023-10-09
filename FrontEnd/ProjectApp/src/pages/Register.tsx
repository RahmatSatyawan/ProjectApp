import React, { useState } from "react";
import "./Register.css";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonInput,
  IonPage,
  IonText,
} from "@ionic/react";

import WorldMap from "../../public/WorldMap.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Register");
    console.log("Logged in with:", name, email, password);

    //clear the form
    setName("");
    setEmail("");
    setPassword("");

    // Perform login logic here
    alert("Registered with: " + name + " " + email + " " + password);
    // Send a POST request to create the task
  };

  return (
    <IonPage className="ion-padding">
      <IonContent>
        <IonCard className="card-register">
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
              <IonCardTitle>Register</IonCardTitle>
              <IonCardSubtitle>Lets get to know each other</IonCardSubtitle>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <form className="group-register">
              <IonInput
                aria-label="Tertiary input"
                color="tertiary"
                labelPlacement="stacked"
                label="Name"
                placeholder="Enter name"
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
              ></IonInput>
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
            <IonButton expand="block" color="tertiary" onClick={handleRegister}>
              <FontAwesomeIcon className="icon" icon={faUserPlus} />
              Register
            </IonButton>
            <span>
              Already got an account?{" "}
              <a href="/login" color="terniary">
                Login
              </a>
            </span>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
