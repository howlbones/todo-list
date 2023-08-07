/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/aboutbutton.js":
/*!****************************!*\
  !*** ./src/aboutbutton.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateAboutButton: () => (/* binding */ activateAboutButton)
/* harmony export */ });

function activateAboutButton() {
  const button = document.querySelector('button.about');
  const container = document.querySelector('.about-popup-container');
  button.addEventListener('mouseenter', displayAbout);
  container.addEventListener('mouseleave', hideAbout);

}

function displayAbout() {
  const about = document.querySelector('.about-popup');
  const button = document.querySelector('button.about');
  button.classList.add('active');
  about.style.display = 'flex';
}

function hideAbout() {
  const about = document.querySelector('.about-popup');
  const button = document.querySelector('button.about');
  button.classList.remove('active');
  about.style.display = 'none';
}

/***/ }),

/***/ "./src/addprojectbutton.js":
/*!*********************************!*\
  !*** ./src/addprojectbutton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateAddProjectButton: () => (/* binding */ activateAddProjectButton)
/* harmony export */ });
/* harmony import */ var _iconpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconpack */ "./src/iconpack.js");
/* harmony import */ var _projectmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectmanager */ "./src/projectmanager.js");
/* harmony import */ var _projectbuttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectbuttons */ "./src/projectbuttons.js");




function activateAddProjectButton() {
  const button = document.querySelector('button.add-project');
  
  button.addEventListener('click', showAddProjectField);
}

function showAddProjectField() {
  const button = document.querySelector('button.add-project');
  const container = document.createElement('div');

  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.setAttribute('for', "projectname");
  label.textContent = "Projects name:";
  input.setAttribute('type', 'text');
  input.setAttribute('id', "projectname");
  input.setAttribute('name', 'new-projects-name');
  form.appendChild(label);
  form.appendChild(input);
  
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  iconContainer.classList.add('0');

  for (let i = 0; i < _iconpack__WEBPACK_IMPORTED_MODULE_0__.IconPack.length; i++) {
    const iconButton = document.createElement('button');
    const icon = document.createElement('img');
    icon.src = _iconpack__WEBPACK_IMPORTED_MODULE_0__.IconPack[i];
    iconButton.appendChild(icon);
    iconContainer.appendChild(iconButton);
    iconButton.addEventListener('click', () => {
      const allIconButtons = document.querySelectorAll('.project-add-prompt .icon-container button');
      allIconButtons.forEach((button) => { button.classList.remove('active') });
      iconButton.classList.add('active');
      iconContainer.className = "";
      iconContainer.classList.add('icon-container');
      iconContainer.classList.add(`${i}`);
    })
  }
  
  const submitPromptButton = document.createElement('button');
  submitPromptButton.textContent = "✔";

  container.classList.add('project-add-prompt');
  container.appendChild(form);
  container.appendChild(submitPromptButton);
  container.appendChild(iconContainer);

  button.style.marginTop = "0px";
  button.classList.add('active');
  button.parentNode.insertBefore(container, button);
  removeEventListener(button);
  
  button.addEventListener('click', removeAddProjectField);
  
  activateSubmitPromptButton(submitPromptButton);
  
  window.scrollBy(0, 500);
}

function activateSubmitPromptButton(submitPromptButton) {
  submitPromptButton.addEventListener('click', submitForm);
}

function submitForm() {
  const input = document.querySelector('.project-add-prompt input');
  let name = input.value
  let icon = document.querySelector('.project-add-prompt .icon-container').className;
  
  if (name != "" && icon) {
    icon = icon.split(' ')[1];
    _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject(name, icon);
    removeAddProjectField();
    (0,_projectbuttons__WEBPACK_IMPORTED_MODULE_2__.removeProjectButtonListeners)();
    (0,_projectbuttons__WEBPACK_IMPORTED_MODULE_2__.activateProjectButtons)();
  }
}

function removeEventListener(button) {
  button.removeEventListener('click', showAddProjectField);
  button.removeEventListener('click', removeAddProjectField);
}

function removeAddProjectField() {
  const prompt = document.querySelector('div.project-add-prompt');
  const button = document.querySelector('button.add-project');

  button.classList.remove('active');
  button.style.marginTop = 'auto';
  prompt.remove();

  removeEventListener(button);
  button.addEventListener('click', showAddProjectField);
}

/***/ }),

/***/ "./src/alltasksbutton.js":
/*!*******************************!*\
  !*** ./src/alltasksbutton.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateAllTaskButton: () => (/* binding */ activateAllTaskButton)
/* harmony export */ });
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");



function activateAllTaskButton() {
  const button = document.querySelector('button.all-tasks');
  button.addEventListener('click', displayAll);

}


function displayAll(e) {
  const sidebarButtons = document.querySelectorAll('.side-bar button');
  for (let i = 0; i < sidebarButtons.length; i++ ) {
    sidebarButtons[i].classList.remove('active');
  }

  let target = e.target;
  if (target.tagName !== 'BUTTON') {
  }

  target.classList.add('active');

  _displayproject__WEBPACK_IMPORTED_MODULE_0__.displayContent.all();
}

/***/ }),

/***/ "./src/dateconverter.js":
/*!******************************!*\
  !*** ./src/dateconverter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDateToNumber: () => (/* binding */ convertDateToNumber)
/* harmony export */ });
function convertDateToNumber(text) {
  let array = text.split(' ');
  let day = array[0];
  let month = array[1];
  let year = array[2];
  switch (month) {
    case 'January':
      month = '01';
      break;
    case 'February':
      month = '02';
      break;
    case 'March':
      month = '03';
      break;
    case 'April':
      month = '04';
      break;
    case 'May':
      month = '05';
      break;
    case 'June':
      month = '06';
      break;
    case 'July':
      month = '07';
      break;
    case 'August':
      month = '08';
      break;
    case 'September':
      month = '09';
      break;
    case 'October':
      month = '10';
      break;
    case 'November':
      month = '11';
      break;
    case 'December':
      month = '12';
      break;
    default:
      month = '01';
  }
  return `${year}-${month}-${day}`;
}

/***/ }),

/***/ "./src/displayproject.js":
/*!*******************************!*\
  !*** ./src/displayproject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayContent: () => (/* binding */ displayContent)
/* harmony export */ });
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");
/* harmony import */ var _src_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/plus-gray.png */ "./src/img/plus-gray.png");
/* harmony import */ var _src_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_img_view_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/view.png */ "./src/img/view.png");
/* harmony import */ var _src_img_view_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_img_view_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_img_check_circle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/check-circle.png */ "./src/img/check-circle.png");
/* harmony import */ var _src_img_check_circle_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_img_check_circle_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _newtaskbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newtaskbutton */ "./src/newtaskbutton.js");
/* harmony import */ var _taskbuttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskbuttons */ "./src/taskbuttons.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");








