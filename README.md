# Vanilla HTML/CSS/JS Website Template

This template uses HTML, CSS, and JS to create a Single Page Application website with routing and reuseable components. I have pre-loaded this template with [Bootstrap](https://getbootstrap.com).

## File Layout

1. \assets: Holds all external files such as images, videos, icons, etc...
2. \components: Holds all the reuseable components
3. \css: Holds the css files for styling
4. \js: Holds the backend js files for manipulating the website
5. \pages: Holds the different pages of the website
6. index.html: The html file that serves as the home page of the website when deploying

## Local Dev

1. Open the following project using VSCode.
   - If you do not already have the live server extension by Ritwick Dey, navigate to the extension tab and search for "live server" and install it.
2. Open the index.html file and right click any where in the editor.
3. Click the "Open with Live Server" option to run a local server for the website
4. The website should now be open in your browser.

Note: Everytime a change is done and saved in the VSCode editor the browser website will refresh. If you get a "Cannot GET /page" error simply remove the route path from the url so you are back to the home page.

Example:

- http://127.0.0.1:5500/page2

  - "Cannot GET /page2" error shown

- Remove the page2:

  - http://127.0.0.1:5500/
  - Click enter and you will be back to the home page
