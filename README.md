# Description

This application is a social network for developers, based on the [Udemy course](<[https://www.udemy.com/course/mern-stack-front-to-back](https://www.udemy.com/course/mern-stack-front-to-back)>).

It uses the MERN stack, aka :

- Mongo for database. Mongo Atlas is used.
- Express to expose the api
- React for the front-end, using Hooks and async/await for asynchronous calls
- Node.js for the back-end

You see a demo of the application here : [https://secure-island-58930.herokuapp.com/](https://secure-island-58930.herokuapp.com/)

Heroku free tier is used, so the first call can be a bit long.

# How to build locally

In the root folder, install dependencies with :

```bash
npm install
```

Then, you should add a `default.js` file in the `config` folder, that looks like this :

```
{

"MONGO_URI": "YOUR_MONGO_URI",

"JWT_SECRET": "YOUR_SECRET",

"GITHUB_TOKEN": "YOUT_GITHUB_TOKEN"

}
```

Don't forget to specify yout own secrets.

Then you can start the front-end and back-end concurrently with :

```bash
npm run dev
```

The back-end will run on port `8000` and front-end on port `3000`. You should now be able to access the application on `http://localhost:3000`

## Tools used

- VS Code as text editor, with these plugins : - Auto Close Tag : close automatically HTML tags - Auto Rename Tag : rename the closing tag when the opening tag is modified - Bracket Pair Colorizer : colorize matching brackets - ES7 React/Redux/GraphQL/React-Native snippets : snippets to faster create component templates, proptypes etc. - Material Icon Theme : better icons for files - Mithril Emmet : create html structure faster - Prettier - Code formatter : format code on saving
