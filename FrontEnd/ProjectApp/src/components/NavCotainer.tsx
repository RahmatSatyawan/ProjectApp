import "./NavContainer.css";
import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonPopover,
  IonRouterLink,
  IonAccordionGroup,
  IonAccordion,
  IonText,
} from "@ionic/react";

import Home from "../pages/Home";
import Create from "../pages/Create";
import Login from "../pages/Login";
// import { Link } from "react-router-dom";

import {
  personCircleOutline,
  personCircle,
  sunny,
  sunnyOutline,
} from "ionicons/icons";
import type { ToggleCustomEvent } from "@ionic/react";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faListCheck } from "@fortawesome/free-solid-svg-icons";

const NavContainer: React.FC = () => {
  return (
    <IonHeader className="nav">
      <div>
        <FontAwesomeIcon
          className="icon"
          icon={faListCheck}
          style={{ color: "#6a64ff" }}
        />
        <IonText color="tertiary">TaskHub</IonText>
        <IonRouterLink className="nav-menu" routerLink="/home">
          Home
        </IonRouterLink>
        <IonRouterLink className="nav-menu" routerLink="/about-us">
          About Us
        </IonRouterLink>
      </div>
      <IonButton color="tertiary" id="click-trigger">
        Login/Register
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
      {/* <Link to="/register">User 1</Link> */}
    </IonHeader>
  );
};

export default NavContainer;
