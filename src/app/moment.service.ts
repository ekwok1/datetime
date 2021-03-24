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
}
