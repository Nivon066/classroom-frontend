import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "Fundamental concepts of programming and computer systems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "MATH",
    description: "Advanced topics in differential and integral calculus.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG102",
    name: "English Composition",
    department: "ENGLISH",
    description: "Developing critical thinking and writing skills through literature.",
    createdAt: new Date().toISOString(),
  },
];
