import { Component } from '@angular/core';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    PersonalInformationComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
