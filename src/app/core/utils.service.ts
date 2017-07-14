import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import {bootstrapItem} from '@angular/cli/lib/ast-tools';

@Injectable()
export class UtilsService {

  constructor(private datePipe: DatePipe) { }

  isLoaded(loading: boolean) {
    return loading === false
  }

  eventDates(start, end): string {
    // Display single-day events as "Jan 7, 2018"
    // Display multi-day events as "Aug 12, 2017 - Aug 13, 2017"
    const startDate = this.datePipe.transform(start, 'mediumDate');
    const endDate = this.datePipe.transform(end, 'mediumDate');

    if (startDate === endDate) {
      return startDate;
    } else {
      return `${startDate} - ${endDate}`;
    }
  }

  eventDatesTimes(start, end): string {
    // Display single-day events as "1/7/2018, 5:30 PM - 7:30 PM"
    // Display multi-day events as "8/12/2017, 8:00 PM - 8/13/2017, 10 PM"
    const startDate = this.datePipe.transform(start, 'shortDate');
    const startTime = this.datePipe.transform(start, 'shortTime');
    const endDate = this.datePipe.transform(end, 'shortDate');
    const endTime = this.datePipe.transform(end, 'shortTime');

    if (startDate === endDate) {
      return `${startDate}, ${startTime} - ${endTime}`;
    } else {
      return `${startDate}, ${startTime} - ${endDate}, ${endTime}`
    }
  }

  eventPast(eventEnd): boolean {
    const now = new Date();
    const then = new Date(eventEnd.toString());
    return now >= then;
  }

  tabIs(currentTab: string, tab: string): boolean {
    // Check if current tab is tab name
    return currentTab === tab;
  }

  displayCount(guests: number): string {
    // Example usage:
    // attending this event
    const persons = guests === 1 ? 'person' : 'people';
    return guests + persons;
  }

  showPlusOnes(guests: number): string {
    // If bring additional guest(s), show as "+n"
    if (guests) {
      return `+${guests}`;
    }
  }

  booleanToText(bool: boolean): string {
    // Change a boolean to 'Yes' or 'No' string
    return bool ? 'Yes' : 'No';
  }
}
