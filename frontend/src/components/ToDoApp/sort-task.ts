import { Task } from "@/components/ToDoApp/Task";

export function sortTask(task: Task[] | undefined) {
  if (!task) {
    return [];
  }
  const currentDate = new Date();
  task.sort((a, b) => {
    if (!a.date && !b.date) {
      return 0;
    } else if (!a.date) {
      return 1;
    } else if (!b.date) {
      return -1;
    }

    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));

    const diffA = Math.abs(dateA.getTime() - currentDate.getTime());
    const diffB = Math.abs(dateB.getTime() - currentDate.getTime());
    return diffA - diffB;
  });
  const priorityOrder = ["IMPORTANT", "NORMAL", "MINOR"];
  task.sort((a, b) => {
    if (a.date === b.date) {
      const priorityA = a.category ? priorityOrder.indexOf(a.category) : -1;
      const priorityB = b.category ? priorityOrder.indexOf(b.category) : -1;
      if (priorityA === -1 && priorityB === -1) {
        return 0;
      } else if (priorityA === -1) {
        return 1;
      } else if (priorityB === -1) {
        return -1;
      }

      return priorityA - priorityB;
    } else {
      return 0;
    }
  });
  return task;
}
