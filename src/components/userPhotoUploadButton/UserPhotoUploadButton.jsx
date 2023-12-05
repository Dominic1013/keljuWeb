"use client";

import { CldUploadWidget } from "next-cloudinary";

import React from "react";

const UploadButton = ({ setUserPhoto }) => {
  return (
    <CldUploadWidget
      //   signatureEndpoint="/api/sign-cloudinary-params"
      uploadPreset="mda3r8oq"
      options={{ maxFiles: 1 }}
      onSuccess={(result, { widget }) => {
        setUserPhoto(result?.info.url);

        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick(e) {
          e.preventDefault();
          setUserPhoto(undefined);
          open();
        }
        return <button onClick={handleOnClick}>上傳作者頭像</button>;
      }}
    </CldUploadWidget>
  );
};

export default UploadButton;
