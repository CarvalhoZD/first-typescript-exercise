class plane {
    public airline: string;
    public startTrip: string;
    public endTrip: string;
    public flightDuration: number;
    private isFlying: string;

    constructor(airline: string , startTrip: string, endTrip: string, flightDurantion: number) {
    this.airline = airline;
    this.startTrip = startTrip;
    this.endTrip = endTrip;
    this.flightDuration = flightDurantion;
    }   

    public itIsFlying (option: string){
        this.isFlying = option;
    }
}

const trip: plane = new plane('American AirWays', 'Rio de Janeiro', 'Toronto', 5);

trip.itIsFlying('Yes');

console.table(trip);