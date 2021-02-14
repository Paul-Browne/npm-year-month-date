# npm-year-month-date
YYYY.MM.DD or YYYY-MM-DD with constant width, eg 2021-02-03

### usage

`npm i year-month-date`

or 

`npm i -D year-month-date`

Called with no arguments, the date will be the current date.

```js
const ymd = require('year-month-date')
console.log(ymd());  // 2021-01-02 (if the date was 2nd of Jan 2021)
```

Alternatively pass a date object and/or a custom separator.

```js
const ymd = require('year-month-date')
const inTenDaysTime = new Date(+new Date() + 8.64e+8);
console.log(ymd({
	date: inTenDaysTime,
	separator: "/"
}));  // 2021/01/12 (if the date was 2nd of Jan 2021)
```