let displayContent = function () {

  let project = function (projectId) {
    clear();

    const projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;
    let project;
    for (let i = 0; i < projects.length; i++) {
      if (projectId == projects[i].id) {
        project = projects[i];
      }
    }
    const projectName = project.name;

    const workspace = document.querySelector('div.workspace');
    workspace.className = "";
    workspace.classList.add('workspace');
    const displayContainer = document.createElement('div');
    displayContainer.classList.add('display-project-container');
    displayContainer.classList.add(`${projectId}`);


    const header = document.createElement('h1');
    header.classList.add('project-name');
    header.textContent = projectName;

    displayContainer.appendChild(header);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    let tasks = project.tasks;

    if (tasks) {
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        const button = document.createElement('button');
        button.classList.add('task');
        button.classList.add(`${task.id}`);
        if (task.status === 'done') {
          button.classList.add('done');
        }
        const title = document.createElement('p');
        title.classList.add('task-title')
        title.textContent = task.title;
        // const divider = document.createElement('div');
        // divider.classList.add('divider');
        const priority = document.createElement('p');
        priority.classList.add('task-priority');
        priority.classList.add(`${task.priority}`);
        priority.textContent = task.priority;
        const date = document.createElement('p');
        date.classList.add('task-date');
        date.textContent = task.dueDate;
        const view = document.createElement('button');
        view.classList.add('view-button');
        const viewImg = document.createElement('img');
        viewImg.src = (_src_img_view_png__WEBPACK_IMPORTED_MODULE_2___default());
        view.append(viewImg);
        const circleIcon = document.createElement('img');
        circleIcon.classList.add('circle-icon');
        circleIcon.src = (_src_img_check_circle_png__WEBPACK_IMPORTED_MODULE_3___default());
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.textContent = "✕";

        button.appendChild(circleIcon);
        button.appendChild(title);
        button.appendChild(priority);
        button.appendChild(date);
        button.appendChild(view);
        button.appendChild(deleteButton);
        // button.appendChild(divider);

        tasksContainer.appendChild(button);
      }
    }

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task-button');
    const addTaskIcon = document.createElement('img');
    addTaskIcon.src = (_src_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_1___default());
    const buttonText = document.createElement('p');
    buttonText.textContent = "New task";

    addTaskButton.appendChild(addTaskIcon);
    addTaskButton.appendChild(buttonText);
    tasksContainer.appendChild(addTaskButton);

    (0,_newtaskbutton__WEBPACK_IMPORTED_MODULE_4__.activateNewTaskButton)(addTaskButton);


    displayContainer.appendChild(tasksContainer);
    workspace.appendChild(displayContainer);

    (0,_taskbuttons__WEBPACK_IMPORTED_MODULE_5__.activateTaskButtons)();
  }

  let today = function () {
    clear();

    let dateNow = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(Date.now(), 'dd MMMM yyyy');

    const projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;
    const workspace = document.querySelector('div.workspace');
    workspace.classList.add('today');

    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    if (projects.length === 0) {
      return;
    }

    for (let i = 0; i < projects.length; i++) {


      const project = projects[i];
      const projectName = project.name;
      let tasks = project.tasks;

      let hasTodaysTask = false;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].dueDate !== dateNow) {
          continue;
        } else {
          hasTodaysTask = true;
        };
      }
      if (!hasTodaysTask) { continue };

      const displayContainer = document.createElement('div');
      displayContainer.classList.add('display-project-container');
      displayContainer.classList.add(`${project.id}`);


      const header = document.createElement('h1');
      header.classList.add('project-name');
      header.textContent = projectName;

      displayContainer.appendChild(header);

      const tasksContainer = document.createElement('div');
      tasksContainer.classList.add('tasks-container');

      if (tasks) {
        for (let i = 0; i < tasks.length; i++) {

          let task = tasks[i];

          if (task.dueDate !== dateNow) {
            continue;
          }

          const button = document.createElement('button');
          button.classList.add('task');
          button.classList.add(`${task.id}`);
          if (task.status === 'done') {
            button.classList.add('done');
          }
          const title = document.createElement('p');
          title.classList.add('task-title')
          title.textContent = task.title;
          const priority = document.createElement('p');
          priority.classList.add('task-priority');
          priority.classList.add(`${task.priority}`);
          priority.textContent = task.priority;
          const date = document.createElement('p');
          date.classList.add('task-date');
          date.textContent = task.dueDate;
          const view = document.createElement('button');
          view.classList.add('view-button');
          const viewImg = document.createElement('img');
          viewImg.src = (_src_img_view_png__WEBPACK_IMPORTED_MODULE_2___default());
          view.append(viewImg);
          const circleIcon = document.createElement('img');
          circleIcon.classList.add('circle-icon');
          circleIcon.src = (_src_img_check_circle_png__WEBPACK_IMPORTED_MODULE_3___default());
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete-task');
          deleteButton.textContent = "✕";

          button.appendChild(circleIcon);
          button.appendChild(title);
          button.appendChild(priority);
          button.appendChild(date);
          button.appendChild(view);
          button.appendChild(deleteButton);

          tasksContainer.appendChild(button);
        }
      }

      const addTaskButton = document.createElement('button');
      addTaskButton.classList.add('add-task-button');
      const addTaskIcon = document.createElement('img');
      addTaskIcon.src = (_src_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_1___default());
      const buttonText = document.createElement('p');
      buttonText.textContent = "New task";

      addTaskButton.appendChild(addTaskIcon);
      addTaskButton.appendChild(buttonText);
      tasksContainer.appendChild(addTaskButton);

      (0,_newtaskbutton__WEBPACK_IMPORTED_MODULE_4__.activateNewTaskButton)(addTaskButton);

      displayContainer.appendChild(tasksContainer);

      if (i == 0 || i % 2 === 0) {
        leftSide.appendChild(displayContainer);
      } else {
        rightSide.appendChild(displayContainer);
      }
    }


    workspace.appendChild(leftSide);
    workspace.appendChild(rightSide);
    (0,_taskbuttons__WEBPACK_IMPORTED_MODULE_5__.activateTaskButtons)();
  }

  let all = function () {
    clear();

    const projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;
    const workspace = document.querySelector('div.workspace');
    workspace.classList.add('all');

    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    for (let i = 0; i < projects.length; i++) {

      const project = projects[i];
      const projectName = project.name;

      if (project.tasks.length === 0) {
        continue;
      }

      const displayContainer = document.createElement('div');
      displayContainer.classList.add('display-project-container');
      displayContainer.classList.add(`${project.id}`);


      const header = document.createElement('h1');
      header.classList.add('project-name');
      header.textContent = projectName;

      displayContainer.appendChild(header);

      const tasksContainer = document.createElement('div');
      tasksContainer.classList.add('tasks-container');

      let tasks = project.tasks;


      if (tasks) {
        for (let i = 0; i < tasks.length; i++) {
          let task = tasks[i];

          const button = document.createElement('button');
          button.classList.add('task');
          button.classList.add(`${task.id}`);
          if (task.status === 'done') {
            button.classList.add('done');
          }
          const title = document.createElement('p');
          title.classList.add('task-title')
          title.textContent = task.title;
          const priority = document.createElement('p');
          priority.classList.add('task-priority');
          priority.classList.add(`${task.priority}`);
          priority.textContent = task.priority;
          const date = document.createElement('p');
          date.classList.add('task-date');
          date.textContent = task.dueDate;
          const view = document.createElement('button');
          view.classList.add('view-button');
          const viewImg = document.createElement('img');
          viewImg.src = (_src_img_view_png__WEBPACK_IMPORTED_MODULE_2___default());
          view.append(viewImg);
          const circleIcon = document.createElement('img');
          circleIcon.classList.add('circle-icon');
          circleIcon.src = (_src_img_check_circle_png__WEBPACK_IMPORTED_MODULE_3___default());
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete-task');
          deleteButton.textContent = "✕";

          button.appendChild(circleIcon);
          button.appendChild(title);
          button.appendChild(priority);
          button.appendChild(date);
          button.appendChild(view);
          button.appendChild(deleteButton);

          tasksContainer.appendChild(button);
        }
      }

      const addTaskButton = document.createElement('button');
      addTaskButton.classList.add('add-task-button');
      const addTaskIcon = document.createElement('img');
      addTaskIcon.src = (_src_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_1___default());
      const buttonText = document.createElement('p');
      buttonText.textContent = "New task";

      addTaskButton.appendChild(addTaskIcon);
      addTaskButton.appendChild(buttonText);
      tasksContainer.appendChild(addTaskButton);

      (0,_newtaskbutton__WEBPACK_IMPORTED_MODULE_4__.activateNewTaskButton)(addTaskButton);


      displayContainer.appendChild(tasksContainer);

      if (leftSide.children.length === 0) {
        leftSide.appendChild(displayContainer);
      } else if (leftSide.children.length > rightSide.children.length) {
        rightSide.appendChild(displayContainer);
      } else {
        leftSide.appendChild(displayContainer);
      }


    }


    workspace.appendChild(leftSide);
    workspace.appendChild(rightSide);
    (0,_taskbuttons__WEBPACK_IMPORTED_MODULE_5__.activateTaskButtons)();
  }

  let important = function () {
    clear();

    const projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;
    const workspace = document.querySelector('div.workspace');
    workspace.classList.add('important');

    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    if (projects.length === 0) {
      return;
    }

    for (let i = 0; i < projects.length; i++) {

      const project = projects[i];
      const projectName = project.name;
      let tasks = project.tasks;

      let hasImportant = false;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].priority !== 'high') {
          continue;
        } else {
          hasImportant = true;
        };
      }
      if (!hasImportant) { continue };


      const displayContainer = document.createElement('div');
      displayContainer.classList.add('display-project-container');
      displayContainer.classList.add(`${project.id}`);

      const header = document.createElement('h1');
      header.classList.add('project-name');
      header.textContent = projectName;

      displayContainer.appendChild(header);

      const tasksContainer = document.createElement('div');
      tasksContainer.classList.add('tasks-container');


      if (tasks) {
        for (let i = 0; i < tasks.length; i++) {
          let task = tasks[i];

          if (task.priority !== 'high') { continue };

          const button = document.createElement('button');
          button.classList.add('task');
          button.classList.add(`${task.id}`);
          if (task.status === 'done') {
            button.classList.add('done');
          }
          const title = document.createElement('p');
          title.classList.add('task-title')
          title.textContent = task.title;
          const priority = document.createElement('p');
          priority.classList.add('task-priority');
          priority.classList.add(`${task.priority}`);
          priority.textContent = task.priority;
          const date = document.createElement('p');
          date.classList.add('task-date');
          date.textContent = task.dueDate;
          const view = document.createElement('button');
          view.classList.add('view-button');
          const viewImg = document.createElement('img');
          viewImg.src = (_src_img_view_png__WEBPACK_IMPORTED_MODULE_2___default());
          view.append(viewImg);
          const circleIcon = document.createElement('img');
          circleIcon.classList.add('circle-icon');
          circleIcon.src = (_src_img_check_circle_png__WEBPACK_IMPORTED_MODULE_3___default());
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete-task');
          deleteButton.textContent = "✕";

          button.appendChild(circleIcon);
          button.appendChild(title);
          button.appendChild(priority);
          button.appendChild(date);
          button.appendChild(view);
          button.appendChild(deleteButton);

          tasksContainer.appendChild(button);
        }
      }

      const addTaskButton = document.createElement('button');
      addTaskButton.classList.add('add-task-button');
      const addTaskIcon = document.createElement('img');
      addTaskIcon.src = (_src_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_1___default());
      const buttonText = document.createElement('p');
      buttonText.textContent = "New task";

      addTaskButton.appendChild(addTaskIcon);
      addTaskButton.appendChild(buttonText);
      tasksContainer.appendChild(addTaskButton);

      (0,_newtaskbutton__WEBPACK_IMPORTED_MODULE_4__.activateNewTaskButton)(addTaskButton);


      displayContainer.appendChild(tasksContainer);


      if (leftSide.children.length === 0) {
        leftSide.appendChild(displayContainer);
      } else if (leftSide.children.length > rightSide.children.length) {
        rightSide.appendChild(displayContainer);
      } else {
        leftSide.appendChild(displayContainer);
      }
    }


    workspace.appendChild(leftSide);
    workspace.appendChild(rightSide);
    (0,_taskbuttons__WEBPACK_IMPORTED_MODULE_5__.activateTaskButtons)();
  }

  let clear = function () {
    const content = document.querySelector('.display-project-container');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const workspace = document.querySelector('.workspace');
    workspace.classList.remove('all');
    workspace.classList.remove('today');
    workspace.classList.remove('important');
    if (content) { content.remove() };
    if (leftSide) { leftSide.remove() };
    if (rightSide) { rightSide.remove() };
  }

  return { project, clear, today, all, important }
}();

