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
  template: `
    <main>
      <app-personal-information />
      <app-about />
      <app-experience />
      <app-education />
      <app-projects />
      <!-- <app-skills /> -->
    </main>
  `,
  styles: 
  `main {
    padding: 4rem;
    margin: auto;
    width: 100%;
  }

  @media (width <= 700px) {
    main {
      padding: 2rem;
    }
  }
  `,
})
export class ResumeComponent {}
