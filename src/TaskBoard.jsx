import TaskInput from "./assets/components/TaskInput";
import TaskList from "./assets/components/TaskLIst";

export default function TaskBoard() {
    return (
        <div className={`w-full h-screen `}>
            <div className=' p-12'>
                <h2 className='text-4xl font-bold text-teal-600 py-12'>
                    Tasker
                </h2>
                <TaskInput />
                <hr />

                <TaskList />
            </div>
        </div>
    );
}

