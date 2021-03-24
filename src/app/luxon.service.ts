import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { DateTime, Settings } from 'luxon';
import { Locale } from './locale.enum';

@Injectable({ providedIn: 'root' })
export class LuxonService {
  constructor(@Inject(LOCALE_ID) localeId: string) {
    Settings.defaultLocale = localeId ?? Locale.en;
  }

  now(): DateTime {
    return DateTime.now();
  }
}
