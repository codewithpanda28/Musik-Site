export default function VideoHeading() {
  return (
  <div className=" bg-[#5B43F5] relative h-screen bg-black text-white sm:w-full md:w-full lg:w-auto">
  <video
    src="/video.mp4"
    className="opacity-100 z-10 absolute w-full sm:w-full md:w-full lg:w-[87%] lg:left-[13%]"
    autoPlay
    loop
    muted
    onClick="if(this.paused) this.play(); else this.pause();"
>
    Your browser does not support the video tag.
</video>

<div className="absolute top-0 right-0 p-4 flex items-center space-x-4 z-10"></div>
<div className="absolute inset-10 flex justify-center z-10">
  <h1 className="video-heading text-3xl font-bold text-center sm:text-2xl sm:mt-4 md:mt-20 md:justify-center sm:text-center md:text-5xl lg:text-8xl lg:font-bold lg:w-full lg:justify-center lg:items-center lg:flex lg:mt-4">
    India first global <br /> music conference and <br /> showcase
    festival
  </h1>
</div>
</div>
  );
}
