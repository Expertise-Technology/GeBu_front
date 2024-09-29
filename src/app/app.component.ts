import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Center } from './models/center.model';
import { CenterService } from './services/center.service';
import { HttpClientModule } from '@angular/common/http';  // Ajoutez cette ligne
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GeBu';
  centers!: Center[];

  constructor(private centerService: CenterService,
    private titleService: Title
  ) {
    this.loadCenters();
  }

  loadCenters() {
    this.centerService.listCenters().subscribe(center => {
      this.centers = center;
    });
  }

  updateTitle(centerName: string) {
    this.titleService.setTitle(`GeBu - ${centerName}`);
  }

  navigateAndReload(id: number) {
    const url = `/center/${id}`;
    window.location.href = url; // Force le rechargement complet de la page
  }

}
