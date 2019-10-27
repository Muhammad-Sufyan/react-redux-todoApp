

const create_Task = "CREATE_TASK";
const delete_Task = "DELETE_TASK";
const toggle_Task = "TOGGLE_TASK";

export function create_task_action_creator(task){
    return {
        type: create_Task,
        tasks : task
    }
}

