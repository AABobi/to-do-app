import { Category } from "@/components/ToDoApp/category";

export interface Task {
  taskDescription: string;
  category?: Category;
  date?: string;
  location?: string;
}
