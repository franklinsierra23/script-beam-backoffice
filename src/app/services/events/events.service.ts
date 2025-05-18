import { Injectable } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import { EventsDTO } from '../../models/eventsDto';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private firebaseService: FirebaseService
  ) {

  }
  async getEvents(): Promise<EventsDTO[]> {
    const items = await this.firebaseService.getItems('events');
    return items as EventsDTO[];
  }
}
