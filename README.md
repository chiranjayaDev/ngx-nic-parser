## Calculate DOB/Gender for Srilankan National Identity Card using Angular
[![NPM version][npm-image]][npm-url]
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)
[![The MIT License](https://img.shields.io/npm/dt/ngx-nic-parser?style=flat-square)]()

## Getting started

#### Step 1: Install [ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started)

```bash
   ng add @ng-bootstrap/ng-bootstrap
```

#### Step 2: Install ngx-nic-parser

```bash
    npm install ngx-nic-parser --save
```
https://www.npmjs.com/package/ngx-nic-parser
## Example usage:
Add the NgxNicParserModule to the imports of the module.
```js
      import {NgxNicParserModule} from "ngx-nic-parser";

      @NgModule({
        imports: [
          NgxNicParserModule
        ]
      })
```

Add the element to your HTML:
```html

<ngx-nic-parser
  [title]="'title'"
  [placeholder]="'placeholder'"
  (checkDob)="generate($event)"
  [id]="'id'"
  [patternErrorMessage]="invalid pattern!'"
  [requiredMessage]="'is required!'">
</ngx-nic-parser>

```

And add this to your ts file:
```js

export class AppComponent {
  generate($event: any) {
    console.log($event);
  }
}

```
### Success Response
```js
{
    "status": {
        "code": 200,
        "message": ""
    },
    "response": {
        "day": 9,
        "monthName": "JUNE",
        "month": 6,
        "year": 1999,
        "gender": "Male"
    }
}
```

## Inputs
| Name                    | Type      | Default      | Description                                                                                                                                                                                                                          |
|-------------------------|---------- | ------------ |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`     | string |        null      | Label Name                                                                                                                                                                                                |
| `placeholder`             | string|       null       | placeholder for the input field.                                                                                                                                                                                                          |
| `id`              | string    |     null         | Id for input field. |
| `patternErrorMessage`                | string    |   null        | Error Message when input an incorrect pattern.                                                                                                         |
| `requiredMessage`           | string    |   null    | Field is required message.                                                                                                                                                                |
## Outputs

| Name                    | Type              | Description |
| ----------------------- | ----------------- | ----------- |
| `checkDob`           | method    | Method to calculate DOB |

[npm-url]: https://www.npmjs.com/package/ngx-nic-parser
[npm-image]: https://img.shields.io/npm/v/ngx-nic-parser?style=flat-square
