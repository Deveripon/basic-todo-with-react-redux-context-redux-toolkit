import Task from "./Task";

export default function TaskList() {
    return (
        <table className='flex flex-col w-fit'>
            <th className='*:text-center *:align-middle *:border-gray-100 *:min-w-[100px] bg-teal-800/20'>
                <td>#</td>
                <td className='!min-w-[400px]'>task title</td>
                <td className='!min-w-[300px]'>priority</td>
                <td className='!min-w-[300px]'>action</td>
            </th>

            <Task />
        </table>
    );
}

