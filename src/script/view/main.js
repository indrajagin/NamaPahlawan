import '../component/pahlawan-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const pahlawanListElement = document.querySelector('pahlawan-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchPahlawan(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    pahlawanListElement.pahlawans = results;
  };

  const fallbackResult = message => {
    pahlawanListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
