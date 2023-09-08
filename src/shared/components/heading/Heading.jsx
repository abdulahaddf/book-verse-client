/* eslint-disable react/prop-types */


const Heading = ({title}) => {
    return (
        <div>
            <h1 className="text-2xl  md:text-3xl  text-center w-fit px-4 shadow-md  rounded-md pb-2 ">{title}</h1>
        </div>
    );
};

export default Heading;