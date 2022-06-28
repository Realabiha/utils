import tools from '.'
describe('tools', () => {
    const {typeOf} = tools
    test('typeOf 1', () => {
        expect(typeOf('')).toBe('String')
    })
    test('typeOf 2', () => {
        expect(typeOf(0)).toBe('Number')
    })
    test('typeOf 3', () => {
        expect(typeOf({})).toBe('Object')
    })
    test('typeOf 4', () => {
        expect(typeOf([])).toBe('Array')
    })
    test('typeOf 5', () => {
        expect(typeOf(undefined)).toBe('Undefined')
    })
    test('typeOf 6', () => {
        expect(typeOf(null)).toBe('Null')
    })
    test('typeOf 7', () => {
        expect(typeOf(Symbol())).toBe('Symbol')
    })
    test('typeOf 8', () => {
        expect(typeOf(BigInt(1))).toBe('BigInt')
    })
    test('typeOf 9', () => {
        expect(typeOf(function(){})).toBe('Function')
    })
    test('typeOf 10', () => {
        expect(typeOf(new Set())).toBe('Set')
    })
    test('typeOf 11', () => {
        expect(typeOf(new Map())).toBe('Map')
    })
})