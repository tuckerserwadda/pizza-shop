export const FormatPrice = (price)=>{
    return price.toLocaleString('en-Us',{
        style:'currency',
        currency:'USD'
    })
}