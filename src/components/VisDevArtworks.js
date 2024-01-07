import React, { useRef, useState, useEffect } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const VisDevArtworks = () => {
  const visDevImages = [
    // add images here
    {
      src: "/images/visdev/image4.png",
      alt: "",
    },
    {
      src: "/images/visdev/image5.png",
      alt: "",
    },
    {
      src: "/images/visdev/image6.png",
      alt: "",
    },
    {
      src: "/images/visdev/image7.png",
      alt: "",
    },
    {
      src: "/images/visdev/image8.png",
      alt: "",
    },
    {
      src: "/images/visdev/image9.png",
      alt: "",
    },
    {
      src: "/images/visdev/image10.png",
      alt: "",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        });
      },
      { rootMargin: "0px 0px 50px 0px" }
    );

    const currentImgRefs = imgRefs.current;
    currentImgRefs.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      currentImgRefs.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {visDevImages.map((image, index) => (
          <div
            key={index}
            className="flex-auto p-2 w-full or w-1/2 based on your styling"
          >
            <img
              ref={(el) => (imgRefs.current[index] = el)}
              data-src={image.src}
              alt={image.alt}
              className="w-full h-auto transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={visDevImages[photoIndex].src}
          nextSrc={visDevImages[(photoIndex + 1) % visDevImages.length].src}
          prevSrc={
            visDevImages[
              (photoIndex + visDevImages.length - 1) % visDevImages.length
            ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + visDevImages.length - 1) % visDevImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % visDevImages.length)
          }
          imageTitle={visDevImages[photoIndex].alt}
          reactModalStyle={{ overlay: { zIndex: 2000 } }}
        />
      )}
    </>
  );
};

export default VisDevArtworks;
