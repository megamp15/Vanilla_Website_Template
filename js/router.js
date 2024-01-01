document.addEventListener("DOMContentLoaded", () => {
    // Listen for the popstate event when the user navigates using browser buttons
    window.addEventListener("popstate", handleURL);
  
    // handle the initial URL
    handleURL();
  
    // For navigation links
    document.addEventListener("click", (e) => {
      const { target } = e;
      if (target.matches("nav a")) {
        e.preventDefault();
        route(target.href);
      }
    });
  });
  
  /*
    create an object that maps the pages to the template, title, and description
    To add a new route modify the following: 
    "<href assigned on a element of the navbar>": {
        template: "<path to pages html file>", 
        title: "The title of the page", 
        description: "The description of the page. Added in metadata"
        
    }
  */
  const routes = {
    404: {
      template: "/404.html",
      title: "404",
      description: "Page not found",
    },
    "/": {
      template: "/home.html",
      title: "Home",
      description: "home page",
    },
    "/index.html": {
      template: "/home.html",
      title: "Home",
      description: "home page",
    },
    "/page2": {
      template: "/page2.html",
      title: "Page 2",
      description: "Page 2",
    },
  };
  
  // create a function that watches the url and calls the urlLocationHandler
  const route = (url) => {
    //   event = event || window.event;
    //   event.preventDefault();
    window.history.pushState({}, "", url);
    handleURL();
  };
  
  // Handles the url routing
  const handleURL = async () => {
    let location = window.location.pathname; // get the url path from the click
    if (location.length === 0) {
      location = "/";
    }
    document
        .querySelectorAll(".nav-link")
        .forEach((ele) => {
          ele.classList.remove("active-page")
          if (ele.pathname === location) {
            ele.classList.add("active-page");
          }
        });
    //   console.log(location);
    const route = routes[location] || routes["404"];
  
    try {
      const html = await fetch(route.template).then((response) =>
        response.text()
      );
  
      document.getElementById("content").innerHTML = html;
      document.title = route.title;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
    } catch (error) {
      console.error("Error fetching page's html:", error);
    }
  };
  