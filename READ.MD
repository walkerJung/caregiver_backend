# Apollo_server_example

Apollo_server Backend.

1. npm init -y

   - package.json 을 만들어준다

2. touch READ.MD

   - readme 파일 만들기

3. npm i express apollo-server-express

   - apollo 서버 인스톨

4. touch server.js

   - apollo 서버 인스톨 후 server.js 파일 만들기
   - require("dotenv").config();
     import express from "express";
     import { ApolloServer } from "apollo-server-express";
     import { typeDefs, resolvers } from "./schema.js";

     const PORT = process.env.PORT;
     const server = new ApolloServer({
     typeDefs,
     resolvers,
     });

     const app = express();
     server.applyMiddleware({ app });
     app.listen({ port: PORT }, () => {
     console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
     });

5. npm i nodemon --save-dev

   - 소스 변경 시 자동으로 서버를 재시작해주는 nodemon 설치

6. npm install --save-dev @babel/core, npm install @babel/preset-env --save-dev

   - node 버전과 상관없이 프로젝트를 진행할수 있도록 해주는 babel 설치

7. touch babel.config.json

   - babel.config.json 파일 만들기
   - {
     "presets": ["@babel/preset-env"]
     }

8. npm i @babel/node --save-dev

   - package.json 의 scripts 부분 변경
   - "scripts": {
     "dev": "nodemon --exec babel-node server"
     },

9. npm install prisma --save-dev, npx prisma init

   - npm install prisma --save-dev : client 를 통해 자바스크립트로 데이터베이스와 소통
   - npx prisma init : prisma 폴더, schema.prisma, .env를 만들어준다
   - https://www.prisma.io/docs/concepts/database-connectors/mysql prisma 와 mysql 연결

10. prisma extension 설치하기

    - 다운로드 6만, 버전 2.14 이상

11. migrate 명령어 추가 (package.json)

    - "scripts": {
      "dev": "nodemon --exec babel-node server",
      "migrate": "npx prisma migrate dev --preview-feature"
      },

12. yarn migrate

13. prisma client를 호출하는 client.js 만들기

    - import { PrismaClient } from "@prisma/client";

      const client = new PrismaClient();

      export default client;

14. npm i graphql-tools

15. typeDefs 와 resolvers 를 호출하는 schema.js 만들기

    - import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";

      const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
      const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`);

      export const typeDefs = mergeTypeDefs(loadedTypes);
      export const resolvers = mergeResolvers(loadedResolvers);

16. npm i dotenv

17. graphql, prisma, bcrypt, jwt 등등 설치 (package.json 참고. 지금 서버에는 넣어뒀음)

18. yarn dev (서버 실행해보기)

# liunx setting

1. node, npm, yarn 설치

   - curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh

   - sudo bash nodesource_setup.sh

   - sudo apt-get install nodejs

   - sudo apt-get install build-essential

   - npm install -g yarn

2. linux 서버에 Mysql 세팅

   - sudo apt install -y mysql-server

   - root 계정 비밀번호 세팅 : alter user 'root'@'localhost' identified with mysql_native_password by 'Root!2345';

   - create database db_name DEFAULT CHARACTER SET utf8;

   - grant all privileges on db_name.\* to db_name@localhost identified by 'Password';

   - FLUSH privileges;

3. .env 와 schema.prisma 설정 변경

4. git remote set-url origin 로 git url 변경

5. git push -u origin main
