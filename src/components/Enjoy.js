import React from "react";
import Image from "next/image";
const Enjoy = () => {
  return (
    <div className=" z-40 bg-netflix h-auto ">
      <hr className="border border-zinc-800 h-2 bg-zinc-800 w-full relative" />

      <div className="flex  justify-evenly text-white items-center my-16 mx-28">
        <div>
          <h1 className="text-white text-5xl  font-black ">Enjoy on your TV</h1>
          <p className="text-white text-2xl font-normal mt-4">
            Watch on smart TVs, PlayStation, Xbox, Chromecast,
          </p>
          <p className="text-white text-2xl font-normal ">
            Apple TV, Blu-ray players and more.
          </p>
        </div>
     
          <div className="z-40">
            <Image
              src="/tv.png"
              className="h-full "
              height={900}
              width={660}
              alt="tv"
            ></Image>
          </div>
     
        <div className="absolute top-[875px] right-[216px] z-20">
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
           playsInline
            muted
            loop
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
