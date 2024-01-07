import React, { useRef, useState, useEffect } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const PersonalArtworks = () => {
  const PersonalImages = [
    // add images here
    {
      src: "/images/personal/image1.png",
      alt: "",
    },
    {
      src: "/images/personal/image2.png",
      alt: "",
    },
    {
      src: "/images/personal/image3.jpeg",
      alt: "",
    },
    {
      src: "/images/personal/image4.png",
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
        {PersonalImages.map((image, index) => (
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
          mainSrc={PersonalImages[photoIndex].src}
          nextSrc={PersonalImages[(photoIndex + 1) % PersonalImages.length].src}
          prevSrc={
            PersonalImages[
              (photoIndex + PersonalImages.length - 1) % PersonalImages.length
            ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + PersonalImages.length - 1) % PersonalImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % PersonalImages.length)
          }
          imageTitle={PersonalImages[photoIndex].alt}
          reactModalStyle={{ overlay: { zIndex: 2000 } }}
        />
      )}
    </>
  );
};

export default PersonalArtworks;
