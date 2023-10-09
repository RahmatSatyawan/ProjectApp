// import React, { useState } from "react";
// import "./Register.css";

// import {
//   IonBackButton,
//   IonButton,
//   IonButtons,
//   IonCard,
//   IonCardContent,
//   IonCardHeader,
//   IonCardSubtitle,
//   IonCardTitle,
//   IonContent,
//   IonHeader,
//   IonIcon,
//   IonInput,
//   IonItem,
//   IonList,
//   IonPage,
//   IonRouterLink,
//   IonText,
//   IonTitle,
//   IonToolbar,
// } from "@ionic/react";

// import WorldMap from "../../public/WorldMap.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { chevronBackSharp } from "ionicons/icons";
// import { Router } from "react-router";

// import { TaskInterface } from "../data/task";
// import axios from "axios";

// const Create = () => {
//   //   const [title, setTitle] = useState<string>("");
//   //   const [desc, setDesc] = useState<string>("");
//   //   const [priority, setPriority] = useState<string>("");
//   //   const [category, setCategory] = useState<string>("");

//   const [newTask, setNewTask] = useState<TaskInterface>({
//     id: 0, // You may not know the ID until the server assigns it
//     category: 1, // Initialize with an appropriate category value
//     title: "",
//     description: "",
//     dueDate: new Date(),
//     priority: "",
//     createdAt: new Date(),
//   });

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     setNewTask({ ...newTask, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Send a POST request to create the task
//     axios
//       .post<TaskInterface>(
//         "https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks",
//         newTask
//       )
//       .then((response) => {
//         // Handle success, which may include updating the UI
//         console.log("Task created:", response.data);
//         // Optionally reset the form or navigate to a different page
//       })
//       .catch((error) => {
//         // Handle errors, such as displaying an error message
//         console.error("Error creating task:", error);
//       });
//   };

//   // const postData = () => {
//   //   console.log("titile" + title);
//   //   console.log(desc);
//   //   console.log(priority);
//   //   console.log(category);
//   //   axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
//   //     title,
//   //     desc,
//   //     priority,
//   //   });
//   // };

//   return (
//     <IonPage className="ion-padding">
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonButton>
//               <IonIcon icon={chevronBackSharp} />
//             </IonButton>
//           </IonButtons>
//           <IonBackButton text="Todo App" defaultHref="/home"></IonBackButton>

//           <IonTitle>Add Item</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonCard className="card-register">
//           <img
//             alt="World Map"
//             src={WorldMap}
//             onError={({ currentTarget }) => {
//               currentTarget.onerror = null; // prevents looping
//               currentTarget.src =
//                 "https://ionicframework.com/docs/img/demos/card-media.png";
//             }}
//           />
//           <IonCardHeader>
//             <IonText>
//               <IonCardTitle>Create</IonCardTitle>
//             </IonText>
//           </IonCardHeader>
//           <IonCardContent>
//             <IonItem>
//               <IonInput
//                 // fill="outline"
//                 labelPlacement="floating"
//                 label="Title"
//                 placeholder="Enter title"
//                 value={title}
//                 onIonChange={(e) => setTitle(e.detail.value ?? "")}
//               ></IonInput>
//             </IonItem>
//             <IonItem>
//               <IonInput
//                 // fill="outline"
//                 labelPlacement="floating"
//                 label="Description"
//                 placeholder="Enter Description"
//                 value={desc}
//                 onIonChange={(e) => setDesc(e.detail.value ?? "")}
//               ></IonInput>
//             </IonItem>
//             <IonItem>
//               <IonInput
//                 // fill="outline"
//                 labelPlacement="floating"
//                 label="Priority"
//                 placeholder="Enter priority"
//                 value={priority}
//                 onIonChange={(e) => setPriority(e.detail.value ?? "")}
//               ></IonInput>
//             </IonItem>
//             <IonItem>
//               <IonInput
//                 // fill="outline"
//                 labelPlacement="floating"
//                 label="Category"
//                 placeholder="Enter priority"
//                 value={category}
//                 onIonChange={(e) => setCategory(e.detail.value ?? "")}
//               ></IonInput>
//             </IonItem>
//             <div>
//               <IonButton onClick={postData} type="submit">
//                 Submit
//               </IonButton>
//             </div>
//           </IonCardContent>
//         </IonCard>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Create;
