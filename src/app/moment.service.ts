import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import * as _moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/zh-cn';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/pt';
import 'moment/locale/nl';
import 'moment/locale/en-gb';
import { Locale } from './locale.enum';

@Injectable({ providedIn: 'root' })
export class MomentService {
  private moment = _moment;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.moment.locale(localeId ?? Locale.en);
  }

  now(): _moment.Moment {
    return this.moment();
  }

  parse(input: _moment.MomentInput): _moment.Moment {
    return this.moment(input);
  }

  utc(input: _moment.MomentInput): _moment.Moment {
    return this.moment.utc(input);
  }

  localize(input: _moment.MomentInput, format: string): string {
    return this.moment(input).format(format);
  }

  add(
    input: _moment.MomentInput,
    amount: _moment.DurationInputArg1,
    unit: _moment.unitOfTime.DurationConstructor
  ): _moment.Moment {
    return this.moment(input).add(amount, unit);
  }

  generateUtc(year: number, month: number, date: number, hour: number, minute: number, second: number): _moment.Moment {
    return this.moment.utc().year(year).month(month).date(date).hour(hour).minute(minute).second(second);
  }

  endOf(input: _moment.MomentInput, unit: _moment.unitOfTime.StartOf): _moment.Moment {
    return this.moment(input).endOf(unit);
  }

  isAfter(inputA: _moment.MomentInput, inputB: _moment.MomentInput): boolean {
    return this.moment(inputA).isAfter(this.moment(inputB));
  }
}
