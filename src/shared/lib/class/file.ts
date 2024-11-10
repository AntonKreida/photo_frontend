import { FileOptions } from "buffer";

type BlobPart = BufferSource | Blob | string;

export class FileWithPreview extends File {
  constructor(
    public preview: string,
    public name: string,
    public fileBits: BlobPart[],
    public options?: FileOptions
  ) {
    super(fileBits, name, options);
    this.preview = preview;
  }
}
