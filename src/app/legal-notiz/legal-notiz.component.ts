import { Component, OnInit } from '@angular/core';
import { LegalNotizService } from '../legal-notiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notiz',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './legal-notiz.component.html',
  styleUrls: ['./legal-notiz.component.scss']
})
export class LegalNotizComponent implements OnInit {

  isVisible = false;

  constructor(private legalNotizService: LegalNotizService) {}

  ngOnInit(): void {
    this.legalNotizService.visibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  closeDatenschutz(): void {
    this.legalNotizService.hide(); 
  }
}
