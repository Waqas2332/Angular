import { Component } from '@angular/core';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [SocialProfileComponent, SocialLinksComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
})
export class MainContainerComponent {
  links = ['Github', 'Frontend Mentor', 'Linkedin', 'Twitter', 'Instagram'];
}
