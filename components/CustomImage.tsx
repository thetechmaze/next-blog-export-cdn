import ExportedImage from "next-image-export-optimizer";

interface CustomImageProps {
  srcStr: string;
  altStr: string;
  width?: number;
  height?: number;
}

function CustomImage({ srcStr, altStr, width, height }: CustomImageProps) {
  return width ? (
    <ExportedImage
      src={srcStr}
      alt={altStr}
      width={width}
      height={height}
      priority
    />
  ) : (
    <ExportedImage src={srcStr} alt={altStr} sizes="100vh" fill />
  );
}

export default CustomImage;
