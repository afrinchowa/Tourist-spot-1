import { useLoaderData } from "react-router-dom"



function App() {
 
const spots = useLoaderData();

  return (
    <>
      <h1 className="text-6xl text-red-600">Hottest Spot:{spots.length}</h1>
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
    </>
  )
}

export default App
