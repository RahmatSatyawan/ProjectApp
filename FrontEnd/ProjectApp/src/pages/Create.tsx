import React, { useState } from "react";
import "./Create.css";

import {
  IonAccordion,
  IonAccordionGroup,
  IonCardContent,
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { TaskInterface } from "../data/task";
import axios from "axios";

const Create = () => {
  const [newTask, setNewTask] = useState<TaskInterface>({
    id: 0, // You may not know the ID until the server assigns it
    category: 1, // Initialize with an appropriate category value
    title: "",
    description: "",
    dueDate: new Date(),
    priority: "",
    createdAt: new Date(),
  });

  const handleInputChange = (value: string, fieldName: string) => {
    setNewTask({ ...newTask, [fieldName]: value });
  };

  const handleSubmit = () => {
    // Send a POST request to create the task
    axios
      .post<TaskInterface>(
        "https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks",
        newTask
      )
      .then((response) => {
        // Handle success, which may include updating the UI
        console.log("Task created:", response.data);
        // Optionally reset the form or navigate to a different page
      })
      .catch((error) => {
        // Handle errors, such as displaying an error message
        console.error("Error creating task:", error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create / Edit Task</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonItem>
            <IonInput
              label="Title"
              type="text"
              name="title"
              value={newTask.title}
              onIonChange={(e) =>
                handleInputChange(e.detail.value as string, "title")
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonTextarea
              style={{ height: "100px" }}
              label="Description"
              name="description"
              value={newTask.description}
              onIonChange={(e) =>
                handleInputChange(e.detail.value as string, "description")
              }
            ></IonTextarea>
          </IonItem>
          {/* <IonLabel>Select Date</IonLabel>
          <IonItem>
            <IonDatetime
              aria-label="Select Date"
              name="dueDate"
              value={
                newTask.dueDate ? new Date(newTask.dueDate).toISOString() : ""
              }
              onIonChange={(e) =>
                handleInputChange(e.detail.value as string, "dueDate")
              }
            ></IonDatetime>
          </IonItem> */}

          <IonAccordionGroup color="light">
            <IonAccordion color="light">
              <IonItem slot="header">
                <IonLabel>Select Date</IonLabel>
              </IonItem>
              <div color="light" slot="content">
                <IonItem>
                  <IonDatetime
                    aria-label="Select Date"
                    name="dueDate"
                    value={
                      newTask.dueDate
                        ? new Date(newTask.dueDate).toISOString()
                        : ""
                    }
                    onIonChange={(e) =>
                      handleInputChange(e.detail.value as string, "dueDate")
                    }
                  ></IonDatetime>
                </IonItem>
              </div>
            </IonAccordion>
          </IonAccordionGroup>

          <IonItem>
            <IonInput
              label="Priority"
              type="text"
              name="priority"
              value={newTask.priority}
              onIonChange={(e) =>
                handleInputChange(e.detail.value as string, "priority")
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonSelect
              label="Category"
              name="category"
              value={newTask.category}
              onIonChange={(e) =>
                handleInputChange(e.detail.value as string, "category")
              }
            >
              <IonSelectOption value={1}>Todo</IonSelectOption>
              <IonSelectOption value={2}>InProgress</IonSelectOption>
              <IonSelectOption value={3}>Finish</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonButton expand="full" onClick={handleSubmit}>
            Create Task
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Create;
