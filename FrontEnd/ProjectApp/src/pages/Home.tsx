import { IonContent, IonPage, IonCol, IonGrid, IonRow } from "@ionic/react";
import CardContainer from "../components/CardContainer";
import "./Home.css";
import AnimatedShape from "../../public/AnimatedShape.svg";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow
            className="category-bg"
            style={{ backgroundImage: `url(${AnimatedShape})` }}
          >
            <IonCol className="category">
              <h1>Todo</h1>
              <CardContainer />
              <CardContainer />
              <CardContainer />
              <CardContainer />
              <CardContainer />
            </IonCol>
            <IonCol className="category">
              <h1>InProgress</h1>
              <CardContainer />
            </IonCol>
            <IonCol className="category">
              <h1>Finish</h1>
              <CardContainer />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
