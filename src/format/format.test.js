import format from '.'
describe('format', () => {
    const {encrypt} = format
    test('encrypt 1', () => {
        expect(encrypt('你真好呀')).toBe('你****呀')
    })
    test('encrypt 2', () => {
        expect(encrypt('12345678901', 3, 4)).toBe('123****8901')
    })
    test('encrypt 3', () => {
        expect(encrypt({})).toEqual({})
    })
    test('encrypt 4', () => {
        expect(encrypt('你好')).toBe('你*')
    })
})

describe('money', () => {
    const {money} = format
    test('money 1', () => {
        expect(money('123456')).toBe('123,456')
    })
    test('money 2', () => {
        expect(money('1')).toBe('1')
    })
    test('money 3', () => {
        expect(money('')).toBe('')
    })
    test('money 3', () => {
        expect(money({})).toEqual({})
    })
    test('money 4', () => {
        expect(money('123456', '￥')).toBe('￥123,456')
    })
})