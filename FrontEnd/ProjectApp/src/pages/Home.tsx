import CardContainer from "../components/CardContainer";
import "./Home.css";

import {
  IonContent,
  IonPage,
  IonCol,
  IonGrid,
  IonRow,
  useIonViewWillEnter,
} from "@ionic/react";

import AnimatedShape from "../../public/AnimatedShape.svg";
import { useEffect, useState } from "react";
import { TaskInterface } from "../data/task";
import axios from "axios";

const Home: React.FC = () => {
  const [task, setTask] = useState<TaskInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useIonViewWillEnter(() => {
    const gettask = task;
    setTask(gettask);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  // Callback function to refresh the view
  const refreshView = () => {
    axios;
    axios
      .get(`https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks`)
      .then((response) => {
        console.log(response.data);
        setTask(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks`)
      .then((response) => {
        console.log(response.data);
        setTask(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <IonPage>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <IonContent fullscreen>
          <IonGrid
            className="ion-padding ion-grid"
            style={{
              minHeight: "100vh",
              backgroundImage: `url(${AnimatedShape})`,
            }}
          >
            <IonRow className="category-bg grid-flex">
              <IonCol size="70" size-md="30" className="category">
                <h1>Todo</h1>
                {task
                  .filter((t) => t.category === 1)
                  .map((t) => (
                    <CardContainer
                      key={t.id}
                      task={t}
                      refreshView={refreshView}
                    />
                  ))}
              </IonCol>
              <IonCol size="70" size-md="30" className="category">
                <h1>InProgress</h1>
                {task
                  .filter((t) => t.category === 2)
                  .map((t) => (
                    <CardContainer
                      key={t.id}
                      task={t}
                      refreshView={refreshView}
                    />
                  ))}
              </IonCol>
              <IonCol size="70" size-md="30" className="category">
                <h1>Finish</h1>
                {task
                  .filter((t) => t.category !== 1 && t.category !== 2)
                  .map((t) => (
                    <CardContainer
                      key={t.id}
                      task={t}
                      refreshView={refreshView}
                    />
                  ))}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      )}
    </IonPage>
  );
};

export default Home;
