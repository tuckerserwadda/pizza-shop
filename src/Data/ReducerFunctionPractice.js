const array1 = [1, 2, 3, 4, 5];
const sum = (prev, current) =>{
    return prev + current
}
export const sumOfArray1 = array1.reduce(sum);
// put categories together 
const array2 = [
    {
        name:'tucker',
        category:'1'

},
{
    name:'serwadda',
    category:'2'

},
{
    name:'dan',
    category:'1'

},
{
    name:'musa',
    category:'2'

},

]
const resultObject = (prev, current)=>{
 
    if(!prev[current.category]){
        prev[current.category]= []
    }
    prev[current.category].push(current)
    return prev
}
export const category = array2.reduce(resultObject, {})