class Component1 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <h1 class="text-center"> Hello World! </h1>
      `;
    }
  }
  
// Please review the valid custom element names here: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names

  customElements.define("component-1", Component1);
  