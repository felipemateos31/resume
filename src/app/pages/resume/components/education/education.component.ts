import { Component } from '@angular/core';
import { education } from '../../../../../assets/info.json';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  education = education;
}
