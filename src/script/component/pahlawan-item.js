class PahlawanItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set pahlawan(pahlawan) {
    this._pahlawan = pahlawan;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .pahlawan-info {
          padding: 24px;
        }
        .pahlawan-info > h2 {
          font-weight: lighter;
        }
        .pahlawan-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      
      <div class="pahlawan-info">
        <h2>${this._pahlawan.name}</h2>
        <p>${this._pahlawan.birth_year}</p>
        <p>${this._pahlawan.death_year}</p>
        <p>${this._pahlawan.description}</p>
        <p>${this._pahlawan.ascension_year}</p>
      </div>
    `;
  }
}

customElements.define('pahlawan-item', PahlawanItem);
