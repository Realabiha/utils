import { typeOf } from "../tools"

export const encrypt = function(source, start = 1, end = 1){
    if(typeOf(source) !== 'String') return source
    if(source.length <= 2) return source.replace(source.slice(-1), '*')
    const replace = source.slice(start, -end)
    return source.replace(replace, '****')
    // const regexp = new RegExp('(.{'+ start + '}).*(.{'+ end +'})')
    // return source.replace(regexp, '$1****$2')
}

export const money = function(source, symbol=''){
    if(typeOf(source) != 'String') return source
    if(!source) return source 
    const format = source.split('').reverse().reduce((prev, item, index) => {
        if(index % 3 == 0){
            item = item + ','
        }
        prev = item + prev
        return prev
    })
    return symbol ? symbol + format : format
}

export default {
    encrypt,
    money
}