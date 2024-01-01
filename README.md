# Vanilla HTML/CSS/JS Website Template

This template uses HTML, CSS, and JS to create a Single Page Application website with routing and reuseable components. I have pre-loaded this template with  [Bootstrap](https://getbootstrap.com).

## File Layout

1. \assets: Holds all external files such as images, videos, icons, etc...
2. \components: Holds all the reuseable components
3. \css: Holds the css files for styling
4. \js: Holds the backend js files for manipulating the website
5. index.html: The html file that serves as the home page of the website when deploying

## Reuseable Components

* In the components directory you can create new .js files to hold reuseable html code.
* Import them in the index.html file using the script tags at the bottom of the body element.
* Using the format as shown in the included component1.js file, modify the `this.innerHTML=`.
* Add it onto the index.html or another html page using the custom element name you defined.
* Continue modifying the reusable component `this.innerHTML=` and see the updates

## JS

* In the js directory, you can separate the js functions into multiple files and import them into the index.html page
* The two main files are:
  * main.js: The typical file to hold all js code for a website
  * router.js: Holds all the js code for the routing functionality.
    * This is where you should modify the routes object to add more pages to your navigation.

## Routing

* In order to have swift navigation between pages using a Single Page Application layout, the router.js code adds the html from the .html pages file into the `<div id="content"></div>`.
* There are three main components to this functionality:
  * \components\navbar.js

    * The navbar is what is used to navigate between pages on the website
    * Add a new li element with an a tag and modify the href to what url path you want to display.
    * For example if you want to add an About page:
      ```
      `<li class="nav-item"><a class="nav-link" href="/about">`About`</a></li>`
      ```
  * \js\router.js
  * * Modify the routes object
    * For example, continuing with adding an about page

      ```
      "/about": {template: "/about.html",title: "About",description: "About page",}
      ```
  * The html page file that will be rendered within the div element which is about.html in this example

## Local Dev

1. Open the following project using VSCode.
   * If you do not already have the live server extension by Ritwick Dey, navigate to the extension tab and search for "live server" and install it.
2. Open the index.html file and right click any where in the editor.
3. Click the "Open with Live Server" option to run a local server for the website
4. The website should now be open in your browser.

Note: Everytime a change is done and saved in the VSCode editor the browser website will refresh. If you get a "Cannot GET /page" error simply remove the route path from the url so you are back to the home page.

Example:

* http://127.0.0.1:5500/page2

  * "Cannot GET /page2" error shown
* Remove the page2:

  * http://127.0.0.1:5500/
  * Click enter and you will be back to the home page


The reason for this error is because the local server uses the file structure of the project directory for serving the website. To fix this you need to make sure you only serve your index page for any requests.
