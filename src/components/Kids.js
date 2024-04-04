import React from "react";
import Image from "next/image";
const kids = () => {
  return (
    <div>
      <hr className="border border-zinc-800 h-2 bg-zinc-800 w-full relative" />

      <div className="flex justify-center justify-items-center items-center my-16 mx-14">
        <div>
          <Image src="/kids.png" alt="kids" width={600} height={600}></Image>
        </div>
        <div>
          <h1 className="text-white text-5xl  font-black">
            Create profiles for kids
          </h1>
          <p className="text-white text-2xl font-normal mt-4">
            Send children on adventures with their favourite <br></br>{" "}
            characters in a space made just for them—free with <br></br> your
            membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default kids;
