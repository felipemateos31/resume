import { Component } from '@angular/core';
import { basics } from '../../../../../assets/info.json';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  summary = basics.summary;
}
