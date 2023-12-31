/*
View the following page for more bootstrap navbar help:
https://getbootstrap.com/docs/5.3/components/navbar/
*/
class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/page2">Page 2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
    }
  }
  
  customElements.define("main-navbar", Navbar);
  