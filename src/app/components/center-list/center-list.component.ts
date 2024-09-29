import { Component } from '@angular/core';
import { Center } from '../../models/center.model';
import { CenterService } from '../../services/center.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-center-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './center-list.component.html',
  styleUrl: './center-list.component.css'
})
export class CenterListComponent {

  centers? : Center[];

  constructor(private centerService: CenterService,
    private router : Router ) {
    this.allCenters
  }

   allCenters(){
  this.centerService.listCenters().subscribe(center => {
    this.centers = center;
   });
  }


}
