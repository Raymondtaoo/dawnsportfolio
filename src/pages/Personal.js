import React from "react";
import PersonalArtworks from "../components/PersonalArtworks";

const Personal = () => {
  return (
    <div className="container mx-auto p-4 pb-20">
      <h1 className="text-4xl font-bold text-center text-black my-8">
        Personal
      </h1>
      <PersonalArtworks />
    </div>
  );
};

export default Personal;
