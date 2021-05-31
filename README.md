# Vanilla JavaScript - CASE STUDY - Part 1

CHECK IT OUT LIVE: https://ognjen-radisic-vanillajs-project.netlify.app/

In part-1 goal is to make a full project while only using vanilla js (no external ui librariries), html and sass. In part-2 I'll make the same project using React and sass. And we can compare the differences, in app structuring, code readability and simplicity in different aspects of making the same thing in a different way (with different technologies).

## WEBPACK

- [ ] Bundling js files and minify files for performance.
- [ ] Transpile modern js into ES5 with babel for compatibility and accessibility.
- [ ] Transpile sass into css with loaders.
- [ ] Use style-loader to inject transpiled css into html.
- [ ] Use html-webpack-plugin to inject bundeled js into html.
- [ ] Use content hash to have unique hash in the file name if any changes were made.
- [ ] Use Content hash to tell the browser does it need to cache files again in the memory.
- [ ] Use webpack-dev-server to improve, and speed up development process.
- [ ] Use html-loader to detect img tags with src attribute and change them to require asset (avoid hard coding it).
- [ ] Use file-loader to detect images extensions and copy them in to build folder.
- [ ] Use clean property in outpu object to clear old build files and we use it only in production (webpack-dev-server builds in memory).

## GULP

- [ ] Tried out gulp for the first time, it was not essential tool for the project but I tried making webpack task for building final project and it works like a charm.
- [ ] There was a possibility to transfer functionality of file-loader, css and sass loaders, and babel functionality to gulp, but I kept the job to be done by the webpack.

## DESIGN AND JS

- [ ] Make everything with mobile responsivness in mind.
- [ ] First I'll do the semantics for the individual component in html (from top to down) and later have fun with sass and js, and do the fine tunning the looks and functionality of the specific component.
- [ ] Build carousel and tab switching functionality from scratch no additional libraries.
- [ ] Build currency switcher functionality into the navbar and re-render specific components that are affected after currency change.
- [ ] Make html templates with javascript string templates and render them with addition of JSON data injected into each item.
- [ ] Store some of the components data in JSON like format and feed the UI with data.
