import axios from 'axios';
import { useEffect, useState } from 'react';

export interface TaskInterface {
  id: number;
  category: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  createdAt: Date;
}

// export interface Task {
//   id: number;
//   title: string;
//   description: string;
//   due_date: number;
//   category: string;
//   priority: string;
// }

// const task: Task[] = [
//   {
//     id: 0,
//     title: "task1",
//     description: "description1",
//     due_date: 24 - 12 - 2020,
//     category: "todo",
//     priority: "high",
//   },
//   {
//     id: 1,
//     title: "task2",
//     description: "description2",
//     due_date: 24 - 12 - 2020,
//     category: "inprogress",
//     priority: "high",
//   },
//   {
//     id: 2,
//     title: "task3",
//     description: "description2",
//     due_date: 24 - 12 - 2020,
//     category: "inprogress",
//     priority: "high",
//   },
//   {
//     id: 4,
//     title: "task3",
//     description: "description2",
//     due_date: 24 - 12 - 2020,
//     category: "finish",
//     priority: "high",
//   },
// ];

// const [APIData, setAPIData] = useState([]);
// useEffect(() => {
//   axios
//     .get(`https://651bff65194f77f2a5af34dc.mockapi.io/projectapp/tasks`)
//     .then((response) => {
//       console.log(response.data);
//       setAPIData(response.data);
//     });
// }, []);

// export const getTasks = () => task;

// export const getTask = (id: number) => task.find((e) => e.id === id);
