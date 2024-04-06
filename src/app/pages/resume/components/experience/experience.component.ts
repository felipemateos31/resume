import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { works } from '../../../../../assets/info.json';
import { IWork } from '../../../../core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  works: Array<IWork> = works;
}
