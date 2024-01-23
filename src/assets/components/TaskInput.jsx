import { useState } from "react";

export default function TaskInput() {
    const [input, setInput] = useState({
        title: "",
        priority: "",
    });

    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className='taskinput my-4'>
            <div className='input-group flex'>
                <input
                    value={input.title}
                    onChange={handleInputChange}
                    className='border px-12 py-2 border-teal-500 rounded focus:outline-none text-gray-600'
                    type='text'
                    name='title'
                    id='task'
                    placeholder='Whats on your mind ?'
                />

                <div className='priority border border-teal-500 rounded mx-2'>
                    <select
                        value={input.priority}
                        onChange={handleInputChange}
                        className='bg-transparent px-12 py-2 border-none outline-none'
                        name='priority'
                        id=''>
                        <option
                            className=''
                            value=''>
                            Select Priority
                        </option>
                        <option
                            className=''
                            value='Important'>
                            Important
                        </option>
                        <option
                            className=''
                            value='Urgent'>
                            Urgent
                        </option>
                        <option
                            className=''
                            value='Not Important'>
                            Not Important
                        </option>
                    </select>
                </div>
                <button className='bg-teal-500 px-12 py-2 rounded'>
                    Add Task
                </button>
            </div>
        </div>
    );
}

