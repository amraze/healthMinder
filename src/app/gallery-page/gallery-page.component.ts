import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { GlobalConstants } from '../app.constants';
import { CalendarService } from '../services/calendar.service';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent {
  // Attributes 
  calendars: any = [];
  baseURL: string = GlobalConstants.baseURL;
  page: number = 1;
  // Constructor and Init
  constructor(private calendarService: CalendarService) { }
  ngOnInit(): void {
    this.getCalendars();
  }
  // CRUD Methods
  calendarOptions: any = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
  };
  private getCalendars() {
    this.calendarService.getCalendars().subscribe(response => {
      this.calendars = response;
      console.log(this.calendars);
      this.calendarOptions = {
        height: 600,
        events: [],
      };
      for (let i = 0; i < response.length; i++) {
        this.calendarOptions.events.push({ 'color': 'red', 'title': response[i].title, 'date': response[i].date?.split(' ')[0] });
      }
      console.log(this.calendarOptions);
    })
  }
}
