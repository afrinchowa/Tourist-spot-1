

const SportCard = ({spot}) => {
const {_id,spotName,countryName,location,shortDescription,averageCost,seasonality,img,travelTime} =spot;


const handleDelete = _id=>{
  console.log(_id);
}
    return (
      <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}/>
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
        <h2 className="card-title">Spot-Name: {spotName}</h2>
        <p>Country Name: {countryName}</p>
        <p>Country Name: {location}</p>
        <p>Country Name: {shortDescription}</p>
        <p>Country Name: {averageCost}</p>
        </div>
        <div className="card-actions justify-end">
         <div className="">

<button className="btn btn-circle">View </button>
<button className="btn btn-circle">Edit </button>
<button onClick={()=>handleDelete(_id)} className="btn btn-circle bg-red-600">X </button>

          </div>
        </div>
      </div>
    </div>
    );
};

export default SportCard;