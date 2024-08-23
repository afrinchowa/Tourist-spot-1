

import 'react-awesome-slider/dist/styles.css';
import "./Tastimonials.css"; // Create this CSS file for styling

const testimonials = [
  {
    name: "Marvin McKinney",
    title: "CEO, Company",
    text: "Lorem ipsum dolor sit amet consectetur. Neque erat vitae euismod neque dignissim. Sit molestie tellus tincidunt pretium elementum.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Bessie Cooper",
    title: "CEO, Company",
    text: "Lorem ipsum dolor sit amet consectetur. Neque erat vitae euismod neque dignissim. Sit molestie tellus tincidunt pretium elementum.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Eleanor Pena",
    title: "CEO, Company",
    text: "Lorem ipsum dolor sit amet consectetur. Neque erat vitae euismod neque dignissim. Sit molestie tellus tincidunt pretium elementum.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
];

const Tastimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Aliquet etiam venenatis enim sed
        aliquet sapien. Justo ut massa volutpat vestibulum.
      </p>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <p className="title">{testimonial.title}</p>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Tastimonials;