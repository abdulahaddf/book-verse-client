/* eslint-disable react/prop-types */


const Heading = ({title}) => {
    return (
        <div>
            <h1 className="text-2xl  md:text-3xl border-b-4 border-l-[1px] text-center w-4/5 md:w-1/6 shadow-lg  rounded-md pb-1 border-red">{title}</h1>
        </div>
    );
};

export default Heading;