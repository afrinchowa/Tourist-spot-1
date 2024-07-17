import Swal from "sweetalert2";


const SportCard = ({spot}) => {
const {_id,spotName,countryName,location,shortDescription,averageCost,seasonality,img,travelTime} =spot;


const handleDelete = _id=>{
  console.log(_id);

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   
   
    fetch(`http://localhost:5000/spot/${_id}`,{
      method:'DELETE'
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.deleteCount > 0){
 Swal.fire({
      title: "Deleted!",
      text: "Your Spot has been deleted.",
      icon: "success"
    });
      }
      }
    )
  }
});
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