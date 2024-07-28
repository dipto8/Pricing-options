import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => setPhones(data.data.data));
      setLoading (false)
      
  }, []);
  return (
    <div>
      {loading && (
        <div className="">
<Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        </div>
        
      )}

      <hi className="text-5xl">Phones: {phones.length}</hi>
    </div>
  );
};

export default Phones;
