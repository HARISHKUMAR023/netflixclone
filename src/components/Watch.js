import React from "react";
import Image from "next/image";
const Watch = () => {
  return (
    <div>
      <hr className="border border-zinc-800 h-2 bg-zinc-800 w-full relative" />
      <div className="flex justify-center justify-items-center items-center my-16 mx-14">
        <div className="">
          <h1 className="text-white text-5xl  font-black">Watch everywhere</h1>
          <p className="text-white text-2xl font-normal mt-4">
            Stream unlimited movies and TV shows on your <br></br> phone,
            tablet, laptop, and TV.
          </p>
        </div>
        <div className="z-40">
          <Image
            src="/device-pile-in.png"
            alt="device"
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="absolute top-[2140px] right-[350px] z-20 ">
          <video className="" width={310} height={580}
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
           playsInline
            muted
            loop
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Watch;
