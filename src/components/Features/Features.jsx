import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types'
const Features = ({feature}) => {
    return (
        <div className="">
           
          
            <p className='text-lg font-semibold flex items-center   '>
            <FaCheckCircle className="mr-2 text-green-700"/>
            {feature}

            </p>
            
            
            
        </div>
    );
};
Features.propTypes ={
    feature: PropTypes.string
}

export default Features;