<div align="center">
    <img src="./design/logo-spread.png" alt="Logo bootcamp spread" width="65%">
</div>

<h1 align="center">URL Shortener</h1>
<h4 align="center">This project is my fourth bootcamp spread challenge.</h4>

<p align="center">
  <img src="https://img.shields.io/github/license/renantrs/url-shortener-dio" alt="GitHub License" />
  <img src="https://img.shields.io/github/languages/top/renantrs/url-shortener-dio" alt="GitHub top language" />
  <img src="https://img.shields.io/github/last-commit/renantrs/url-shortener-dio?color=blue" alt="GitHub last commit" />
  <img src="https://img.shields.io/github/issues/renantrs/url-shortener-dio?color=orange" alt="GitHub issues open" />
  <img src="https://img.shields.io/github/issues-closed/renantrs/url-shortener-dio?color=blue?color=green" alt="GitHub closed issues" />
  <img src="https://img.shields.io/github/issues-pr/renantrs/url-shortener-dio?color=orange" alt="GitHub pull request open" />
  <img src="https://img.shields.io/github/issues-pr-closed/renantrs/url-shortener-dio?color=green" alt="GitHub closed pull requests" />
</p>

## How to use

To clone and run this project, you'll need **[Git](https://git-scm.com)**, **[node v14.20.0](https://nodejs.org/en/)** or higher + **[yarn v1.22.15](https://yarnpkg.com)** or higher installed on your computer. From your command line:

```bash
#Clone this repository
$ git clone https://github.com/RenanTRS/url-shortener-dio

#Go into the repository
$ cd url-shortener-dio

#Install dependencies
$ yarn
#or
$ npm i

#Run
$ yarn dev
#or
$ npm run dev

#Build
$ yarn build
#or
$ npm run build

#Run build
$ yarn start
#or
$ npm run start
```

## .ENV

```
BASE_URL: your_baseurl_here
MONGO_URI: your_stringconnection_database_here
```

## Routes:

**POST:**
`http://<yourbaseurl>/shorten`

Request (body):

```json
{
  "originURL": "https://www.npmjs.com"
}
```

Response:

```json
{
  "_id": "62ca10afd21ae74c7ff28cc0",
  "hash": "GkSYmaFoU",
  "originURL": "https://www.npmjs.com",
  "shortURL": "http://localhost:3333/GkSYmaFoU",
  "__v": 0
}
```

**GET:**
`http://<yourbaseurl>/hash-generated` - _(shortURL)_

## Built with

- [NodeJs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](http://expressjs.com/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Babel](https://babeljs.io/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [ShortId](https://www.npmjs.com/package/shortid)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Contact

- Email me - renantrsouza@gmail.com
- Connect with me on [LinkedIn](https://www.linkedin.com/in/renantrsouza/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/renantrs/url-shortener-dio/blob/main/LICENSE) file for details.
