
import Image from "next/image"
const Show = () => {
  return (
    <div className="h-auto ">
         <hr className="border border-zinc-800 h-2 bg-zinc-800 w-full relative" />
         <div className="flex justify-center my-16 mx-16 items-center">
            <div>
                <Image className="h-full " src="/mobile.jpg"alt="moblile" width={600} height={600}></Image>
<div className="flex justify-center">
<div className="flex justify-items-center items-center border border-1 border-border-primary w-2/4  rounded-md p-2">
                  <Image src='/boxshot.png'alt="boxshot.png" width={60} height={60}></Image>
                  <div className="ml-4 ">
                    
                    <p className="text-white">Stranger Things</p>
                    <p className="text-blue-500">Downloading...</p>



                  </div>
                  <Image src='/download-icon.gif' alt="download " className="ml-8" height={50} width={50}></Image>
                </div>
</div>
               
            </div>
            <div>
                <h1 className="text-white text-5xl  font-black">Download your shows to  <br></br>watch offline</h1>
                <p className="text-white text-2xl font-normal mt-4">Save your favourites easily and always have <br></br> something to watch.</p>
            </div>
         </div>
    </div>
  )
}

export default Show