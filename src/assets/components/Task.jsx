import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
export default function Task() {
    return (
        <tr className=' my-[2px] *:min-w-[100px] flex justify-center items-center bg-teal-800/20'>
            <td className=' flex justify-center items-center p-3'>#</td>
            <td className='!min-w-[400px] flex justify-center items-center p-3'>
                demo title
            </td>
            <td className='!min-w-[300px] flex justify-center items-center p-3'>
                important
            </td>
            <td className='!min-w-[300px] flex justify-center items-center p-3'>
                <button className='bg-teal-600 px-4 p-3 m-1 rounded'>
                    Edit
                </button>
                <button className='bg-cyan-600 px-4 p-3 m-1 rounded'>
                    Save
                </button>

                <button className='bg-gray-400 flex justify-center items-center px-4 p-3 m-1 rounded'>
                    <IoCheckmarkDoneCircleOutline
                        color='green'
                        className='size-6'
                    />{" "}
                    Completed
                </button>

                <button className='bg-green-600 px-4 p-3 m-1 rounded'>
                    Mark Completed
                </button>

                <button className='bg-orange-600 px-4 p-3 m-1 rounded'>
                    Delete
                </button>
            </td>
        </tr>
    );
}

