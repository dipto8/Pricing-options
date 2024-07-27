import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { id, name, price, features } = option;
  return (
    <div className="border-2 p-6 bg-blue-300 text-black rounded-md flex flex-col ">
      <h2>
        <span className="text-6xl ">{price}</span>
        <span>/mon</span>
      </h2>
      <h4 className="text-3xl text-black font-bold my-6 text-start">{name}</h4>

      <div className=" flex-grow ">
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>

      <button className="bg-green-600 w-full py-2 mt-2 rounded-md  hover:bg-blue-500 ">Join Now</button>
    </div>
  );
};

export default PriceOption;
PriceOption.propTypes = {
  option: PropTypes.object,
};
