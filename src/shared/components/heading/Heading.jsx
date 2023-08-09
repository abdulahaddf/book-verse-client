/* eslint-disable react/prop-types */


const Heading = ({title}) => {
    return (
        <div>
            <h1 className="text-3xl border-b-4 border-l-2 text-center w-1/6 shadow-lg mx-auto rounded-md pb-1 border-red">{title}</h1>
        </div>
    );
};

export default Heading;