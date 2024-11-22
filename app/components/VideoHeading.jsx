export default function VideoHeading() {
  return (
    <div className="relative h-screen bg-black text-white ">
      <video
        src="/video.mp4"
        className="opacity-100 z-10 absolute w-[87%] left-[13%]"
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    
    <div className="absolute top-0 right-0 p-4 flex items-center space-x-4 z-10">
  
</div>
<div className="absolute inset-0 flex items-center justify-center z-20">
  <h1 className="video-heading text-4xl font-bold">
    India first global <br /> music conference and <br /> showcase festival
  </h1>
</div>
    </div>
  );
}