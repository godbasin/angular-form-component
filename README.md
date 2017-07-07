# Angular Form Components
npm address: [https://www.npmjs.com/package/angular-form-components](https://www.npmjs.com/package/angular-form-components)

## Related Versions

Angular Form Components is based on [angular(>= 2.0-release)](https://angular.io/).

DatetimepickerComponent is based on these plugins and libs(version):
- [jQuery](https://jquery.com/)
- [bootstrap-datetimepicker](http://www.bootcss.com/p/bootstrap-datetimepicker/)

Select2Component is based on these plugins and libs(version):
- [jQuery](https://jquery.com/)
- [select2](https://select2.github.io/)

## How to use
---
### Install
``` cmd
# npm install
npm install angular-form-component --save

# if you have not installed jquery
npm install jquery --save

# if you have not install bootstrap
# to use datetimepicker, you need to import bootstrap css global
npm install bootstrap --save
```

### Import component

``` javascript
// import NgModule
import {NgModule} from '@angular/core';

// import components
import {
    Select2Component,
    RadioWithTextComponent,
    RadioGroupComponent,
    UploadImageComponent,
    CheckboxGroupComponent,
    CheckboxWithTextComponent,
    DateTimePickerComponent,
    SelectWithInputComponent,
    OnFocusLostDirective // For SelectWithInputComponent
} from 'angular-form-components';

@NgModule({
  // ...
  // declare components
  declarations: [
    Select2Component,
    RadioWithTextComponent,
    RadioGroupComponent,
    UploadImageComponent,
    CheckboxGroupComponent,
    CheckboxWithTextComponent,
    DateTimePickerComponent,
    SelectWithInputComponent,
    OnFocusLostDirective
  ]
})
export class YourModule {
}
```

### Use Component
1. date-time-picker

**Template**

``` html
<date-time-picker [(ngModel)]="your_prop" accuracy="hour" [startDate]="startDate" [endDate]="endDate" 
  [maxView]="maxView" [minView]="minView" [disabled]="isDisabled" (onChange)="change($event)" ></date-time-picker>
```

**Options**

- `accuracy`: `string`
  - accuracy of date-time pick. 
  - min(default) | hour | day
- `startDate`: `string`
  - date range: start date
- `endDate`: `string`
  - date range: end date
- `maxView`: `string`
  - maxView: default 4
    - 0 or 'hour' for the hour view （hour view）
    - 1 or 'day' for the day view 0-24h （day view）
    - 2 or 'month' for month view (the default) （month view）
    - 3 or 'year' for the 12-month overview （year view）
    - 4 or 'decade' for the 10-year overview. Useful for date-of-birth datetimepickers.
- `minView`: `string`
- `disabled`: `boolean`
  - isDisabled: default false
- `onSelect`
  - callback when datetime selected

2. select2

**Template**

``` html
<select2 [options]="options" [(ngModel)]="optionSelected" (onSelect)="onSelect($event)"></select2>
```

**Options**

- `options`: `option[]`
  - select options for select2
  - `option`: `{id: value, text: key}` or `string`
- `ngModel`: option value that is selected(`id` or `string`)
- `onSelect`
  - callback when option selected
  - parmas: `option`(`{id: value, text: key}` or `string`)

3. checkbox-group

**Template**

``` html
<checkbox-group [(ngModel)]='your_prop' [options]='your_options' [disabled]='your_condition' ></checkbox-group>
```

**Options**

- `options`: `option[]`
  - select options for select2
  - `option`: `{id: value, text: key}` or `string`
- `ngModel`: option values that is selected(`id[]` or `string[]`)
- `disabled`: `boolean`
  - isDisabled: default false

4. checkbox-with-input

**Template**

``` html
<checkbox-with-input [(ngModel)]='your_prop' [options]='your_options' [disabled]='your_condition' ></checkbox-with-input>
```

**Options**

- `options`: `option[]`
  - select options for select2
  - `option`: `{id: value, text: key, withInput: boolean(if with input), type: string(text|number)}` or `string`
- `ngModel`: option that is selected(`option[]`)
- `disabled`: `boolean`
  - isDisabled: default false

4. radio-group

**Template**

``` html
<radio-group [(ngModel)]='your_prop' [options]='your_options' [disabled]='your_condition' ></radio-group>
```

**Options**

- `options`: `option[]`
  - select options for select2
  - `option`: `{id: value, text: key}` or `string`
- `ngModel`: option value that is selected(`id` or `string`)
- `disabled`: `boolean`
  - isDisabled: default false

5. radio-with-input

**Template**

``` html
<radio-with-input [(ngModel)]='your_prop' [options]='your_options' [disabled]='your_condition' ></radio-with-input>
```

**Options**

- `options`: `option[]`
  - select options for select2
  - `option`: `{id: value, text: key, withInput: boolean(if with input), type: string(text|number)}` or `string`
- `ngModel`: option that is selected(`option`)
- `disabled`: `boolean`
  - isDisabled: default false

### Use Directive

1. ngFocusLost

**Template**

``` html
<div ngFocusLost (onFocusLost)="yourFunction()"></div>
```

**Options**

- `onFocusLost`: `EventEmitter`
  - callbacks that would execute when element lost focus
