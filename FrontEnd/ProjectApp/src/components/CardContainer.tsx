import "./CardContainer.css";

import React from "react";

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

function Example() {
  return (
    <IonCard color="light">
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonContent color="light">
          <IonList inset={true}>
            <IonItem>
              <IonLabel>Description</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Super Mario World</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonCardContent>
      <div>
        <IonButton expand="block" color="light">
          Move to Todo
        </IonButton>
        <IonButton expand="block" disabled={true} color="medium">
          Move to InProgress
        </IonButton>
        <IonButton expand="block" color="success">
          Move to Finish
        </IonButton>
      </div>
    </IonCard>
  );
}
export default Example;
