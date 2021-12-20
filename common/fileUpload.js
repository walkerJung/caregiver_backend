import { createWriteStream } from "fs";
import sharp from "sharp";
import * as mkdirp from "mkdirp";
import * as shortid from "shortid";

require("events").EventEmitter.prototype._maxListeners = 110;
require("events").defaultMaxListeners = 110;

export const fileUpload = async ({ uploadDir, stream, userId, extension }) => {
  // try {
  //   mkdirp.sync(uploadDir);

  //   const shortId = shortid.generate();
  //   const filePath = `${uploadDir}/${shortId}-${userId}.${extension}`;
  //   const fileName = `${shortId}-${userId}.${extension}`;

  //   return new Promise(function (resolve, reject) {
  //     stream
  //       .pipe(createWriteStream(filePath))
  //       .on(
  //         "finish",
  //         async () =>
  //           await sharp(stream._writeStream._path)
  //             .resize({ width: 1200, height: 1200 })
  //             .jpeg({ quality: 100 })
  //             .toFile(filePath)
  //             .catch((err) => console.warn(err))
  //       )
  //       .on("finish", () => resolve({ fileName }))
  //       .on("error", reject);
  //   });
  // } catch (e) {
  //   console.log(e);
  //   return false;
  // }

  try {
    mkdirp.sync(uploadDir);

    const shortId = shortid.generate();
    const filePath = `${uploadDir}/${shortId}-${id}.${extension}`;
    const fileName = `${shortId}-${userId}.${extension}`;

    return new Promise((resolve, reject) =>
      stream
        .pipe(createWriteStream(filePath))
        .on("finish", () => resolve({ fileName }))
        .on("error", reject)
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};
