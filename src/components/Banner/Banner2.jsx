import React from "react";
import SatelliteImg from "../../assets/images/satelite2.jpg";
function Banner2() {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2  border-l-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              {" "}
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl"
            >
              Rapidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              expedita dolorum molestiae quia atque voluptates accusamus
              doloremque, dolorem officia sed? Dolorem porro pariatur asperiores
              maxime soluta unde quos? Cum, velit natus! Molestiae vel placeat
              officia neque exercitationem eum reiciendis, deleniti tenetur
              atque nostrum libero minima cum ipsa nam eos quidem dicta quam!
              Omnis fugit necessitatibus quo et facere repellendus eligendi ea
              maxime obcaecati nobis veritatis consectetur, voluptatem dolore
              illo! Vitae, corporis nostrum. Delectus ratione quos officia,
              voluptatum, expedita dolorem totam velit voluptas incidunt
              repellat quae! Sit quisquam nobis unde ut veniam illo qui a
              suscipit rem accusantium nisi, facere enim.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
          <div>
            <img
              data-aos="zoom-in"
              src={SatelliteImg}
              alt=""
              className="w-full sm:ml-[-6rem] lg:ml-36  sm:w-[80%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
