import { IImgFile } from "../interfaces";


export class EntityFileImageResponse {
  constructor(public file: IImgFile) {}
  async formattedFileForRequest(this: EntityFileImageResponse, folder?: string) {
    return {
      buffer: await this.file.arrayBuffer().then((buffer) => Buffer.from(buffer)),
      name: this.file.name,
      extension: this.file.type.split("/")[1],
      mimeType: this.file.type,
      folder: folder,
      width: this.file.width,
      height: this.file.height
    };
  }
}
