import React from "react";
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
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";

import WorldMap from "../../public/WorldMap.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
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
            <IonItem>
              <IonInput
                // fill="outline"
                labelPlacement="floating"
                label="Name"
                placeholder="Enter name"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                // fill="outline"
                labelPlacement="floating"
                label="Email input"
                type="email"
                placeholder="Enter email@domain.com"
              ></IonInput>
            </IonItem>
            <IonList>
              <IonItem>
                <IonInput
                  // fill="outline"
                  labelPlacement="floating"
                  label="Password input"
                  type="password"
                  value=""
                  placeholder="Enter password"
                ></IonInput>
              </IonItem>
            </IonList>
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

export default Register;
