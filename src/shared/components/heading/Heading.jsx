/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Heading = ({title}) => {
    const {darkMode,setDarkMode} = useContext(AuthContext);
    return (
        <div>
            <h1 className={`${darkMode?'text-2xl  md:text-3xl  text-center w-fit px-4 border-b-[1px]  border-white rounded-md pb-2 ':
        'text-2xl  md:text-3xl  text-center w-fit px-4 shadow-md  rounded-md pb-2 '} `}>{title}</h1>
        </div>
    );
};


export default Heading;