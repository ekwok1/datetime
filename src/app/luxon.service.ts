import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { DateTime, DateTimeFormatOptions, Settings } from 'luxon';
import { Locale } from './locale.enum';

@Injectable({ providedIn: 'root' })
export class LuxonService {
  constructor(@Inject(LOCALE_ID) localeId: string) {
    Settings.defaultLocale = localeId ?? Locale.en;
  }

  now(): DateTime {
    return DateTime.now();
  }

  parseMillis(millis: number): DateTime {
    return DateTime.fromMillis(millis);
  }

  parseJsDate(jsDate: Date): DateTime {
    return DateTime.fromJSDate(jsDate);
  }

  parseISOString(iso: string): DateTime {
    return DateTime.fromISO(iso);
  }

  utc(input: DateTime): DateTime {
    return input.toUTC();
  }

  localize(input: DateTime, format: DateTimeFormatOptions): string {
    return input.toLocaleString(format);
  }

  addDays(input: DateTime, amount: number): DateTime {
    return input.plus({ 'day': amount });
  }

  generateUtc(year: number, month: number, date: number, hour: number, minute: number, second: number): DateTime {
    return DateTime.utc(year, month, date, hour, minute, second);
  }
}
