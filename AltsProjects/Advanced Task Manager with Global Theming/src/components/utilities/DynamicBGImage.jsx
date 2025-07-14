import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";

export default function DynamicBGImage({ onHandleUploadedImage }) {
  const [uploadedImage, setUploadedImage] = useState(null);

  const refInput = useRef(null);

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the uploaded file
      const objectUrl = URL.createObjectURL(file);
      setUploadedImage(objectUrl);
      // Clean up the object URL when the component unmounts or image changes
      // This is crucial for performance and memory management
      return () => URL.revokeObjectURL(objectUrl);
    }
  }
  function handleCustomButtonClick() {
    refInput.current.click();
  }

  function handleRemoveImage() {
    setUploadedImage(null);
    onHandleUploadedImage(null);
  }

  useEffect(() => {
    if (uploadedImage) onHandleUploadedImage(uploadedImage);
  }, [uploadedImage]);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageUpload}
        ref={refInput}
        style={{ display: "none" }}
      />
      <div className="flex flex-col gap-y-1">
        <Button onClick={handleCustomButtonClick} className="w-full flex-1/2">
          {uploadedImage ? "Change" : "Upload"} image
        </Button>
        {uploadedImage && <Button onClick={handleRemoveImage}>Remove image</Button>}
      </div>
    </div>
  );
}
