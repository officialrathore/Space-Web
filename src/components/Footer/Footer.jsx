import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="bg-gray-800 text-white px-5 relative z-50">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 py-5 gap-4">
          <div className="py-8 px-4 flex flex-col justify-between min-h-[200px]">
            <div>
              <h1 className="text-xl sm:text=3xl font-bold sm:text-left text-justify mb-3">
                Be Ready To Grow
              </h1>
              <p>
                Get Exclusive <span className="font-bold">Update</span> straight
                to your inbox.
              </p>
            </div>
            <div className="flex items-center h-10">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                placeholder="Email"
              /> &nbsp;
              <button className="primary-button">OK</button>
            </div>
          </div>
          <div className="py-8 px-4 flex flex-col justify-between min-h-[200px]">
            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
            <ul className="flex flex-col gap-3">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
          <div className="py-8 px-4 flex flex-col justify-between min-h-[200px]">
            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
            <ul className="flex flex-col gap-3">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
          <div className="py-8 px-4 flex flex-col justify-between min-h-[200px]">
            <h1 className="text-xl font-bold mb-3">Contact Us</h1>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <LocationOnIcon />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <EmailIcon />
                <p>bharatkrathore8952@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <CallIcon />
                <p>+91 8952061398</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 py-6 border-gray-400">
              <span className="text-sm text-gray-400">
                copyright &copy; 2021 All Rights Reserved
              </span>
              <div className="flex gap-4 sm:mt-0">
                <a href="#" className="text-4xl"> <InstagramIcon /></a>
                <a href="#" className="text-4xl"> <FacebookIcon /></a>
                <a href="#" className="text-4xl"> <LinkedInIcon /></a>
              </div>
              <span className="text-sm text-gray-400">
                <ul className="flex gap-3">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;