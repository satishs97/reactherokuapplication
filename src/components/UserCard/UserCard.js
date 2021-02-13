import React from 'react'
import { motion } from "framer-motion"

const UserCard = ({ name, Id, timeZone, activeClicked }) => {
    return (
        <motion.button
            onClick={activeClicked}
            whileHover={{ scale: 1.05 }} style={{ 'border': 'none', 'outline': 'none' }}
            className="bg-red-500 overflow-hidden shadow-sm hover:shadow-xl rounded-rd m-2 w-auto focus:outline-none outline-none"
            key={Id}>
            <div className="m-4">
                <span className="text-gray-800 text-xl sm:py-2 font-bold py-4">Real Name : {name}</span>
                <div className="flex justify-between text-gray-700 py-2">
                    <div className="font-semibold">ID:</div>
                    <div className=""> {Id}</div>
                </div>
                <div className="flex justify-between text-gray-700 py-2">
                    <div className="font-semibold">TZ:</div>
                    <div className="">{timeZone}</div>
                </div>
                <div className="flex justify-end my-2 pt-4">
                    <a href="#" className="text-lg font-medium text-indigo-500 hover:bg-gray-300 hover:shadow-sm px-2 rounded-full" onClick={activeClicked}>Active Periods</a>
                </div>
            </div>
        </motion.button>
    );
}

export default UserCard