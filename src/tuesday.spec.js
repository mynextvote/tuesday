import expect from 'expect'
import moment from 'moment'

function getItRight (result, expected) {
  return expect(result).toEqual(expected)
}

import { tuesday } from './tuesday'

describe('tuesday', () => {
  it('should return the right format', () => {
    expect(tuesday(11, 2017)).toBeA(moment)
  })

  it('should return the first tuesday of a month given a year and month', () => {
    getItRight(tuesday(11, 2017).format('YYYY-MM-DD'), '2017-11-07')
  })

  it('should allow a user to specify the nth tuesday', () => {
    getItRight(tuesday(11, 2017, 2).format('YYYY-MM-DD'), '2017-11-14')
    getItRight(tuesday(11, 2017, 3).format('YYYY-MM-DD'), '2017-11-21')
  })
})