/***/ }),

/***/ "./src/displaytoday.js":
/*!*****************************!*\
  !*** ./src/displaytoday.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayToday: () => (/* binding */ displayToday)
/* harmony export */ });
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");


function displayToday(e) {
  const sidebarButtons = document.querySelectorAll('.side-bar button');
  for (let i = 0; i < sidebarButtons.length; i++ ) {
    sidebarButtons[i].classList.remove('active');
  }

  let target = e.target;
  if (target.tagName !== 'BUTTON') {
    target = target.closest('button');
  }

  target.classList.add('active');

  _displayproject__WEBPACK_IMPORTED_MODULE_0__.displayContent.today();

  
}

/***/ }),

/***/ "./src/iconpack.js":
/*!*************************!*\
  !*** ./src/iconpack.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPack: () => (/* binding */ IconPack)
/* harmony export */ });
/* harmony import */ var _img_iconpack_blackcircle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/iconpack/blackcircle.png */ "./src/img/iconpack/blackcircle.png");
/* harmony import */ var _img_iconpack_blackcircle_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_blackcircle_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_iconpack_bluecircle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/iconpack/bluecircle.png */ "./src/img/iconpack/bluecircle.png");
/* harmony import */ var _img_iconpack_bluecircle_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_bluecircle_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_iconpack_greencircle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/iconpack/greencircle.png */ "./src/img/iconpack/greencircle.png");
/* harmony import */ var _img_iconpack_greencircle_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_greencircle_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_iconpack_redcircle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/iconpack/redcircle.png */ "./src/img/iconpack/redcircle.png");
/* harmony import */ var _img_iconpack_redcircle_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_redcircle_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_iconpack_yellowcircle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/iconpack/yellowcircle.png */ "./src/img/iconpack/yellowcircle.png");
/* harmony import */ var _img_iconpack_yellowcircle_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_yellowcircle_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_iconpack_bookmark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/iconpack/bookmark.png */ "./src/img/iconpack/bookmark.png");
/* harmony import */ var _img_iconpack_bookmark_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_bookmark_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_iconpack_clock_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/iconpack/clock.png */ "./src/img/iconpack/clock.png");
/* harmony import */ var _img_iconpack_clock_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_clock_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_iconpack_important_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/iconpack/important.png */ "./src/img/iconpack/important.png");
/* harmony import */ var _img_iconpack_important_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_important_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_iconpack_person_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/iconpack/person.png */ "./src/img/iconpack/person.png");
/* harmony import */ var _img_iconpack_person_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_person_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_iconpack_personcheckmark_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/iconpack/personcheckmark.png */ "./src/img/iconpack/personcheckmark.png");
/* harmony import */ var _img_iconpack_personcheckmark_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_iconpack_personcheckmark_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_alltasks_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/alltasks.png */ "./src/img/alltasks.png");
/* harmony import */ var _img_alltasks_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_alltasks_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_home_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/home.png */ "./src/img/home.png");
/* harmony import */ var _img_home_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_home_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_important_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/important.png */ "./src/img/important.png");
/* harmony import */ var _img_important_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_important_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_plus_gray_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/plus-gray.png */ "./src/img/plus-gray.png");
/* harmony import */ var _img_plus_gray_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_plus_gray_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_plus_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/plus.png */ "./src/img/plus.png");
/* harmony import */ var _img_plus_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_plus_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_today_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/today.png */ "./src/img/today.png");
/* harmony import */ var _img_today_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_today_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_view_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/view.png */ "./src/img/view.png");
/* harmony import */ var _img_view_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_view_png__WEBPACK_IMPORTED_MODULE_16__);



















