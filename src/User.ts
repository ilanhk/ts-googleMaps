// convention in ts for classes give a capital name
// another convention in ts is avoid the use export default statements but doesnt apply to npm modules

import { faker } from '@faker-js/faker'; //https://www.npmjs.com/package/@faker-js/faker?activeTab=readme
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  color: string = 'red';
  //this obj doesnt exist when create an instance need to intialize it in the constructor
  // class User implements Mappable - means that the class should satisfies all the properties required of the interface Mappable
  // implements tells ts help us make sure class User has all properties of Mappable (dont have to do this but its nice)
  // implements helps tells us the true source of the error when it comes to interfaces

  constructor(){
    this.name = faker.person.firstName();
    
    // this.location.latitude = faker.location.latitude() //this wont work will get error bc ts doesnt see it has an object
    // this.location.longitude = faker.location.longitude(); //samw with this

    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
    };

  };

  markerContent(): string {
    return `Username: ${this.name}`;
  };
};
