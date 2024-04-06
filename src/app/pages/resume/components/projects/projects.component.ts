import { Component } from '@angular/core';
import { projects } from '../../../../../assets/info.json';
import { SvgIconComponent } from 'angular-svg-icon';
import { IProject } from '../../../../core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Array<IProject> = projects;
}
