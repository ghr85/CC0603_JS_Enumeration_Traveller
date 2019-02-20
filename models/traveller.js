const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map(function(el){
  return el.startLocation
})
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(el){
    return el.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(function(el){
    if (el.transport === transport){
      return el
    }
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
