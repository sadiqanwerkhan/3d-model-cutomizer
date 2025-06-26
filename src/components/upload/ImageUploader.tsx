import { useState } from "react";

type Props = {
  onUpload: (image1: string | null, image2: string | null) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    imageNumber: 1 | 2
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (imageNumber === 1) {
        setImage1(result);
        onUpload(result, image2);
      } else {
        setImage2(result);
        onUpload(image1, result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Upload Image 1</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleUpload(e, 1)}
        />
        {image1 && (
          <img
            src={image1}
            alt="Image 1"
            className="mt-2 w-32 h-20 object-cover border rounded"
          />
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Upload Image 2</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleUpload(e, 2)}
        />
        {image2 && (
          <img
            src={image2}
            alt="Image 2"
            className="mt-2 w-32 h-20 object-cover border rounded"
          />
        )}
      </div>
    </div>
  );
}
