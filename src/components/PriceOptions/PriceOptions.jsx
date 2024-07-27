import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

   const PriceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "1 group fitness class per week"
      ],
      "price": "$30 per month"
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "5 group fitness classes per week",
        "1 personal training session per month",
        "Access to swimming pool"
      ],
      "price": "$50 per month"
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "4 personal training sessions per month",
        "Access to swimming pool",
        "Access to sauna and steam room",
        "Free guest passes"
      ],
      "price": "$80 per month"
    },
    {
      "id": 4,
      "name": "Family Membership",
      "features": [
        "Access to gym equipment for family members",
        "Locker room access for family members",
        "Unlimited group fitness classes for family members",
        "8 personal training sessions per month",
        "Access to swimming pool for family members",
        "Access to sauna and steam room for family members",
        "Free guest passes",
        "Childcare services"
      ],
      "price": "$120 per month"
    }
      ]
      
    return (
        <div className="m-6 p-6">
            <h1 className='text-8xl '> Gym membership Price Options</h1>
           <div className="grid md:grid-cols-3 gap-6  m-8 ">
           {
              PriceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)

            }
           </div>
            
        </div>
    );
};

export default PriceOptions;
