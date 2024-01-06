import React, { useState, useEffect } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const VisDevArtworks = () => {
  const visDevImages = [
    // add images here
    {
      src: "dawnsportfolio/images/visdev/image4.png",
      alt: "",
    },
    {
      src: "dawnsportfolio/images/visdev/image5.png",
      alt: "",
    },
    {
      src: "dawnsportfolio/images/visdev/image6.png",
      alt: "",
    },
    {
      src: "dawnsportfolio/images/visdev/image7.png",
      alt: "",
    },
    {
      src: "dawnsportfolio/images/visdev/image8.png",
      alt: "",
    },
    {
      src: "dawnsportfolio/images/visdev/image9.png",
      alt: "",
    },
    {
      src: "dawnsportfolio/images/visdev/image10.png",
      alt: "",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [visible, setVisible] = useState(6);
  const [imageStyles, setImageStyles] = useState({});

  useEffect(() => {
    const loadImagesAndDetermineStyles = async () => {
      let styles = {};
      for (const [index, image] of visDevImages.entries()) {
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
      <div className="flex flex-wrap justify-center gap-4">
        {visDevImages.slice(0, visible).map((image, index) => (
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
