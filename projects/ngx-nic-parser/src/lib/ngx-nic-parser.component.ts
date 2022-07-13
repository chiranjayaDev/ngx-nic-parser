import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Month} from './month';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Response} from './response';
import {BirthMonthAndDate} from './birth-month-and-date';

@Component({
  selector: 'lib-nic-parser',
  templateUrl: './ngx-nic-parser.component.html',
  styleUrls: ['./ngx-nic-parser.component.css'],
})
export class NgxNicParserComponent implements OnInit {
  @Input() id = '';
  @Input() title = '';
  @Input() requiredMessage = '';
  @Input() patternErrorMessage = '';
  @Input() placeholder = '';
  @Input() clearNICNumber = '';
  @Output() checkDob = new EventEmitter<Response>();

  nicForm = new FormGroup({
    nic: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9}[x|X|v|V]|[0-9]{12})')])
  });

  get nicNumber(): any {
    return this.nicForm.get('nic');
  }

  ngOnInit(): void {
  }

  nicParser() {
    if (this.nicForm.valid) {
      const $nicNumber = this.nicForm.value.nic;
      if ($nicNumber.length !== 10 && $nicNumber.length !== 12) {
        this.checkDob.emit(new Response({code: 404, message: 'Invalid Nic Number'}));
      } else if ($nicNumber.length === 10 && !($nicNumber.substr(0, 9))) {
        this.checkDob.emit(new Response({code: 404, message: 'Invalid Nic Number'}));
      } else {
        const $year = this.getBirthYear($nicNumber);
        let $dayText = this.getNumberOfDatesToDob($nicNumber);
        const $gender = this.getGender($dayText);
        $dayText = $dayText > 500 ? $dayText - 500 : $dayText;
        const $obj = this.getBirthMonthAndDate($dayText);
        const $dayName = this.getWeekDay($year, $obj.month, $obj.day);
        const $res = {...$obj, year: $year, gender: $gender, weekDay: $dayName};
        this.checkDob.emit(new Response({code: 200, message: ''}, $res));
      }
    }
  }

  public getBirthYear($nicNumber: any) {
    if ($nicNumber.length === 10) {
      return Number('19' + $nicNumber.substr(0, 2));
    } else {
      return Number($nicNumber.substr(0, 4));
    }
  }

  public getBirthMonthAndDate($dayText: number): any {
    if ($dayText < 1 && $dayText > 366) {
      this.checkDob.emit(new Response({code: 404, message: 'Invalid Nic Number'}));
    } else {
      const b = this.isLeapYear();
      if ($dayText > b[10]) {
        return this.setBirthMonthAndDate(($dayText - b[10]), Month[Month.DECEMBER], Month.DECEMBER);
      } else if ($dayText > b[9]) {
        return this.setBirthMonthAndDate(($dayText - b[9]), Month[Month.NOVEMBER], Month.NOVEMBER);
      } else if ($dayText > b[8]) {
        return this.setBirthMonthAndDate(($dayText - b[8]), Month[Month.OCTOBER], Month.OCTOBER);
      } else if ($dayText > b[7]) {
        return this.setBirthMonthAndDate(($dayText - b[7]), Month[Month.SEPTEMBER], Month.SEPTEMBER);
      } else if ($dayText > b[6]) {
        return this.setBirthMonthAndDate(($dayText - b[6]), Month[Month.AUGUST], Month.AUGUST);
      } else if ($dayText > b[5]) {
        return this.setBirthMonthAndDate(($dayText - b[5]), Month[Month.JULY], Month.JULY);
      } else if ($dayText > b[4]) {
        return this.setBirthMonthAndDate(($dayText - b[4]), Month[Month.JUNE], Month.JUNE);
      } else if ($dayText > b[3]) {
        return this.setBirthMonthAndDate(($dayText - b[3]), Month[Month.MAY], Month.MAY);
      } else if ($dayText > b[2]) {
        return this.setBirthMonthAndDate(($dayText - b[2]), Month[Month.APRIL], Month.APRIL);
      } else if ($dayText > b[1]) {
        return this.setBirthMonthAndDate(($dayText - b[1]), Month[Month.MARCH], Month.MARCH);
      } else if ($dayText < 32) {
        return this.setBirthMonthAndDate(($dayText), Month[Month.JANUARY], Month.JANUARY);
      } else if ($dayText > 31) {
        return this.setBirthMonthAndDate(($dayText - 31), Month[Month.FEBRUARY], Month.FEBRUARY);
      }
    }
  }

  public setBirthMonthAndDate(day: any, monthName: string, monthNumber: number) {
    return new BirthMonthAndDate(
      day, monthName, monthNumber
    );
  }

  public getNumberOfDatesToDob($nicNumber: any) {
    if ($nicNumber.length === 10) {
      return Number($nicNumber.substr(2, 3));
    } else {
      return Number($nicNumber.substr(4, 3));
    }
  }

  public getGender($numberOfDays: number) {
    if ($numberOfDays > 500) {
      return 'Female';
    } else {
      return 'Male';
    }
  }

  public isLeapYear() {
    return [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  }

  public getWeekDay($year: number, $month: number, $day: number): string {
    return new Date($year, $month, $day).toLocaleString('en-us', {weekday: 'long'});
  }

}
