/**
 * desc：date-time-picker
 * how to use: <date-time-picker [(ngModel)]='your_prop' accuracy='hour' ></date-time-picker>
 */
declare var require: any
const $ = require('jquery');
require('./assets/datetimepicker/bootstrap-datetimepicker.js');

// if need chinese
// require('./assets/datetimepicker/bootstrap-datetimepicker.zh-CN.js');

import {Component, Input, AfterViewInit, ElementRef, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {CustomInputComponent, customInputAccessor} from './custom-input';

@Component({
  selector: 'date-time-picker',
  template: `<input type="text" class="form-control" [disabled]="disabled" [(ngModel)]="model" (blur)="onBlur()" />`,
  styleUrls: ['./assets/datetimepicker/bootstrap-datetimepicker.css'],
    encapsulation: ViewEncapsulation.None,
  providers: [customInputAccessor(DateTimePickerComponent)]
})
// ControlValueAccessor: A bridge between a control and a native element.
export class DateTimePickerComponent implements AfterViewInit {
  @Input() accuracy: string;                     // accuracy of date-time pick. [min(default) | hour | day]
  @Input() startDate: string;                    // date range: start date
  @Input() endDate: string;                      // date range: end date
  @Input() maxView: string;                      // max view
  @Input() minView: string;                      // min view
  @Input() disabled: boolean = false;            // isDisabled
  @Input() useTimestamp: boolean = false;        // if use timestamp

  @Output() onSelect = new EventEmitter<any>();  // change event callback of input

  public viewValue: string = '' ;
  private el; // element
  private model: any; // inner value
  private onChange: (_: any) => void;
  private onTouched: () => void;
  private formatStr: string = 'yyyy-MM-dd hh:mm:ss';

  constructor(el: ElementRef) {
    this.el = el;
  }

  // Lifecycle hook that is called after a component's view has been fully initialized.
  ngAfterViewInit() {
    /*
     source:http://www.bootcss.com/p/bootstrap-datetimepicker/
     minView: default 2
     maxView: default 4
     0 or 'hour' for the hour view （hour view）
     1 or 'day' for the day view 0-24h （day view）
     2 or 'month' for month view (the default) （month view）
     3 or 'year' for the 12-month overview （year view）
     4 or 'decade' for the 10-year overview. Useful for date-of-birth datetimepickers. （decade view）
     */
    let format = 'yyyy-mm-dd hh:ii:00'; // default accuracy: minute. datetimepicker do not support second accuracy.
    let minView = 0; // default min view: hour view

    if (this.accuracy === 'hour') {
      format = 'yyyy-mm-dd hh:00:00'; // hour accuracy: both minute and second is 00
      minView = 1; // min view: day view
    } else if (this.accuracy === 'day') {
      format = 'yyyy-mm-dd'; // day accuracy
      minView = 2; // min view: month view
    }

    $(this.el.nativeElement).find('input').datetimepicker({
      // if need chinese
      // language: 'zh-CN',
      autoclose: true, // autoclose after date-time picked
      maxView: parseInt(this.maxView, 10) || 4, // max view (default: decade view)
      startDate: this.startDate || '', // date range: start date.
      endDate: this.endDate || '', // date range: end date.
      format, // output format
      minView: parseInt(this.minView, 10) || minView || 0, // min view (default: hour view)
    })
      .on('hide', ev => {
        this.viewValue = $(ev.target).val(); // set value. (calling onChange())
        this.model = this.useTimestamp ? (new Date(this.model).getTime() / 1000) : this.viewValue;
        this.onSelect.emit({timestamp: this.model, text: this.viewValue}); // change event callback of input
      });
  }

  // Set touched on blur
  onBlur() {
    this.onTouched();
  }

  // Write a new value to the element.
  writeValue(value: string): void {
    if (value !== this.model) {
      this.model = value;
      const vd = new Date((+value) * 1000); // multiply 1000 for server timestamp
      this.viewValue = vd.format(this.formatStr);
    }
  }

  // Set the function to be called when the control receives a change event.
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // registerOnTouched(fn: any) : void
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}
