/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Heading = ({title}) => {
    const {darkMode,setDarkMode} = useContext(AuthContext);
    return (
        <div >
            <h1 className={`${darkMode?'text-lg  md:text-3xl  text-center w-fit md:px-4 rounded-md pb-2  shadow-md ':
        'text-xl  md:text-3xl  text-center w-fit px-2 md:px-4 shadow-md  rounded-md pb-2 '} `}>{title}</h1>
        </div>
    );
};


export default Heading;