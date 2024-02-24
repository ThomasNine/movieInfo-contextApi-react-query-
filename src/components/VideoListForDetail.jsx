import React from "react";
import useEmblaCarousel from "embla-carousel-react";
const VideoListForDetail = ({ trailerData }) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });
  return (
    <div className="">
      <div className="embla overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-3 mb-3">
            {trailerData.results.map((i) => (
              <div key={i.id} className=" embla__slide">
                <h4 className=" mb-2 dark:text-gray-400">{i.type}</h4>
                <iframe
                  src={`https://www.youtube.com/embed/${i.key}`}
                  allowFullScreen
                  title="TMDb Video"
                  width="320"
                  height="180"
                  className=" rounded-lg"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoListForDetail;
