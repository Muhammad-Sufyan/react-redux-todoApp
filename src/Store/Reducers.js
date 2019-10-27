const create_Task = "CREATE_TASK";
const delete_Task = "DELETE_TASK";
const toggle_Task = "TOGGLE_TASK";

var state = {}
export function myReducer(state=[], action){
    switch(action.type){
        case create_Task :
            console.log("IN ACTION CREATOR")
            console.log(action.tasks)
            const tasks = action.tasks
            state=state.concat(tasks)
            console.log("STATE " , state)
            return state;
        default:
            return state;
    }
}
