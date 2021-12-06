import bcrypt from "bcrypt";
import client from "../../client";
import { createWriteStream } from "fs";

export default {
  Mutation: {
    createAccount: async (
      _,
      {
        userId,
        userType,
        userName,
        password,
        sex,
        phone,
        residentNumber,
        // idCard,
        smoke,
        drink,
        mealCare,
        urineCare,
        suctionCare,
        moveCare,
        bedCare,
        address,
        addressDetail,
        // bankInfo,
      }
    ) => {
      try {
        var writeIP = ""; // IP 주소
        require("dns").lookup(
          require("os").hostname(),
          function (err, add, fam) {
            writeIP = add;
          }
        );
        const existingUserId = await client.user.findUnique({
          where: {
            userId,
          },
        });
        if (existingUserId) {
          throw new Error("동일한 회원아이디가 존재합니다.");
        }
        const existingUserPhone = await client.user.findUnique({
          where: {
            phone,
          },
        });
        if (existingUserPhone) {
          throw new Error("동일한 회원연락처가 존재합니다.");
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        if (userType === "환자") {
          await client.user.create({
            data: {
              userId,
              userType,
              userName,
              password: uglyPassword,
              sex,
              phone,
              writeIP,
            },
          });
        } else {
          // let idCardUrl = null;
          // if (idCard) {
          //   console.log(idCard);
          //   const { filename, createReadStream } = await idCard.file;
          //   const newFilename = `${userId}-${Date.now()}-${filename}`;
          //   const readStream = createReadStream();
          //   const writeStream = createWriteStream(
          //     process.cwd() + "/files/" + newFilename
          //   );
          //   readStream.pipe(writeStream);
          //   idCardUrl = `http://localhost:4000/static/${newFilename}`;
          // }

          // let bankInfoUrl = null;
          // if (bankInfo) {
          //   console.log(bankInfo);
          //   const { filename, createReadStream } = await bankInfo.file;
          //   const newFilename = `${userId}-${Date.now()}-${filename}`;
          //   const readStream = createReadStream();
          //   const writeStream = createWriteStream(
          //     process.cwd() + "/files/" + newFilename
          //   );
          //   readStream.pipe(writeStream);
          //   bankInfoUrl = `http://localhost:4000/static/${newFilename}`;
          // }

          await client.user.create({
            data: {
              userId,
              userType,
              userName,
              password: uglyPassword,
              sex,
              phone,
              writeIP,
              CaregiverInfo: {
                create: [
                  {
                    residentNumber,
                    idCard: "idCard",
                    smoke,
                    drink,
                    mealCare,
                    urineCare,
                    suctionCare,
                    moveCare,
                    bedCare,
                    address,
                    addressDetail,
                    bankInfo: "bankInfo",
                    writeIP,
                  },
                ],
              },
            },
          });
        }

        return {
          ok: true,
        };
      } catch (error) {
        console.log(error);
        return {
          ok: false,
          error,
        };
      }
    },
  },
};
