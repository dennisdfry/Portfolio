import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { TechnologiesComponent } from '../technologies/technologies.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, TechnologiesComponent ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
