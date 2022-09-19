var plane = /** @class */ (function () {
    function plane(airline, startTrip, endTrip, flightDurantion) {
        this.airline = airline;
        this.startTrip = startTrip;
        this.endTrip = endTrip;
        this.flightDuration = flightDurantion;
    }
    plane.prototype.itIsFlying = function (option) {
        this.isFlying = option;
    };
    return plane;
}());
var trip = new plane('American AirWays', 'Rio de Janeiro', 'Toronto', 5);
trip.itIsFlying('Yes');
console.table(trip);
