

const SportCard = ({spot}) => {
const {spotName,countryName,location,shortDescription,averageCost,seasonality,img,travelTime} =spot;

    return (
      <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Spot-Name: {spotName}</h2>
        <p>Country Name: {countryName}</p>
        <div className="card-actions justify-end">
         <div className="">

<button></button>
<button></button>
<button></button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SportCard;