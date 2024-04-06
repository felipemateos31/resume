import { Component } from '@angular/core';
import { education } from '../../../../../assets/info.json';
import { DatePipe } from '@angular/common';
import { IEducation } from '../../../../core';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  education: Array<IEducation> = education;
}
