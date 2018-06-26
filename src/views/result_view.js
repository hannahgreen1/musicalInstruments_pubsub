const PubSub = require("../helpers/pub_sub.js");


const ResultInstrument = function (container){
  this.container = container;
};

ResultInstrument.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.generate(instrument);
    console.log(evt.detail);
    console.log(evt);
  });
};

ResultInstrument.prototype.generate = function(instrument){
  console.log(instrument);
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Type: ${instrument.name}, Description: ${instrument.description}, Other Instruments: ${instrument.instruments}`;
  this.container.appendChild(infoParagraph);
};
module.exports = ResultInstrument;
