import React, { useEffect, useState } from "react";
import "./Detail.css";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useHistory, useParams } from "react-router";
import { TaskInterface } from "../data/task";
import AnimatedShape from "../../public/AnimatedShape.svg";
import axios from "axios";

const Detail = () => {
  const [task, setTask] = useState<TaskInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const editTask = () => {
    console.log("Edit task");
  };

  const deleteTask = () => {
    console.log("Delete task");
  };

  const handleBackToHome = () => {
    // Navigate back to the home page or the desired route
    history.push("/");
  };

  useEffect(() => {
    axios
      .get(`https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks/${id}`)
      .then((response) => {
        console.log(response.data);
        setTask(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    if (task) {
      setTask(task);
    }
  }, [id]);

  return (
    <IonPage>
      <IonContent
        color="light"
        className="ion-padding detail-page"
        fullscreen
        style={{ backgroundImage: `url(${AnimatedShape})` }}
      >
        <div>
          <h2>Detail Page</h2>
        </div>

        {task ? (
          <>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>{task.title}</h2>

                <div className="ion-padding">
                  <p>created at : {task.createdAt.toString()}</p>
                  <p>Due Date : {task.dueDate.toString()}</p>
                  <p>Category : {task.category}</p>
                  <p>Priority : {task.priority}</p>
                  <p>Description : {task.description}</p>
                </div>
                <IonButton
                  expand="block"
                  disabled={true}
                  color="medium"
                  onClick={editTask}
                >
                  Edit
                </IonButton>
                <IonButton
                  expand="block"
                  disabled={true}
                  color="medium"
                  onClick={deleteTask}
                >
                  Delete
                </IonButton>
                <IonButton
                  expand="block"
                  // disabled={true}
                  color="medium"
                  onClick={handleBackToHome}
                >
                  Back to Home
                </IonButton>
              </IonLabel>
            </IonItem>
          </>
        ) : (
          <div>Task not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Detail;
