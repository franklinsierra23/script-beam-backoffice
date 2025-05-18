import { Component } from '@angular/core';
import { EventsService } from '../../../services/events/events.service';
import { EventsDTO } from '../../../models/eventsDto';
import { CommonModule } from '@angular/common';
import { TimestampToDatePipe } from '../../../shared/functions/pipes';

@Component({
  selector: 'app-events-list',
  imports: [CommonModule, TimestampToDatePipe],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {

  //variables
  events: EventsDTO[] = [];
  constructor(
    private eventsService: EventsService,
  ) {

    // Constructor logic here
  }

  ngOnInit(): void {
    this.getEvents();
  }

  // Other component methods and properties can be defined here

  getEvents() {
    this.eventsService.getEvents().then((events: EventsDTO[]) => {
      this.events = events;
      console.log(this.events);
    }).catch((error) => {
      console.error('Error fetching events:', error);
    });
  }

}
