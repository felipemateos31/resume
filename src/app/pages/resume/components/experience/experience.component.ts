import { Component } from '@angular/core';
import { works } from '../../../../../assets/info.json';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  works = works;
}
