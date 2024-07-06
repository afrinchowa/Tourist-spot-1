const AddItem = () => {
  const handleSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const img = form.img.value;
    const travelTime = form.seasonality.value;
    const newSpot ={spotName,countryName,location,shortDescription,averageCost,seasonality,img,travelTime}
    console.log(newSpot);


    // send data to the server
    fetch('http://localhost:5000/spot',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(newSpot)
    } )
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  };
  return (
    <div className="bg-[#C3D898] text-[#70161E] p-24">
      <h2 className="text-3xl font-extrabold">Add spot</h2>
      <form onSubmit={handleSpot}>
        <div>
          <div className="flex">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Tourists_spot_name</span>
              </div>
              <input
                type="text"
                placeholder="Tourists_spot_name"
                name="spotName"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2  ">
              <div className="label">
                <span className="label-text">Country_Name</span>
              </div>
              <input
                type="text"
                name="countryName"
                placeholder="Country_Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex">
            <label className="form-control w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Short description</span>
              </div>
              <input
                type="text"
                name="shortDescription"
                placeholder="Short description"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Average_cost</span>
              </div>
              <input
                type="text"
                placeholder="Average_cost
"
                name="averageCost"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Seasonality</span>
              </div>
              <input
                type="text"
                placeholder="Seasonality"
                name="seasonality"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex mb-6">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                placeholder="Image URL
"
                name="img"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Travel_time</span>
              </div>
              <input
                type="text"
                placeholder="Travel_time"
                name="travelTime"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <input type="submit" value="add Spot" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