let IconPack = function () {
  const BlackCircle = (_img_iconpack_blackcircle_png__WEBPACK_IMPORTED_MODULE_0___default());
  const BlueCircle = (_img_iconpack_bluecircle_png__WEBPACK_IMPORTED_MODULE_1___default());
  const GreenCircle = (_img_iconpack_greencircle_png__WEBPACK_IMPORTED_MODULE_2___default());
  const RedCircle = (_img_iconpack_redcircle_png__WEBPACK_IMPORTED_MODULE_3___default());
  const YellowCircle = (_img_iconpack_yellowcircle_png__WEBPACK_IMPORTED_MODULE_4___default());
  const BookmarkIcon = (_img_iconpack_bookmark_png__WEBPACK_IMPORTED_MODULE_5___default());
  const ClockIcon = (_img_iconpack_clock_png__WEBPACK_IMPORTED_MODULE_6___default());
  const ImportantIcon = (_img_iconpack_important_png__WEBPACK_IMPORTED_MODULE_7___default());
  const PersonCheckLogo = (_img_iconpack_personcheckmark_png__WEBPACK_IMPORTED_MODULE_9___default());
  const PersonLogo = (_img_iconpack_person_png__WEBPACK_IMPORTED_MODULE_8___default()); 

  return [ 
    BlackCircle,
    BlueCircle,
    GreenCircle,
    RedCircle,
    YellowCircle,
    BookmarkIcon,
    ClockIcon,
    ImportantIcon,
    PersonCheckLogo,
    PersonLogo
  ]
  
}();

/***/ }),

/***/ "./src/img/alltasks.png":
/*!******************************!*\
  !*** ./src/img/alltasks.png ***!
  \******************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/check-circle.png":
/*!**********************************!*\
  !*** ./src/img/check-circle.png ***!
  \**********************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/home.png":
/*!**************************!*\
  !*** ./src/img/home.png ***!
  \**************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/blackcircle.png":
/*!******************************************!*\
  !*** ./src/img/iconpack/blackcircle.png ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/bluecircle.png":
/*!*****************************************!*\
  !*** ./src/img/iconpack/bluecircle.png ***!
  \*****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/bookmark.png":
/*!***************************************!*\
  !*** ./src/img/iconpack/bookmark.png ***!
  \***************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/clock.png":
/*!************************************!*\
  !*** ./src/img/iconpack/clock.png ***!
  \************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/greencircle.png":
/*!******************************************!*\
  !*** ./src/img/iconpack/greencircle.png ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/important.png":
/*!****************************************!*\
  !*** ./src/img/iconpack/important.png ***!
  \****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/person.png":
/*!*************************************!*\
  !*** ./src/img/iconpack/person.png ***!
  \*************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/personcheckmark.png":
/*!**********************************************!*\
  !*** ./src/img/iconpack/personcheckmark.png ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/redcircle.png":
/*!****************************************!*\
  !*** ./src/img/iconpack/redcircle.png ***!
  \****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/iconpack/yellowcircle.png":
/*!*******************************************!*\
  !*** ./src/img/iconpack/yellowcircle.png ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/important.png":
/*!*******************************!*\
  !*** ./src/img/important.png ***!
  \*******************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/plus-gray.png":
/*!*******************************!*\
  !*** ./src/img/plus-gray.png ***!
  \*******************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/plus.png":
/*!**************************!*\
  !*** ./src/img/plus.png ***!
  \**************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/today.png":
/*!***************************!*\
  !*** ./src/img/today.png ***!
  \***************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/img/view.png":
/*!**************************!*\
  !*** ./src/img/view.png ***!
  \**************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/importantbutton.js":
/*!********************************!*\
  !*** ./src/importantbutton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateImportantButton: () => (/* binding */ activateImportantButton)
/* harmony export */ });
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");




function activateImportantButton() {
  const button = document.querySelector('button.important');
  button.addEventListener('click', displayImportant);

}


function displayImportant(e) {
  const sidebarButtons = document.querySelectorAll('.side-bar button');
  for (let i = 0; i < sidebarButtons.length; i++ ) {
    sidebarButtons[i].classList.remove('active');
  }

  let target = e.target;
  if (target.tagName !== 'BUTTON') {
    target = target.closest('button');
  }

  target.classList.add('active');

  _displayproject__WEBPACK_IMPORTED_MODULE_0__.displayContent.important();
}

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n| @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n| ");

/***/ }),

/***/ "./src/newtaskbutton.js":
/*!******************************!*\
  !*** ./src/newtaskbutton.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateNewTaskButton: () => (/* binding */ activateNewTaskButton)
/* harmony export */ });
/* harmony import */ var _newtaskform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newtaskform */ "./src/newtaskform.js");



function activateNewTaskButton (button) {
 button.addEventListener('click', _newtaskform__WEBPACK_IMPORTED_MODULE_0__.taskForm.show);
}





/***/ }),

/***/ "./src/newtaskform.js":
/*!****************************!*\
  !*** ./src/newtaskform.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskForm: () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _taskmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskmanager */ "./src/taskmanager.js");
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");



