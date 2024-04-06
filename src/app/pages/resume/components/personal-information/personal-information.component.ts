import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { basics } from '../../../../../assets/info.json';
@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
})
export class PersonalInformationComponent {
  personalInformation: IPersonalInformation;

  constructor() {
    this.personalInformation = basics;
  }
}

interface IPersonalInformation {
  name: string;
  label: string;
  image: string;
  location: ILocation;
  profiles: Array<ISocialMedia>;
  phone: string;
  email: string;
}

interface ISocialMedia {
  network: string;
  username: string;
  url: string;
}

interface ILocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}
