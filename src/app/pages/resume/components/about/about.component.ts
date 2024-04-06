import { Component } from '@angular/core';
import { basics } from '../../../../../assets/info.json';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <Section title="Sobre mí">
      <h2 class="section-title">Sobre mí</h2>
      <p>
        {{ summary }}
      </p>
    </Section>
  `,
  styles: '',
})
export class AboutComponent {
  summary: string = basics.summary;
}
