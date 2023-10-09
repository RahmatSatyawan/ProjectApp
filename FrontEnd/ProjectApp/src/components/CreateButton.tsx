import React from "react";
import { IonFab, IonFabButton } from "@ionic/react";
import "./CreateButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateButton() {
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
      <IonFabButton
        routerLink="/create"
        id="hover-trigger"
        size="small"
        color="dark"
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </IonFabButton>
    </IonFab>
  );
}
export default CreateButton;
