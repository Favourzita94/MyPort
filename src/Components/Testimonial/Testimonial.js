import React from 'react'
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";


const Testimonial = () => {

    const data = [
      {
        name: "Manas Baerjee",
        position: "Operations Director",
        des: "She is very committed and dedicated to her job.",
        img: "https://res.cloudinary.com/djxykfplf/image/upload/v1687186122/Manas_photo_knhgwl.jpg",
      },
      {
        name: "Torrie",
        position: "Front-End Dev.",
        des: "Favour is always patient and ready to give you a great work.",
        img: "https://ca.slack-edge.com/T05FFAA91JP-U05QZMA49ST-a94a926a9deb-72",
      },
      {
        name: "Diana",
        position: "Operations Officer",
        des: "She sure knows how to make a client very happy. I highly recommend.",
        img: "https://res.cloudinary.com/djxykfplf/image/upload/v1695731779/WhatsApp_Image_2023-09-26_at_1.33.37_PM_zawzyx.jpg",
      },
      {
        name: "Ammie",
        position: "Software Engineer",
        des: "She is a very good Team Player and delivers a great work",
        img: "https://res.cloudinary.com/djxykfplf/image/upload/v1695732185/WhatsApp_Image_2023-09-26_at_1.42.31_PM_oxdr7b.jpg",
      },
    ];


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    


    
  return (
    <div className="container testimonial-section" id="testimonials">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="content-slider-main">
                <div className="content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="testimonial pics"
                    className="center-image"
                  />
                  <p>{item.name}</p>
                  <p>{item.des}</p>

                  <p>{item.position}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial