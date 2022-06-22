import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import './carousel.css';

export default function Carousel(props) {
  const [emblaCarouselRef, emblaApi] = useEmblaCarousel({ loop: true })

  /*
  Here is documentation on embla carousel api.
  https://www.embla-carousel.com/get-started/react/
  */
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
      console.log("emblaApi:", emblaApi)
    }
  }, [emblaApi])
  return (
    <div className="embla" ref={emblaCarouselRef}>
      <div className="embla__container">
        {React.Children.map(props.children, (child, childIdx) => (
          <div className="embla__slide" key={childIdx}>{React.cloneElement(child)}</div>
        ))}
      </div>
    </div>
  );
}
