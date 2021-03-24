import { Component } from '@angular/core';
import { DayJsService } from './dayjs.service';
import { LuxonService } from './luxon.service';
import { MomentService } from './moment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTimeMoment = this._moment.now();
  currentTimeLuxon = this._luxon.now();
  currentTimeDayJs = this._dayJs.now();

  constructor(private _moment: MomentService, private _luxon: LuxonService, private _dayJs: DayJsService) { }
}
