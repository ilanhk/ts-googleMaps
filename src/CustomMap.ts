//for google maps to work need to install it https://www.npmjs.com/package/@types/google.maps
//making it as a class and private so other devs wont break the code

import { User } from "./User";
import { Company } from "./Company";
//classes can be used to create instances of objs but can also be a type in itself

//intructions to every other class on how they can be an arg to addMarker
export interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  markerContent(): string;
  color: string;
};

export class CustomMap {
  private googleMap: google.maps.Map; //this would be the type of this variable - shows it will be an instance of Map class on google

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement , {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  };

  addMarker(mapable: Mappable ): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.latitude,
        lng: mapable.location.longitude
      }
    });

    marker.addListener('click', ()=>{
      const infoWindow = new google.maps.InfoWindow({
        content: mapable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  };
  // mapable: User | Company - ts will compare both classes and see if they have properties in common it can use

  
};