let taskForm = function () {
  let show = function (e) {
    const body = document.querySelector('body');
    const darkScreen = document.createElement('div');
    darkScreen.classList.add('dark-screen');
    const form = document.createElement('form');
    form.classList.add('task-form');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'tasktitle');
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'tasktitle');
    titleInput.setAttribute('name', 'tasktitle');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'taskdesc');
    descriptionLabel.textContent = 'Description';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('cols', '40');
    descriptionInput.setAttribute('rows', '3');
    descriptionInput.setAttribute('name', 'taskdesc');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'taskdate');
    dateLabel.textContent = 'Due date';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'taskdate');
    dateInput.setAttribute('name', 'taskdate');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('priority-button-container');
    const lowPriorityButton = document.createElement('button');
    lowPriorityButton.classList.add('priority-button');
    lowPriorityButton.classList.add('low');
    lowPriorityButton.classList.add('selected');
    lowPriorityButton.textContent = 'low';
    lowPriorityButton.setAttribute('type', 'button');
    const mediumPriorityButton = document.createElement('button');
    mediumPriorityButton.classList.add('priority-button');
    mediumPriorityButton.classList.add('medium');
    mediumPriorityButton.textContent = 'medium';
    mediumPriorityButton.setAttribute('type', 'button');
    const highPriorityButton = document.createElement('button');
    highPriorityButton.classList.add('priority-button');
    highPriorityButton.classList.add('high');
    highPriorityButton.textContent = 'high';
    highPriorityButton.setAttribute('type', 'button');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add task';
    submitButton.classList.add('task-form-submit');
    submitButton.setAttribute('type', 'button');

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Cancel';
    exitButton.classList.add('cancel-button');
    exitButton.setAttribute('type', 'button');


    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    buttonContainer.appendChild(lowPriorityButton);
    buttonContainer.appendChild(mediumPriorityButton);
    buttonContainer.appendChild(highPriorityButton);
    form.appendChild(buttonContainer);
    form.appendChild(submitButton);
    form.appendChild(exitButton);
    darkScreen.appendChild(form);
    body.appendChild(darkScreen);

    lowPriorityButton.addEventListener('click', () => {
      lowPriorityButton.classList.add('selected');
      mediumPriorityButton.classList.remove('selected');
      highPriorityButton.classList.remove('selected');
    })

    mediumPriorityButton.addEventListener('click', () => {
      mediumPriorityButton.classList.add('selected');
      lowPriorityButton.classList.remove('selected');
      highPriorityButton.classList.remove('selected');
    })

    highPriorityButton.addEventListener('click', () => {
      highPriorityButton.classList.add('selected');
      lowPriorityButton.classList.remove('selected');
      mediumPriorityButton.classList.remove('selected');
    })


    let projectId = e.target.closest('div.display-project-container');
    projectId = parseInt(projectId.className.split(' ')[1]);

    exitButton.addEventListener('click', () => {
      darkScreen.remove();
    })

    submitButton.addEventListener('click', () => {
      if (titleInput.value != "" && dateInput.value != "") {
        let priority = document.querySelector('.priority-button.selected');
        priority = priority.className.split(' ')[1];
        let currentContent = document.querySelector('.display-project-container');
        currentContent.remove();
        _taskmanager__WEBPACK_IMPORTED_MODULE_0__.taskManager.addTask(projectId, titleInput.value, descriptionInput.value, dateInput.valueAsDate, Date.now(), priority);
        darkScreen.remove();

        let selectedButton = document.querySelector('.side-bar button.active');
        selectedButton = selectedButton.className.split(' ')[0];


        if (selectedButton === 'today') {
          _displayproject__WEBPACK_IMPORTED_MODULE_1__.displayContent.today();
        } else if (selectedButton === 'important') {
          _displayproject__WEBPACK_IMPORTED_MODULE_1__.displayContent.important();
        } else if (selectedButton === 'all-tasks') {
          _displayproject__WEBPACK_IMPORTED_MODULE_1__.displayContent.all();
        } else {
          _displayproject__WEBPACK_IMPORTED_MODULE_1__.displayContent.project(projectId)
        }

      } else {
        if (titleInput.value === "") {
          titleInput.classList.add('invalid');
        }
        if (dateInput.value === "") {
          dateInput.classList.add("invalid");
        }
      }
    })



  }
  return { show };
}();

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _taskmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskmanager */ "./src/taskmanager.js");


function Project() {
  let id = "";
  let name = "";
  let tasks = [];
  let icon;
  let addTask = function(title, desc, dueDate, priority) {
    _taskmanager__WEBPACK_IMPORTED_MODULE_0__.taskManager.addTask(title, desc, dueDate, priority);
  }
  let deleteTask = function(id) {
    _taskmanager__WEBPACK_IMPORTED_MODULE_0__.taskManager.deleteTask(id);
  }
  return {name, tasks, icon, addTask, deleteTask};
}

/***/ }),

/***/ "./src/projectbuttons.js":
/*!*******************************!*\
  !*** ./src/projectbuttons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateProjectButtons: () => (/* binding */ activateProjectButtons),
/* harmony export */   removeProjectButtonListeners: () => (/* binding */ removeProjectButtonListeners)
/* harmony export */ });
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");
/* harmony import */ var _projectmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectmanager */ "./src/projectmanager.js");
/* harmony import */ var _projectrender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectrender */ "./src/projectrender.js");




function activateProjectButtons() {
  const buttons = document.querySelectorAll("button.project");
  const deleteButtons = document.querySelectorAll('button.delete-project-button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', requestProject);
  }

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteProject);
  }
}

function deleteProject(e) {
  e.stopPropagation();
  let id = e.target.closest('button.project');
  id = id.className.split(' ')[1];
  _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager.deleteProject(parseInt(id));
  removeProjectButtonListeners();
  (0,_projectrender__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
  document.querySelector('button.all-tasks').classList.add('active');
  _displayproject__WEBPACK_IMPORTED_MODULE_0__.displayContent.all();
  activateProjectButtons();
}

function removeProjectButtonListeners() {
  const buttons = document.querySelectorAll("button.project");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', requestProject);
  }
}

function requestProject(e) {
  let target = e.target;
  if (target.tagName === 'BUTTON') {
  } else {
    target = target.closest('button');
  }

  const buttons = document.querySelectorAll(".side-bar button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  target.classList.add('active');

  let id = target.className.split(' ')[1];

  _displayproject__WEBPACK_IMPORTED_MODULE_0__.displayContent.project(parseInt(id));
}

/***/ }),

/***/ "./src/projectcollection.js":
/*!**********************************!*\
  !*** ./src/projectcollection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectCollection: () => (/* binding */ ProjectCollection)
/* harmony export */ });
let ProjectCollection = function() {
  let projects = [];

  return {projects};
}();

/***/ }),

/***/ "./src/projecteditor.js":
/*!******************************!*\
  !*** ./src/projecteditor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProject: () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");


let editProject = function () {
  let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;

  let changeName = function (projectId, newName) {

    let project;
    let oldName;

    // Search for the needed project by ID
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        project = projects[i];
        oldName = project.name;
        project.name = newName;
      }
    }
    if (!project) {
      return
    }

  }

  return { changeName }
}();

/***/ }),

/***/ "./src/projectmanager.js":
/*!*******************************!*\
  !*** ./src/projectmanager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectManager: () => (/* binding */ projectManager)
/* harmony export */ });
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projecteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projecteditor */ "./src/projecteditor.js");
/* harmony import */ var _iconpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconpack */ "./src/iconpack.js");
/* harmony import */ var _projectrender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectrender */ "./src/projectrender.js");






