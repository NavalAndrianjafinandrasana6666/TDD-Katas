/* *
Given a Ride’s distance and waiting time, the invoice generator should return the total fare for the Ride.
Distance is rounded up to the nearest 0.5km, and waiting time is rounded up to the nearest minute.

Total Fare = $2 per kilometer + $1 per minute of waiting

* */

import { calculateFare } from "../src/fare";

describe("Ride", () => {
    it("should return fare given distance and waiting time", () => {
        const distanceInKilometer = 1;
        const waitingTimeInMinutes = 2;
        const fare = calculateFare(distanceInKilometer, waitingTimeInMinutes);
  
      expect(fare).toEqual(4);
    });
  });

