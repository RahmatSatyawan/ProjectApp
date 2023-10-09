import "./CardContainer.css";

import React, { useState } from "react";

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
  IonAccordion,
  IonAccordionGroup,
} from "@ionic/react";
import { TaskInterface } from "../data/task";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faInfo,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

interface ContainerProps {
  task: TaskInterface;
  refreshView: () => void; // Callback function from the parent
}

const CardContainer: React.FC<ContainerProps> = ({ task, refreshView }) => {
  const moveLeft = () => {
    let newCategory;

    if (task.category > 2) {
      newCategory = 2;
    } else if (task.category === 2) {
      newCategory = task.category - 1;
    } else {
      newCategory = task.category;
    }

    updateTaskCategory(newCategory); // Send a PUT request to update the category on the server
    console.log(
      "Move Left from" + task.id + task.category + "to" + newCategory
    ); // Log the new category value
  };

  const moveRight = () => {
    let newCategory;

    if (task.category > 2) {
      newCategory = 3;
    } else if (task.category >= 1) {
      newCategory = task.category + 1;
    } else {
      newCategory = task.category;
    }

    updateTaskCategory(newCategory); // Send a PUT request to update the category on the server

    console.log(
      "Move Left from" + task.id + task.category + "to" + newCategory
    ); // Log the new category value
  };

  const editTask = () => {
    console.log("Edit Task");
  };

  const deleteTask = () => {
    console.log("Delete Task");
    // Send a DELETE request to the server to delete the task
    axios
      .delete(
        `https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks/${task.id}`
      )
      .then((response) => {
        // If the DELETE request is successful, notify the parent component
        refreshView();
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const updateTaskCategory = (newCategory: number) => {
    // Send a PUT request to update the category on the server
    axios
      .put(
        `https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks/${task.id}`,
        {
          category: newCategory, // Specify the updated category in the request body
        }
      )
      .then((response) => {
        // Update the local task data with the updated category
        // setTask({ ...task, category: newCategory });
        refreshView();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <IonAccordionGroup className="ion-padding-accordion text-left">
      <IonAccordion>
        <IonItem color="tertiary" slot="header">
          <IonLabel>{task.title}</IonLabel>
        </IonItem>
        <div className="accordion-content" slot="content">
          <div>
            <div slot="start" className="dot dot-unread"></div>

            <IonItem
              style={{ textAlign: "center" }}
              color="dark"
              className="title-content"
              routerLink={`/detail/${task.id}`}
            >
              <p>
                <FontAwesomeIcon
                  style={{ paddingRight: "10px" }}
                  icon={faInfo}
                  size="xs"
                />
                <span>{task.title}</span>
              </p>
            </IonItem>

            <p>Created At : {task.createdAt.toString()}</p>
            <p>Due Date At : {task.dueDate.toString()}</p>
            <p>Category : {task.category}</p>
            <p>Priotity : {task.priority}</p>
            <p>Description :</p>
            <p>{task.description}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <IonButton
              color="light"
              onClick={moveLeft}
              disabled={task.category === 1 ? true : false}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </IonButton>

            <IonButton color="dark" onClick={editTask}>
              <FontAwesomeIcon icon={faPenToSquare} color="#6a64ff" />
            </IonButton>
            <IonButton color="dark" onClick={deleteTask}>
              <FontAwesomeIcon icon={faTrashCan} color="red" />
            </IonButton>
            <IonButton
              color="light"
              disabled={task.category === 3 ? true : false}
              onClick={moveRight}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </IonButton>
          </div>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
};
export default CardContainer;
