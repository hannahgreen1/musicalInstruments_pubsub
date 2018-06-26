const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('#instrument-families');
    const instrumentDropdown = new SelectView(selectElement);
    instrumentDropdown.bindEvents();

    const infoDiv = document.querySelector('div#animal-info')
    const animalInfoDisplay = new AnimalInfoView(infoDiv);
    animalInfoDisplay.bindEvents();

    const animalsDataSource = new Animals();
    animalsDataSource.bindEvents();

});