let projectManager = function () {

  function addProject(name, iconId, id) {
    let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)();
    const projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;

    // Finding a unique id for a project
    if (!id) {
      id = Math.floor(Math.random() * 10000);
      for (let i = 0; i < projects.length; i++) {
        while (projects[i].id == id) {
          id = Math.floor(Math.random() * 10000);
        }
      }
    }

    newProject.id = id;
    newProject.name = name;
    newProject.icon = _iconpack__WEBPACK_IMPORTED_MODULE_3__.IconPack[iconId];
    _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects.push(newProject);

    localStorage.setItem(`project ${id}`, JSON.stringify({
      "id": id,
      "name": name,
      "icon": iconId
    }));


    (0,_projectrender__WEBPACK_IMPORTED_MODULE_4__.renderProjects)();
  }


  function deleteProject(id) {
    let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {
        projects.splice(i, 1);
      }
    }

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = JSON.parse(localStorage[key]);
      if (key.split(' ')[0] === 'project') {
        if (value.id == id) {
          localStorage.removeItem(key);
          i--;
        }
      } else {
        if (value.projectId == id) {
          localStorage.removeItem(key);
          i--;
        }
      }
    }
  }


  function renameProject(projectId, newName) {
    _projecteditor__WEBPACK_IMPORTED_MODULE_2__.editProject.changeName(projectId, newName);
  }

  return { addProject, deleteProject, renameProject }
}();

/***/ }),

/***/ "./src/projectrender.js":
/*!******************************!*\
  !*** ./src/projectrender.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");


function renderProjects() {
  let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;
  const projectContainer = document.querySelector('.projects-container');
  const renderedProjects = document.querySelectorAll('.project');

  if (renderedProjects) {
    for (let i = 0; i < renderedProjects.length; i++) {
      renderedProjects[i].remove();
    }
  }

  for (let i = 0; i < projects.length; i++) {
    const button = document.createElement('button');
    const icon = document.createElement('img');
    const name = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-project-button');
    deleteButton.textContent = "✕";
    let id = String(projects[i].id);
    button.classList.add(`project`);
    button.classList.add(id);
    icon.src = projects[i].icon;
    name.textContent = projects[i].name;

    button.appendChild(icon);
    button.appendChild(name);
    button.appendChild(deleteButton);
    projectContainer.appendChild(button);
  }
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
function Task() {
  return {
    id: 0,
    title: "",
    description: "",
    dueDate: "",
    dateCreated: "",
    priority: "",
    status: "",

    info: function () {
      return [this.title,
      this.description,
      this.dueDate,
      this.priority,
      this.status];
    }
  }
}

/***/ }),

/***/ "./src/taskbuttons.js":
/*!****************************!*\
  !*** ./src/taskbuttons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateTaskButtons: () => (/* binding */ activateTaskButtons)
/* harmony export */ });
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");
/* harmony import */ var _viewtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewtask */ "./src/viewtask.js");
/* harmony import */ var _taskmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskmanager */ "./src/taskmanager.js");
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");






function activateTaskButtons() {
  const tasks = document.querySelectorAll("button.task");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].className !== 'view-button' || tasks[i].className !== 'delete-task') {
      tasks[i].addEventListener('click', crossOut);
      const viewButton = tasks[i].querySelector('.view-button');
      viewButton.addEventListener('click', _viewtask__WEBPACK_IMPORTED_MODULE_1__.viewTask);
      const deleteButton = tasks[i].querySelector('.delete-task');
      deleteButton.addEventListener('click', deleteTask);
    }

  }

}

function deleteTask(e) {
  let target = e.target;
  let taskId = target.closest('.task').className.split(' ')[1];
  let projectId = target.closest('.display-project-container').className.split(' ')[1];
  let displayType = document.querySelector('.workspace');
  displayType = displayType.className.split(' ')[1];

  _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.deleteTask(parseInt(projectId), parseInt(taskId));


  if (!displayType) {
    _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.project(projectId);
  } else if (displayType === 'today') {
    _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.today();
  } else if (displayType === 'all') {
    _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.all();
  } else if (displayType === 'important') {
    _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.important();
  }

}


function crossOut(e) {
  let target = e.target;
  if (target.tagName === 'BUTTON') {
  } else {
    target = target.closest('button');
  }
  if (target.className === 'view-button' || target.className === 'delete-task') {
    return;
  }

  let projectId = target.closest('div.display-project-container');
  projectId = projectId.className.split(" ")[1];
  let taskId = target.className.split(" ")[1];

  let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;
  let project, task;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id == projectId) {
      project = projects[i];
      for (let j = 0; j < project.tasks.length; j++) {
        if (project.tasks[j].id == taskId){
          task = project.tasks[j];
        }
      }
    }
  }

  
  let newStatus;
  if (!target.className.split(" ")[2]) {
    target.classList.add('done');
    task.status = "done";
    newStatus = "done";
  } else {
    target.classList.remove('done');
    task.status = "active";
    newStatus = 'active';
  }
  

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.split(' ')[0] === 'task') {
      let value = JSON.parse(localStorage[key]);
      if (value.id == taskId) {
        localStorage.removeItem(key);
        value.status = newStatus;
        localStorage.setItem(key, JSON.stringify(value));
        break;
      }
    }
  }

}

/***/ }),

/***/ "./src/taskeditor.js":
/*!***************************!*\
  !*** ./src/taskeditor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");


let editTask = function () {

  let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;

  let _findTask = function (projectId, taskId) {
    let project;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        project = projects[i];
        break;
      }
    }
    if (!project) {
      console.log('Project with given ID not found');
    }

    let found = false;
    for (let i = 0; i < project.tasks.length; i++) {
      if (project.tasks[i].id === taskId) {
        found = true;
        return project.tasks[i];
      }
    }
    if (!found) {
      console.group('Task with this ID not found');
      return null;
    }
  }


  let changeTitle = function (projectId, taskId, newTitle) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.title = newTitle;
  }


  let changeDescription = function (projectId, taskId, newDesc) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.description = newDesc;
  }


  let changeDueDate = function (projectId, taskId, newDate) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.dueDate = newDate;
  }


  let changePriority = function (projectId, taskId, newPriority) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.priority = newPriority;
  }

  return { changeTitle, changeDescription, changeDueDate, changePriority }
}();

/***/ }),

/***/ "./src/taskmanager.js":
/*!****************************!*\
  !*** ./src/taskmanager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskManager: () => (/* binding */ taskManager)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _taskeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskeditor */ "./src/taskeditor.js");
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");






