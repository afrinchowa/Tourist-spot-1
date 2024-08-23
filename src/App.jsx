import { useLoaderData } from "react-router-dom";
import SportCard from "./Components/SportCard";
// import Tastimonials from "./Components/Tastimonials/Tastimonials";
import { useState } from "react";
import Testimonials from "./Components/Testimonial/Testimonials";

function App() {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);

  return (
    <>
      <div className="m-20 ">
        <h1 className="text-6xl text-center text-red-600">
          Hottest Spot:{spots.length}
        </h1>
        <div className="carousel carousel-vertical rounded-box h-96">
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
          </div>
        </div>

        <div className=" grid md:grid-cols-2 gap-4">
          {spots.map((spot) => (
            <SportCard key={spot._id}
            spot={spot}
            spots={spots}
            setSpots={setSpots}
            ></SportCard>
          ))}
        </div>
    <Testimonials></Testimonials>
      </div>
    </>
  );
}

export default App;
