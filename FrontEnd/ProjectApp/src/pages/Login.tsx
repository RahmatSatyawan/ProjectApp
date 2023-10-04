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
import React from "react";

import WorldMap from "../../public/WorldMap.svg";
import "./Login.css";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
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
              <IonCardTitle>Login</IonCardTitle>
              <IonCardSubtitle>
                Welcome back, hope you're doing well
              </IonCardSubtitle>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonInput
                aria-label="Medium input"
                color="medium"
                // fill="outline"
                labelPlacement="floating"
                label="Email"
                type="email"
                placeholder="Enter email@domain.com"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                aria-label="Medium input"
                color="medium"
                // fill="outline"
                labelPlacement="floating"
                label="Password"
                type="password"
                placeholder="Enter password"
              ></IonInput>
            </IonItem>
            <IonButton expand="block">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              Register
            </IonButton>
            <h3>
              Already got an account?{" "}
              <IonButton expand="block">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                Login
              </IonButton>
            </h3>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
