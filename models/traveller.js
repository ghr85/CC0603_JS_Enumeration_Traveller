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
  return this.journeys.filter(function(el){
    if (el.distance >= minDistance){
      return el
    }
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce(
  (accumulator,current) => accumulator + current.distance,0
);
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
