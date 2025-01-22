import React from "react";
import SatelliteImg from "../../assets/images/satelite1.jpg";
function Banner() {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img data-aos="zoom-in" src={SatelliteImg} alt="" className="w-full sm:w-[80%] max-auto mx-h-[350px] object-cover" />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2  border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl"
            >
              Rapidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              error minus consequuntur exercitationem eligendi laudantium
              aliquid odit harum dicta explicabo adipisci, tenetur maxime.
              Incidunt excepturi ipsum deleniti nostrum ut repudiandae magni
              ipsa corrupti itaque a numquam eveniet perferendis dolorem
              laboriosam inventore, totam necessitatibus voluptatibus et
              blanditiis neque? Odio animi recusandae eum natus necessitatibus
              optio ratione tempora praesentium qui blanditiis quidem accusamus,
              eligendi nulla consequatur voluptatum numquam cumque suscipit quae
              dolores omnis laudantium cum. Ratione necessitatibus obcaecati vel
              voluptatem excepturi! Consequatur incidunt dolore laborum
              repellendus laboriosam, dolorum corrupti quia iusto voluptatibus
              magnam suscipit pariatur nam nostrum ullam sed odio eaque ab?
            </p>
            <button data-aos="fade-up" data-aos-delay="700" className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
