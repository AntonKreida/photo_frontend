import { FileOptions } from "buffer";
import { BufferSource } from "stream/web";


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