let taskManager = function () {

  let addTask = function (projectId, title, desc, dueDate, creationDate, priority, status) {
    let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__.Task)();
    let project;

    // Find the correct project object that the task will reside in
    for (let i = 0; i < _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects.length; i++) {
      if (_projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects[i].id == projectId) {
        project = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects[i];
      }
    }
    if (!project) {
      console.log('Incorrect Project ID given. Need an existing ID')
      return;
    }

    // Making the new task id unique
    let id = Math.floor(Math.random() * 10000);
    for (let i = 0; i < project.tasks; i++) {
      while (project.tasks[i].id == id) {
        id = Math.floor(Math.random() * 10000);
      }
    }

    newTask.id = id;
    newTask.projectId = projectId;
    newTask.title = title;
    newTask.description = desc;
    let formated = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(creationDate), 'HH:mm | dd MMMM yyyy');
    if (formated) {
      newTask.dateCreated = formated;
    } else {
      newTask.dateCreated = creationDate;
    }
    formated = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(dueDate), 'dd MMMM yyyy');
    if (formated) {
      newTask.dueDate = formated;
    } else {
      newTask.dueDate = dueDate;
    }
    newTask.priority = priority;
    (status) ? newTask.status = status : newTask.status = 'active';
    project.tasks.push(newTask);


    localStorage.setItem(`task ${projectId} ${id}`, JSON.stringify({
      "id": id,
      "projectId": projectId,
      "title": title,
      "description": desc,
      "dateCreated": creationDate,
      "dueDate": dueDate,
      "priority": priority,
      "status": newTask.status
    }));
  }

  let deleteTask = function (projectId, taskId) {
    let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;
    let project;

    // Searching for the project by ID
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        project = projects[i];
      }
    }
    if (!project) {
      console.log("Can't delete task. Project with this id not found");
      return
    }

    // Searching for the task by ID
    let found = false;
    for (let i = 0; i < project.tasks.length; i++) {
      if (project.tasks[i].id === taskId) {
        project.tasks.splice(i, 1);
        found = true;
      }
    }
    if (!found) {
      console.log('No task with this ID found.')
      return
    }

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.split(' ')[0] === 'task') {
        let value = JSON.parse(localStorage[key]);
        if (value.id == taskId && value.projectId == projectId) {
          localStorage.removeItem(key);
          break;
        }
      }
    }

    _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.clear();
  }


  let changeTitle = function (projectId, taskId, newTitle) {
    _taskeditor__WEBPACK_IMPORTED_MODULE_2__.editTask.changeTitle(projectId, taskId, newTitle);
  }

  let changeDescription = function (projectId, taskId, newDesc) {
    _taskeditor__WEBPACK_IMPORTED_MODULE_2__.editTask.changeDescription(projectId, taskId, newDesc);
  }

  let changeDate = function (projectId, taskId, newDate) {
    newDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(newDate, 'dd MMMM yyyy');
    _taskeditor__WEBPACK_IMPORTED_MODULE_2__.editTask.changeDueDate(projectId, taskId, newDate);
  }

  let changePriority = function (projectId, taskId, newPriority) {
    _taskeditor__WEBPACK_IMPORTED_MODULE_2__.editTask.changePriority(projectId, taskId, newPriority);
  }

  return { addTask, deleteTask, changeTitle, changeDate, changePriority, changeDescription };
}();

/***/ }),

/***/ "./src/todaybutton.js":
/*!****************************!*\
  !*** ./src/todaybutton.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateTodayButton: () => (/* binding */ activateTodayButton)
/* harmony export */ });
/* harmony import */ var _displaytoday__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaytoday */ "./src/displaytoday.js");


function activateTodayButton() {
  const button = document.querySelector('button.today');
  button.addEventListener('click', _displaytoday__WEBPACK_IMPORTED_MODULE_0__.displayToday);
}


/***/ }),

/***/ "./src/viewtask.js":
/*!*************************!*\
  !*** ./src/viewtask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewTask: () => (/* binding */ viewTask)
/* harmony export */ });
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");
/* harmony import */ var _taskmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskmanager */ "./src/taskmanager.js");
/* harmony import */ var _dateconverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateconverter */ "./src/dateconverter.js");
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");






function viewTask(e) {
  let taskId = parseInt(e.target.closest('.task').className.split(' ')[1]);
  let projectId = e.target.closest('div.display-project-container');
  projectId = parseInt(projectId.className.split(" ")[1]);
  let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;

  let project, task;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id == projectId) {
      project = projects[i];
      for (let j = 0; j < project.tasks.length; j++) {
        if (project.tasks[j].id == taskId) {
          task = project.tasks[j];
        }
      }
    }
  }


  const body = document.querySelector('body');
  const darkScreen = document.createElement('div');
  darkScreen.classList.add('dark-screen');
  const form = document.createElement('form');
  form.classList.add('task-form');

  const dateCreated = document.createElement('p');
  dateCreated.textContent = `Date created: ${task.dateCreated}`;
  dateCreated.classList.add('date-created');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'tasktitle');
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'tasktitle');
  titleInput.setAttribute('name', 'tasktitle');
  titleInput.value = task.title;

  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'taskdesc');
  descriptionLabel.textContent = 'Description';
  const descriptionInput = document.createElement('textarea');
  descriptionInput.setAttribute('cols', '40');
  descriptionInput.setAttribute('rows', '3');
  descriptionInput.setAttribute('name', 'taskdesc');
  descriptionInput.textContent = task.description;

  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'taskdate');
  dateLabel.textContent = 'Due date';
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'taskdate');
  dateInput.setAttribute('name', 'taskdate');
  dateInput.value = (0,_dateconverter__WEBPACK_IMPORTED_MODULE_2__.convertDateToNumber)(task.dueDate);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('priority-button-container');
  const lowPriorityButton = document.createElement('button');
  lowPriorityButton.classList.add('priority-button');
  lowPriorityButton.classList.add('low');
  lowPriorityButton.textContent = 'low';
  lowPriorityButton.setAttribute('type', 'button');
  const mediumPriorityButton = document.createElement('button');
  mediumPriorityButton.classList.add('priority-button');
  mediumPriorityButton.classList.add('medium');
  mediumPriorityButton.textContent = 'medium';
  mediumPriorityButton.setAttribute('type', 'button');
  const highPriorityButton = document.createElement('button');
  highPriorityButton.classList.add('priority-button');
  highPriorityButton.classList.add('high');
  highPriorityButton.textContent = 'high';
  highPriorityButton.setAttribute('type', 'button');

  if (task.priority === 'low') {
    lowPriorityButton.classList.add('selected');
  } else if (task.priority === 'medium') {
    mediumPriorityButton.classList.add('selected');
  } else if (task.priority === 'high') {
    highPriorityButton.classList.add('selected');
  }

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Update task';
  submitButton.classList.add('task-form-submit');
  submitButton.setAttribute('type', 'button');

  const exitButton = document.createElement('button');
  exitButton.textContent = 'Cancel';
  exitButton.classList.add('cancel-button');
  exitButton.setAttribute('type', 'button');


  form.appendChild(dateCreated);
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  buttonContainer.appendChild(lowPriorityButton);
  buttonContainer.appendChild(mediumPriorityButton);
  buttonContainer.appendChild(highPriorityButton);
  form.appendChild(buttonContainer);
  form.appendChild(submitButton);
  form.appendChild(exitButton);
  darkScreen.appendChild(form);
  body.appendChild(darkScreen);

  lowPriorityButton.addEventListener('click', () => {
    lowPriorityButton.classList.add('selected');
    mediumPriorityButton.classList.remove('selected');
    highPriorityButton.classList.remove('selected');
  })

  mediumPriorityButton.addEventListener('click', () => {
    mediumPriorityButton.classList.add('selected');
    lowPriorityButton.classList.remove('selected');
    highPriorityButton.classList.remove('selected');
  })

  highPriorityButton.addEventListener('click', () => {
    highPriorityButton.classList.add('selected');
    lowPriorityButton.classList.remove('selected');
    mediumPriorityButton.classList.remove('selected');
  })


  exitButton.addEventListener('click', () => {
    darkScreen.remove();
  })

  submitButton.addEventListener('click', () => {
    if (titleInput.value != "" && dateInput.value != "") {
      let priority = document.querySelector('.priority-button.selected');
      priority = priority.className.split(' ')[1];
      _taskmanager__WEBPACK_IMPORTED_MODULE_1__.taskManager.changeTitle(projectId, taskId, titleInput.value);
      _taskmanager__WEBPACK_IMPORTED_MODULE_1__.taskManager.changeDescription(projectId, taskId, descriptionInput.value);
      _taskmanager__WEBPACK_IMPORTED_MODULE_1__.taskManager.changeDate(projectId, taskId, dateInput.valueAsDate);
      _taskmanager__WEBPACK_IMPORTED_MODULE_1__.taskManager.changePriority(projectId, taskId, priority);

      darkScreen.remove();

      let selectedButton = document.querySelector('.side-bar button.active');
      selectedButton = selectedButton.className.split(' ')[0];

      if (selectedButton === 'today') {
        _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.today();
      } else if (selectedButton === 'all-tasks') {
        _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.all();
      } else if (selectedButton === 'important') {
        _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.important();
      } else {
        _displayproject__WEBPACK_IMPORTED_MODULE_3__.displayContent.project(projectId);
      }

      let storageObject;
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage[key]);
        let type = key.split(' ')[0];
        if (type === 'task') {
          if (value.id == taskId) {
            storageObject = value;
            localStorage.removeItem(key);
            storageObject.title = titleInput.value;
            storageObject.description = descriptionInput.value;
            storageObject.dueDate = dateInput.valueAsDate;
            storageObject.priority = priority;
            localStorage.setItem(key, JSON.stringify(storageObject));
            break;
          }
        }
      }

    } else {
      if (titleInput.value === "") {
        titleInput.classList.add('invalid');
      }
      if (dateInput.value === "") {
        dateInput.classList.add("invalid");
      }
    }
  })


}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectcollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectcollection */ "./src/projectcollection.js");
/* harmony import */ var _projectmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectmanager */ "./src/projectmanager.js");
/* harmony import */ var _taskmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskmanager */ "./src/taskmanager.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _addprojectbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addprojectbutton */ "./src/addprojectbutton.js");
/* harmony import */ var _projectbuttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectbuttons */ "./src/projectbuttons.js");
/* harmony import */ var _todaybutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todaybutton */ "./src/todaybutton.js");
/* harmony import */ var _alltasksbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alltasksbutton */ "./src/alltasksbutton.js");
/* harmony import */ var _importantbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./importantbutton */ "./src/importantbutton.js");
/* harmony import */ var _aboutbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutbutton */ "./src/aboutbutton.js");
/* harmony import */ var _displayproject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./displayproject */ "./src/displayproject.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index.html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());













