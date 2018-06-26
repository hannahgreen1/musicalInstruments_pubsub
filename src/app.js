const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const ResultInstrument = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector("#instrument-families");
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentsDataSource = new InstrumentFamilies();
  instrumentsDataSource.bindEvents();

});
