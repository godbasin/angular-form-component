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
npm install angular-form-components --save

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
    UploadFileComponent,
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
    UploadFileComponent,
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
- `useTimestamp`: `boolean`
  - if `[(ngModel)]` use timestamp, default `false`
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

6. select-with-input

**Template**

``` html
<select-with-input [(ngModel)]='your_prop' [options]='your_options' [disabled]='your_condition' (onSelect)="onSelect($event)"></select-with-input>
```

**Options**

- `options`: `option[]`
  - select options for select2
  - `option`: `{id: value, text: key}`
- `ngModel`: option value that is selected or input value(`string`)
- `onSelect`
  - callback when option selected
  - parmas: option value that is selected or input value(`string`)

7. upload-image

**Template**

``` html
<upload-image [(ngModel)]='images_list_array' [limit]='limit_condition' [multiple]='if_multiple' [disabled]='your_condition' [btnName]='btn_name'></upload-image>
```

**Options**

- `ngModel`: images array(`image base64 string[]`)
- `limit`: limit conditions
  - `{width, height, size, type}`
  - `width`: image max width(px)
  - `height`: image max height(px)
  - `size`: image max size(k)
  - `type`: image type, accept 'jpeg'/'jpg'/'png'/'gif'
- `multiple`: `boolean`
  - if upload multiple images, default true
- `disabled`: `boolean`
  - isDisabled: default false
- `btnName`: string
  - button display name

8. upload-file

**Template**

``` html
<upload-file [(ngModel)]='your_prop' [multiple]='if_multiple' [limit]='limit_condition' [disabled]='your_condition' [btnName]="btn_name" ></upload-file>
```

**Options**

- `ngModel`: files array(`file base64 string[]`)
- `limit`: limit conditions
  - `{size, type}`
  - `size`: file max size(k)
  - `type`: file type, such as 'txt'
- `multiple`: `boolean`
  - if upload multiple files, default true
- `disabled`: `boolean`
  - isDisabled: default false
- `btnName`: string
  - button display name
- `dataType`: string
  - file reader data type
  - accept 'DataURL'/'ArrayBuffer'/'BinaryString'/'Text', default 'DataURL'

### Use Directive

1. ngFocusLost

**Template**

``` html
<div ngFocusLost (onFocusLost)="yourFunction()"></div>
```

**Options**

- `onFocusLost`: `EventEmitter`
  - callbacks that would execute when element lost focus
