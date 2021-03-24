import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/pt';
import 'dayjs/locale/nl';
import 'dayjs/locale/en-gb';
import { Locale } from './locale.enum';

@Injectable({ providedIn: 'root' })
export class DayJsService {
  constructor(@Inject(LOCALE_ID) localeId: string) {
    dayjs.locale(localeId ?? Locale.en);
  }

  now(): dayjs.Dayjs {
    return dayjs();
  }
}
