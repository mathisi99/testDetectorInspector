const { describe, it } = require("node:test");

const {checkRecordTime, checkNumberWithItsUnit, checkDate, IncreasingQuater} = require(__dirname + '/checkRecordTime.js')

describe("Testing function checkRecordTime", () => {
  it("Return true", () => {
    expect(checkRecordTime('2:55:18.4')).toBe(true);
  })
  it("Return true", () => {
    expect(checkRecordTime('2:55:18')).toBe(true);
  })

  it("Return true", () => {
    expect(checkRecordTime('2:55:00')).toBe(true);
  })
  it("Return true", () => {
    expect(checkRecordTime('2:42:31.0')).toBe(true);
  })
  it("Return true", () => {
    expect(checkRecordTime('2:55:00')).toBe(true);
  })
  it("Return false", () => {
    expect(checkRecordTime('2:42:31.0 ')).toBe(false);
  })
  
})

describe("Testing function checkNumberWithItsUnit", () =>{
  it('number with unit, return true', () => {
    expect(checkNumberWithItsUnit('1.3 m')).toBe(true);
  })
  it('number with unit, return true', () => {
    expect(checkNumberWithItsUnit('(5 ft 8 in')).toBe(true);
  })
  it('two pairs number with unit, return true', () => {
    expect(checkNumberWithItsUnit('1.73 m (5 ft 8 in)')).toBe(true);
  })
  it('two pairs number with unit with space, return true ', () => {
    expect(checkNumberWithItsUnit('1.73 m (5 ft 8 in) ')).toBe(true);
  })
  it('number plus fraction with unit, return true', () => {
    expect(checkNumberWithItsUnit('(6 ft 7+3/4 in)')).toBe(true);
  })
  it('number plus fraction with unit, return true', () => {
    expect(checkNumberWithItsUnit('2.03 m (6 ft 7+3/4 in)')).toBe(true);
  })
  it('return true', () => {
    expect(checkNumberWithItsUnit('1.485 m (4 ft 10+1⁄4 in)')).toBe(true);
  })
  it('number use "." ,return true', () => {
    expect(checkNumberWithItsUnit('1.485')).toBe(true);
  })
  it('number use "," instead of "." return true', () => {
    expect(checkNumberWithItsUnit('1,485')).toBe(true);
  })
  it('number error using ",." at the same time return false', () => {
    expect(checkNumberWithItsUnit('1.,485')).toBe(false);
  })
  it('number error using ",." at the same time return false', () => {
    expect(checkNumberWithItsUnit('1,.485')).toBe(false);
  })
})

describe('Testing function parseDate', () => {
  it('date format,string: 26 May 1923, return true', () => {
    expect(checkDate('26 May 1923')).toBe(true);
  })
  it('number format,string: 2015, return true', () => {
    expect(checkDate('2015')).toBe(true);
  })
  it('number format,string: 1840, return true', () => {
    expect(checkDate('1840')).toBe(true);
  })
  it('number format,string: abcd, return false', () => {
    expect(checkDate('abcd')).toBe(false);
  })
  it('number format,string: rse1, return false', () => {
    expect(checkDate('rse1')).toBe(false);
  })
  it('number format,string: 22pp, return false', () => {
    expect(checkDate('22pp')).toBe(false);
  })
  it('number format,string: Rosemarie Ackermann (GDR), return false', () => {
    expect(checkDate("Rosemarie Ackermann (GDR)")).toBe(false);
  })
})

describe('Testing for IncreasingQuater', () => {
  it(`input number: 1.4, return 1.5`, () => {
    expect(IncreasingQuater(1.4)).toBe(1.5);
  })
  it(`input number: 1.6, return 1.75`, () => {
    expect(IncreasingQuater(1.6)).toBe(1.75);
  })
  it(`input number: 1.32, return 1.5`, () => {
    expect(IncreasingQuater(1.32)).toBe(1.5);
  })
  it(`input number: 1.15, return 1.25`, () => {
    expect(IncreasingQuater(1.15)).toBe(1.25);
  })
  it(`input number: 0.7, return 0.75`, () => {
    expect(IncreasingQuater(0.7)).toBe(0.75);
  })
  it(`input number: 0.2, return 0.25`, () => {
    expect(IncreasingQuater(0.2)).toBe(0.25);
  })
  it(`input number: 0.1, return 0.25`, () => {
    expect(IncreasingQuater(0.1)).toBe(0.25);
  })
  it(`input number: -0.25, return 0`, () => {
    expect(IncreasingQuater(-3)).toBe(0);
  })
})