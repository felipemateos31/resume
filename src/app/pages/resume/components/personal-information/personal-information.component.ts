import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { basics } from '../../../../../assets/info.json';
import { IPersonalInformation } from '../../../../core';
@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
})
export class PersonalInformationComponent {
  personalInformation: IPersonalInformation = basics;
}
