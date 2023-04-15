import './pahlawan-item.js';

class PahlawanList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set pahlawans(pahlawans) {
    this._pahlawans = pahlawans;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._pahlawans.forEach(pahlawan => {
      const pahlawanItemElement = document.createElement('pahlawan-item');
      pahlawanItemElement.pahlawan = pahlawan;
      this.shadowDOM.appendChild(pahlawanItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('pahlawan-list', PahlawanList);
