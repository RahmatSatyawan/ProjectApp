import "./NavContainer.css";
import React from "react";
import {
  IonButton,
  IonHeader,
  IonItem,
  IonLabel,
  IonPopover,
  IonRouterLink,
} from "@ionic/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faUser } from "@fortawesome/free-solid-svg-icons";

const NavContainer: React.FC = () => {
  return (
    <IonHeader className="nav">
      <div>
        <FontAwesomeIcon
          className="icon"
          icon={faListCheck}
          style={{ color: "#6a64ff" }}
        />
        <IonRouterLink color="tertiary" className="nav-menu" routerLink="/home">
          TaskHub
        </IonRouterLink>
        <IonRouterLink className="nav-menu" routerLink="/about-us">
          About Us
        </IonRouterLink>
      </div>
      <IonButton className="user" color="tertiary" id="click-trigger">
        <FontAwesomeIcon className="icon" icon={faUser} />
      </IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonItem routerLink="/">
          <IonLabel>Account</IonLabel>
        </IonItem>
        <IonItem slot="content" routerLink="/login">
          <IonLabel>Login</IonLabel>
        </IonItem>
        <IonItem routerLink="/register" slot="content">
          <IonLabel>Register</IonLabel>
        </IonItem>
        <IonItem routerLink="/" slot="content">
          <IonLabel>Log Out</IonLabel>
        </IonItem>
      </IonPopover>
    </IonHeader>
  );
};

export default NavContainer;
