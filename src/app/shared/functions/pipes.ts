import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {
  transform(value: any): Date | null {
    if (!value) return null;
    // Firestore Timestamp: { seconds: number, nanoseconds: number }
    if (value.seconds) {
      return new Date(value.seconds * 1000);
    }
    // Si ya es Date o string compatible
    return new Date(value);
  }
}
