import { Component } from '@angular/core';
import { ResumeComponent } from './pages/resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Felipe Mateos';
}
