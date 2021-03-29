import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { DayJsService } from './dayjs.service';
import { LuxonService } from './luxon.service';
import { MomentService } from './moment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get ViewEnum() {
    return ViewEnum;
  }

  // current variables
  currentMillis = new Date().getTime();
  currentJsDate = new Date();
  currentISO = new Date().toISOString();

  // current
  currentTimeMoment = this._moment.now();
  currentTimeLuxon = this._luxon.now();
  currentTimeDayJs = this._dayJs.now();

  // parse
  parseMillisMoment = this._moment.parse(this.currentMillis);
  parseJsDateMoment = this._moment.parse(this.currentJsDate);
  parseISOMoment = this._moment.parse(this.currentISO);
  parseMillisLuxon = this._luxon.parseMillis(this.currentMillis);
  parseJsDateLuxon = this._luxon.parseJsDate(this.currentJsDate);
  parseISOLuxon = this._luxon.parseISOString(this.currentISO);
  parseMillisDayJs = this._dayJs.parse(this.currentMillis);
  parseJsDateDayJs = this._dayJs.parse(this.currentJsDate);
  parseISODayJs = this._dayJs.parse(this.currentISO);

  // utc
  utcMoment = this._moment.utc(this.parseJsDateMoment);
  utcLuxon = this._luxon.utc(this.parseJsDateLuxon);
  utcDayJs = this._dayJs.utc(this.parseJsDateDayJs);

  // localize
  // should make format enum
  localizeMoment = this._moment.localize(this.parseJsDateMoment, 'L');
  localizeLuxon = this._luxon.localize(this.parseJsDateLuxon, DateTime.DATE_SHORT);
  localizeDayJs = this._dayJs.localize(this.parseJsDateDayJs, 'L');

  // manipulation
  addMoment = this._moment.add(this.parseJsDateMoment, 1, 'day');
  addLuxon = this._luxon.addDays(this.parseISOLuxon, 1);
  addDayJs = this._dayJs.add(this.parseISODayJs, 1, 'day');

  // generate UTC
  generateUtcMoment = this._moment.generateUtc(2021, 2, 24, 2, 30, 0);
  generateUtcLuxon = this._luxon.generateUtc(2021, 2, 24, 2, 30, 0);
  generateUtcDayJs = this._dayJs.generateUtc(2021, 2, 24, 2, 30, 0);

  // eod
  eodMoment = this._moment.endOf(this.parseJsDateMoment, 'day');
  eodLuxon = this._luxon.endOf(this.parseJsDateLuxon, 'day');
  eodDayJs = this._dayJs.endOf(this.parseJsDateDayJs, 'day');

  // comparison
  tomorrowMoment = this._moment.add(this.parseJsDateMoment, 1, 'day');
  comparisonMoment = this._moment.isAfter(this.tomorrowMoment, this.parseJsDateMoment);
  tomorrowLuxon = this._luxon.addDays(this.parseJsDateLuxon, 1);
  comparisonLuxon = this._luxon.isAfter(this.tomorrowLuxon, this.parseJsDateLuxon);
  tomorrowDayJs = this._dayJs.add(this.parseJsDateDayJs, 1, 'day');
  comparisonDayJs = this._dayJs.isAfter(this.tomorrowDayJs, this.parseJsDateDayJs);

  // toggles
  showCurrentTime = true;
  showParseTime = false;
  showConvertUtc = false;
  showLocalize = false;
  showManipulation = false;
  showGenerateUtc = false;
  showEod = false;
  showComparison = false;

  constructor(private _moment: MomentService, private _luxon: LuxonService, private _dayJs: DayJsService) { }

  toggleView(view: ViewEnum): void {
    this.allOff();
    switch (view) {
      case(ViewEnum.currentTime):
        this.showCurrentTime = true;
        break;
      case(ViewEnum.parseTime):
        this.showParseTime = true;
        break;
      case(ViewEnum.convertUtc):
        this.showConvertUtc = true;
        break;
      case(ViewEnum.localize):
        this.showLocalize = true;
        break;
      case(ViewEnum.manipulation):
        this.showManipulation = true;
        break;
      case(ViewEnum.generateUtc):
        this.showGenerateUtc = true;
        break;
      case(ViewEnum.eod):
        this.showEod = true;
        break;
      case(ViewEnum.comparison):
        this.showComparison = true;
        break;
    }
  }

  private allOff(): void {
    this.showCurrentTime = false;
    this.showParseTime = false;
    this.showConvertUtc = false;
    this.showLocalize = false;
    this.showManipulation = false;
    this.showGenerateUtc = false;
    this.showEod = false;
    this.showComparison = false;
  }
}

enum ViewEnum {
  currentTime,
  parseTime,
  convertUtc,
  localize,
  manipulation,
  generateUtc,
  eod,
  comparison
}
