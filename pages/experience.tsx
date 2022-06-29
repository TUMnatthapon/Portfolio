import Image from "next/image";
const Experience = () => {
  return (
    <>
      <div id="experience">&nbsp;</div>
      <div className="content-page">
        <div className="titile-page">My University Experience</div>
        <div className="titile-page">Certificate</div>
        <Image
          src="https://drive.google.com/uc?export=view&id=1ItS2Ok9DKpDnS4c0DEwPiVT1e8bWRNBX"
          alt="👋"
          width={500}
          height={350}
        />
        <iframe
          src="https://drive.google.com/file/d/1Tdvm2Q8_xVYES0A3XQovflmSe9yVgh_-/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
};

export default Experience;
