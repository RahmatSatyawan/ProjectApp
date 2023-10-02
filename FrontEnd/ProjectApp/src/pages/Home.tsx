import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import CardContainer from "../components/CardContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ProjectApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Todo</h1>
              <CardContainer />
            </IonCol>
            <IonCol>
              <h1>InProgress</h1>
            </IonCol>
            <IonCol>
              <h1>Finish</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
