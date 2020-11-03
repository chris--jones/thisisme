<h1 align="center">Welcome to thisisme 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/JoseDeFreitas/thisisme/blob/main/license" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <img alt="Hacktoberfest" src="https://img.shields.io/badge/Hacktoberfest-Accepted-%23FF8AE2" />
  <a href="https://twitter.com/JoseDeF32503298" target="_blank">
    <img alt="Twitter: JoseDeF32503298" src="https://img.shields.io/twitter/follow/JoseDeF32503298.svg?style=social" />
  </a>
</p>

### TLDR;
> Create cool images containing useful information about you and your work for your GitHub readme.

## ❓ Why this fork?
I was not happy with the direction of the original project due to the code design & approach, unused dependencies and introduction of additional unnecessary concerns such as sass css and docker.

This refactor features:
* Only dependencies are react and react-dom, local dev and production build are accomplished using [Parcel](https://parceljs.org/).
* Global state and navigation are achieved using react context.
* Dynamic svg image output with an svg component that adapts to filled in parts of the form.
* Mobile responsiveness via css media queries.

## 🕹 How to use?
To use this app, first install the app locally. 
1. Click the Start button on the homepage.
2. You will see multiple tabs.
3. In each tab, you can answer some questions about yourself. Each question is optional.
4. Then this app will generate cool images based on your answers.

Cool right?

You can download generated images and use them in your Github readme file.

## 🏠 App's Homepage - [thisisme](https://chris--jones.github.io/thisisme/)
Currently, the app is not deployed from the last commit. So the app may not be up to date. Please install the app locally to see it in action.

> This app is currently under development.

## 💻 Install Locally

First clone this repository:
```sh
git clone https://github.com/chris--jones/thisisme.git
cd thisisme
```
Install dependencies:

```sh
npm install
```
Start the project locally to see it in action.

```sh
npm run start
```

## 👤 Author

**José De Freitas**

* Website: https://github.com/JoseDeFreitas
* Twitter: [@JoseDeF32503298](https://twitter.com/JoseDeF32503298)
* Github: [@JoseDeFreitas](https://github.com/JoseDeFreitas)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
<br />
Feel free to check [issues page](https://github.com/JoseDeFreitas/thisisme/issues). You can also take a look at the [contributing guide](https://github.com/JoseDeFreitas/thisisme/blob/main/contributing.md).

## 🌟 Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [José De Freitas](https://github.com/JoseDeFreitas).<br />
This project is [MIT](https://github.com/JoseDeFreitas/thisisme/blob/main/license) licensed.
