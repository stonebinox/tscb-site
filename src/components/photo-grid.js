import React from "react";
import { Photo, PhotosContainer } from "./common.styles";

export const PhotoGrid = ({ photos = [] }) => (
  <PhotosContainer>
    {photos?.map((photo, index) => (
      <Photo
        key={index}
        style={{
          background: `url(${photo.url}) center`,
          backgroundSize: "cover",
        }}
      />
    ))}
  </PhotosContainer>
);
