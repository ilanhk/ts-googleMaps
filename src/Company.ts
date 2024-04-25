import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: string;
  motto: string;
  location: {
    latitude: number;
    longitude: number;
  };
  color: string = 'blue';

  constructor(){
    this.name = faker.company.name();
    this.motto = faker.company.catchPhrase();

    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
    };

  };

  markerContent(): string {
    return `
    <div>
      <h1> Company name: ${this.name} </h1>
      <h3> Motto: ${this.motto} </h3>
    </div>
    `;
  };
};