import Image from "next/image";
import HeartIcon from "./assets/img/heartIcon.svg";
import ShareIcon from "./assets/img/shareIcon.svg";
import PersonIcon from "./assets/img/person.svg";
import LoactionIcon from "./assets/img/location.svg";
import image1 from "./assets/img/1.png";
import image2 from "./assets/img/2.png";
import image3 from "./assets/img/3.png";
import image4 from "./assets/img/4.png";
import Tennis from "./assets/img/Tennis.svg";
import Swimming from "./assets/img/Swimming pool.svg";
import Coffee from "./assets/img/Сoffee machine.svg";
import Room from "./assets/img/Wellness room.svg";

import Basketball from "./assets/img/Basketball.svg";
import Event from "./assets/img/Event space.svg";
import Fitness from "./assets/img/Fitness Center.svg";
import AirConditioner from "./assets/img/Air conditioner.svg";

import Cleaning from "./assets/img/Cleaning services.svg";
import Restaurant from "./assets/img/Restaurant.svg";
import Wardrobe from "./assets/img/Wardrobe.svg";
import Smoking from "./assets/img/Smoking area.svg";
import Checkout from "./components/Checkout";

export default function Home() {
  return (
    <main>
      <section id="hero" className="mt-24">
        <div className="container px-12">
          <div className="flex justify-between">
            <h1 className="text-6xl text-woodsmoke"> 198 Avenue Liberte</h1>
            <div className="space-x-2">
              <button className="border-[1px] rounded-full p-2 border-woodsmoke">
                <Image src={HeartIcon} alt="like" />
              </button>
              <button className="border-[1px] rounded-full p-2 border-woodsmoke">
                <Image src={ShareIcon} alt="share" />
              </button>
            </div>
          </div>
          <div className="flex mt-5 space-x-4">
            <div className="flex">
              <Image src={LoactionIcon} alt="location" className="me-2" />
              <p className="opacity-70">1875 K St NW Washington, DC 20006</p>
            </div>
            <div className="border-l-2 h-6 border-woodsmoke opacity-20"></div>
            <div className="flex">
              <Image src={PersonIcon} alt="guests" className="me-2" />
              <p className="opacity-70">2 Guests</p>
            </div>
          </div>
          <div className="mt-5 w-2/3">
            <div className="flex space-x-4">
              <div className="w-1/4 flex flex-col space-y-4">
                <Image src={image1} alt="image" />
                <Image src={image3} alt="image" />
                <Image src={image4} alt="image" />
              </div>
              <div className="w-3/4 relative">
                <div className="transform w-32 h-32 bg-white absolute z-20 -top-16 -right-16 rotate-45" />
                <Image src={image2} alt="image" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="amenities" className="mt-24 w-2/3 px-12">
        <div className="h-[1px] border-dark border mb-2" />

        <div className="container">
          <div className="">
            <h2 className="font-medium">
              <span className="me-4">02</span>Amenities
            </h2>
            <div className="flex mt-16">
              <div className="flex flex-col w-1/3 space-y-8">
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="tennis" src={Tennis} />
                  </div>
                  <p>Tennis</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Swimming pool" src={Swimming} />
                  </div>
                  <p>Swimming pool</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Wellness room" src={Room} />
                  </div>
                  <p>Wellness room</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Сoffee machine" src={Coffee} />
                  </div>
                  <p>Сoffee machine</p>
                </div>
              </div>
              <div className="flex flex-col w-1/3 space-y-8">
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Fitness Center" src={Fitness} />
                  </div>
                  <p>Fitness Center</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="event space" src={Event} />
                  </div>
                  <p>Event space</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Basketball" src={Basketball} />
                  </div>
                  <p>Basketball</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Air conditioner" src={AirConditioner} />
                  </div>
                  <p>Air conditioner</p>
                </div>
              </div>
              <div className="flex flex-col w-1/3 space-y-8">
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Wardrobe" src={Wardrobe} />
                  </div>
                  <p>Wardrobe</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Smoking area" src={Smoking} />
                  </div>
                  <p>Smoking area</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Restaurant" src={Restaurant} />
                  </div>
                  <p>Restaurant</p>
                </div>
                <div className="inline-flex space-x-5 items-center justify-start">
                  <div className="opacity-50">
                    <Image alt="Cleaning services" src={Cleaning} />
                  </div>
                  <p>Cleaning services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed right-12 z-40 -bottom-8">
        <Checkout />
      </div>
    </main>
  );
}
