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
// plugins
import * as utc from 'dayjs/plugin/utc';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';

@Injectable({ providedIn: 'root' })
export class DayJsService {
  constructor(@Inject(LOCALE_ID) localeId: string) {
    dayjs.locale(localeId ?? Locale.en);
    dayjs.extend(utc);
    dayjs.extend(localizedFormat);
  }

  now(): dayjs.Dayjs {
    return dayjs();
  }

  parse(input: dayjs.ConfigType | undefined): dayjs.Dayjs {
    return dayjs(input);
  }

  utc(input: dayjs.Dayjs): dayjs.Dayjs {
    return input.utc();
  }

  localize(input: dayjs.Dayjs, format: string): string {
    return input.format(format);
  }

  add(input: dayjs.Dayjs, amount: number, unit: dayjs.OpUnitType) {
    return input.add(amount, unit);
  }

  generateUtc(
    year: number, month: number, date: number,
    hour: number, minute: number, second: number
  ): dayjs.Dayjs {
    return dayjs.utc()
      .year(year).month(month).date(date)
      .hour(hour).minute(minute).second(second);
  }
}
