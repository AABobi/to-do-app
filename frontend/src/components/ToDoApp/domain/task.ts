import { Category } from "@/components/ToDoApp/domain/category";

export interface Task {
  taskDescription: string;
  category?: Category;
  date?: string;
  location?: string;
}
