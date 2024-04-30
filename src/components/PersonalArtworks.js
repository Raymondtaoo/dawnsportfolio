import React, { useState, useEffect } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const PersonalArtworks = () => {
  const PersonalImages = [
    // add images here
    {
      src: "/images/personal/image1.webp",
      alt: "Boy with fox",
    },
    {
      src: "/images/personal/image2.webp",
      alt: "Pirate dog",
    },
    {
      src: "/images/personal/image3.jpeg",
      alt: "Wizard dog",
    },
    {
      src: "/images/personal/image4.webp",
      alt: "Cleaned layout",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [visible, setVisible] = useState(6);
  const [imageStyles, setImageStyles] = useState({});

  useEffect(() => {
    const loadImagesAndDetermineStyles = async () => {
      let styles = {};
      for (const [index, image] of PersonalImages.entries()) {
        const img = new Image();
        img.onload = () => {
          const aspectRatio = img.width / img.height;
          // Assign style based on aspect ratio
          styles[index] = aspectRatio >= 1.4 ? "max-w-6xl" : "max-w-xl";
          setImageStyles({ ...styles });
        };
        img.src = image.src;
      }
    };

    loadImagesAndDetermineStyles();

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      loadMoreImages();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMoreImages = () => {
    setVisible((prevVisible) => prevVisible + 6);
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 video-responsive">
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/AlVxm8rBzg0?si=hLRuqIbwM-7486I2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {PersonalImages.slice(0, visible).map((image, index) => (
          <div
            key={index}
            className={`flex-auto p-2 ${imageStyles[index]} ${
              imageStyles[index] === "max-w-6xl" ? "w-full" : "w-1/2"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
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
