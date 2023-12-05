"use client";

import { CldUploadWidget } from "next-cloudinary";

import React from "react";

const UploadButton = ({ setCoverPhoto }) => {
  return (
    <CldUploadWidget
      //   signatureEndpoint="/api/sign-cloudinary-params"
      uploadPreset="mda3r8oq"
      options={{ maxFiles: 1 }}
      onSuccess={(result, { widget }) => {
        setCoverPhoto(result?.info.url);

        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick(e) {
          e.preventDefault();
          setCoverPhoto(undefined);
          open();
        }
        return <button onClick={handleOnClick}>上傳圖片</button>;
      }}
    </CldUploadWidget>
  );
};

export default UploadButton;
