import React from "react";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPopover,
} from "@ionic/react";
import { add } from "ionicons/icons";

function CreateButton() {
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
      <IonFabButton id="hover-trigger" size="small" color="tertiary">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonPopover trigger="hover-trigger" triggerAction="hover">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>
    </IonFab>
  );
}
export default CreateButton;