// Main app function exports API functions to the window, so
// API can be accessed in the browser
window.app = function () {

  if (localStorage.length === 0) {
    _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('Personal', 9, 1);
    _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('Fitness', 3, 2);
    _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('Shopping', 1, 3);
    _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('Meeting', 2, 4);
    let projects = _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection.projects;

    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      1,
      "Plan a camping trip",
      "Write down what we will need for the trip to the Whiterun trail",
      new Date(2023, 9, 12),
      Date.now(),
      "low",
      'active'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      1,
      "Finish to-do list",
      "Develop and publish todo-list app",
      Date.now(),
      Date.now(),
      "high",
      'done'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      1,
      "Call Soul about the money",
      "Ask for advice",
      new Date(2023, 8, 20),
      Date.now(),
      "medium",
      'active'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      1,
      "Bake a cake",
      "For the newly moved in neighbours",
      Date.now(),
      Date.now(),
      "medium",
      'active'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      2,
      "Go for a run",
      "",
      Date.now(),
      Date.now(),
      "low",
      'done'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      2,
      "Compare local gym prices",
      "The is one in the southside tunnel underground",
      new Date(2023, 8, 19),
      Date.now(),
      "low",
      'active'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      3,
      "Art supplies",
      "Watercolor and paper",
      new Date(2023, 9, 5),
      Date.now(),
      "low",
      'active'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      3,
      "Doe",
      "For the bread",
      Date.now(),
      Date.now(),
      "medium",
      'done'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      3,
      "Ryan Gosling teacup",
      "Look for a couple",
      new Date(2023, 9, 1),
      Date.now(),
      "low",
      'active'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      4,
      "Dentist appointment 7:30 pm",
      "With Dr. Brooks",
      Date.now(),
      Date.now(),
      "high",
      'active'
    )
    _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
      3,
      "Meet up with Tony",
      "I don't know why agreed to",
      new Date(2023, 8, 10),
      Date.now(),
      "low",
      'active'
    )

  } else {

    // let currentLocalLenght = localStorage.length;
    const projectsArray = [];
    const taskArray = [];

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = JSON.parse(localStorage[key]);
      let type = key.split(' ')[0];
      if (type === 'project') {
        projectsArray.push({
          "type": "project",
          "name": value.name,
          "iconId": parseInt(value.icon),
          "id": value.id
        })
      } else if (type === 'task') {
        taskArray.push({
          "type": "task",
          "projectId": value.projectId,
          "title": value.title,
          "description": value.description,
          "dueDate": value.dueDate,
          "dateCreated": value.dateCreated,
          "priority": value.priority,
          "status": value.status
        })
      }
    }

    projectsArray.sort((a, b) => a.id - b.id);

    // very important to clear the storage before populating it again
    localStorage.clear();

    for (let i = 0; i < projectsArray.length; i++) {
      let value = projectsArray[i];
      let type = value.type;
      _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject(value.name, value.iconId, value.id);
    }

    for (let i = 0; i < taskArray.length; i++) {
      let value = taskArray[i];
      _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager.addTask(
        value.projectId,
        value.title,
        value.description,
        value.dueDate,
        value.dateCreated,
        value.priority,
        value.status
      )
    }
  }


  document.querySelector('button.all-tasks').classList.add('active');
  _displayproject__WEBPACK_IMPORTED_MODULE_10__.displayContent.all();
  (0,_aboutbutton__WEBPACK_IMPORTED_MODULE_9__.activateAboutButton)();
  (0,_addprojectbutton__WEBPACK_IMPORTED_MODULE_4__.activateAddProjectButton)();
  (0,_projectbuttons__WEBPACK_IMPORTED_MODULE_5__.activateProjectButtons)();
  (0,_todaybutton__WEBPACK_IMPORTED_MODULE_6__.activateTodayButton)();
  (0,_alltasksbutton__WEBPACK_IMPORTED_MODULE_7__.activateAllTaskButton)();
  (0,_importantbutton__WEBPACK_IMPORTED_MODULE_8__.activateImportantButton)();

  return { projectManager: _projectmanager__WEBPACK_IMPORTED_MODULE_1__.projectManager, taskManager: _taskmanager__WEBPACK_IMPORTED_MODULE_2__.taskManager, ProjectCollection: _projectcollection__WEBPACK_IMPORTED_MODULE_0__.ProjectCollection };
}();


})();

/******/ })()
;
//# sourceMappingURL=main.js.map