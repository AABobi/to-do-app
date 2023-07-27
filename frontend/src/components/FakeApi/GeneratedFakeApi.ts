import {Task} from "@/components/ToDoApp/domain/task";
import {convertToCustomDate} from "@/components/ToDoApp/domain/convert-to-custom-date";
import {sortTask} from "@/components/ToDoApp/domain/sort-task";

export class GeneratedFakeApi {

    //POST function
    addNewTaskToDataBase(newTask: Task){
        newTask.date =  convertToCustomDate(newTask.date);
        localStorage.setItem(localStorage.length.toString(), JSON.stringify(newTask));
        return this.getTasks();
    }

    //GET
     getTasks() {
        let tasks: Array<Task> = [];

        for (let i = 0; i < localStorage.length; i++) {
            const localStorageItem = localStorage.getItem(i.toString());
            if (localStorageItem) {
                const task = JSON.parse(localStorageItem);
                tasks.push(task)
            }
        }
        sortTask(tasks);
        return tasks;
    }

    //This is horrible, but there is no normal back just localStorage
    //DELETE
    deleteTask(task: Task, tasks: Task[]) {
         let sortedTasks = tasks.filter(data=> data !== task);

         localStorage.clear();
         for (let obj of sortedTasks) {
            localStorage.setItem(localStorage.length.toString(), JSON.stringify(obj));
        }
         return this.getTasks()
    }
}