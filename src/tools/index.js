export const typeOf = function(data){
    return Object.prototype.toString.call(data).slice(8, -1)
}
export default {
    typeOf
}