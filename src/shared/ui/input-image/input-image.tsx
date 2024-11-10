import { FC } from "react";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";


interface IInputImageProps {
    getRootProps: <T extends DropzoneRootProps>(props?: T) => T
    getInputProps: <T extends DropzoneInputProps>(props?: T) => T
}

export const InputImage: FC<IInputImageProps> = ({
  getRootProps,
  getInputProps
}) => (
  <div { ...getRootProps() }>
    <input { ...getInputProps() } />
    тут будет картинка
  </div>
);
