import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../app.constants';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctors-page',
  templateUrl: './doctors-page.component.html',
  styleUrls: ['./doctors-page.component.css']
})
export class DoctorsPageComponent implements OnInit {
  // Attributes 
  doctors: any = [];
  baseURL: string = GlobalConstants.baseURL;
  // Constructor and Init
  constructor(private doctorService: DoctorService) { }
  ngOnInit(): void {
    this.getDoctors();
  }
  // CRUD Methods
  private getDoctors() {
    this.doctorService.getDoctors().subscribe(response => { this.doctors = response; });
  }
}
