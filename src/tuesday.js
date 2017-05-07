import moment from 'moment'

function fromFirstOfMonth (moment) {
  const code = moment.day()
  switch (code) {
    case 0:
    case 1:
      // sunday / monday
      return moment.day(code + (2 - code))
    default:
      // the first of the month is past a tuesday so find the next one
      return moment.day(code + (9 - code))
  }
}

export default function tuesday (month, year, nth) {
  let firstOfMonth = moment().year(year)
                              .month(month - 1) // months are 0 indexed
                              .date(1)

  function nthDays (nth) {
    switch (nth) {
      case 2:
        return 7
      case 3:
        return 14
      default:
        return 0
    }
  }

  return fromFirstOfMonth(firstOfMonth).add(nthDays(nth), 'days')
}
