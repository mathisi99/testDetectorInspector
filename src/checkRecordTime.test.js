const {checkRecordTime, checkNumberWithItsUnit, checkDate} = require(__dirname + '/checkRecordTime.js')

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
  it('return true', () => {
    expect(checkNumberWithItsUnit('1.3 m')).toBe(true);
  })
  it('return true', () => {
    expect(checkNumberWithItsUnit('(5 ft 8 in')).toBe(true);
  })
  it('return true', () => {
    expect(checkNumberWithItsUnit('1.73 m (5 ft 8 in)')).toBe(true);
  })
  it('return true', () => {
    expect(checkNumberWithItsUnit('1.73 m (5 ft 8 in) ')).toBe(true);
  })
  it('return true', () => {
    expect(checkNumberWithItsUnit('2.03 m (6 ft 7+3/4 in)')).toBe(true);
  })
  it('return true', () => {
    expect(checkNumberWithItsUnit('1.485 m (4 ft 10+1⁄4 in)')).toBe(true);
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