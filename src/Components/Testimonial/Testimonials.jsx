
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
const testimonials = [
  { name: 'Marvin McKinney', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'Bessie Cooper', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'Eleanor Pena', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'John Doe', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'Jane Doe', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'Jim Beam', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'Mary Jane', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'Robert Paul', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' },
  { name: 'Laura Palmer', position: 'CEO, Company', image: 'https://i.ibb.co/SVnyxpL/slide2.jpg', text: 'Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim.Lorem ipsum dolor sit amet consectetuer. Neque erat vitae euismod neque dignissim' }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


return (
    <div className="testimonial-slider">
      <div>
        <h2 className="text-center font-bold text-3xl mb-8">Testimonials</h2>
        <p className="text-gray-400 text-sm flex justify-center text-center mb-8">
          Lorem ipsum dolor sit amet consectetur. Aliquet etiam venenatis enim sed <br />
          aliquet sapien. Justo ut massa volutpat vestibulum.
        </p>
        <Slider {...settings} className="testimonial-slider__container p-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial bg-white testimonial__item " >
              <div className="testimonial-content p-5 bg-gray-200 rounded-lg m-3 flex gap-5  ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image h-16 w-28 rounded-full"
                />
               <div> <h3 className='font-bold text-lg'>{testimonial.name}</h3>
                <p className='text-gray-600 font-sm'>{testimonial.position}</p>
                <p className='text-sm'>{testimonial.text}</p></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

};

export default TestimonialSlider;
