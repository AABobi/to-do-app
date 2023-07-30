import { Task } from "@/components/ToDoApp/domain/task";
function createDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('.').map(Number);
  return new Date(year, month - 1, day);
}

export function sortTask(task: Task[] | undefined) {
  if (!task) {
    return [];
  }
  task.sort((taskA,taskB) => {
    if (taskA.date && taskB.date) {
      const dateA = createDate(taskA.date);
      const dateB = createDate(taskB.date);
      return dateA.getTime() - dateB.getTime();
    } else if (taskA.date) {
      return -1;
    } else if (taskB.date) {
      return 1;
    }
    return 0;
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
