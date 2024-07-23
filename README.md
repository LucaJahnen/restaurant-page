# Restaurant Page Challenge - TheOdinProject
This is my solution to the [Restaurant Page Challenge](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) provided by [TheOdinProject](TheOdinProject.com).

## The challenge
The Challenge was to create a Restaurant Page that has multiple pages. Each Page should be its own module.

## Built with
- [webpack](https://webpack.js.org/)
  - [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
  - [style-loader](https://webpack.js.org/loaders/style-loader/)

## My Process
First, I set up the html navigation and the made sure it was working and the home page would show up when the page was loaded.

### Assets
I decided to download the [Poppins](https://fonts.google.com/specimen/Poppins) ttf-files from [Google Fonts](https://fonts.google.com/) to practice using assets in webpack.


Each file looked similar to this:
```js
export default function Home() {
  const element = document.createElement("div")
  element.textContent = "home"
  return element
}
```

## Hosting
To host this project I used [netlify](https://netlify.com) and first had some issues because I didn't specify the dist folder and didn't tell netlify to use npx webpack to build.