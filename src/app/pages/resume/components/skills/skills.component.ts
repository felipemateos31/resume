import { Component } from '@angular/core';
import { skills } from '../../../../../assets/info.json';
import { SvgIconComponent } from 'angular-svg-icon';
import { ISkill } from '../../../../core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Array<ISkill> = skills;
}
