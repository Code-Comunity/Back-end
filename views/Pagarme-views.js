// module.exports = {
//     TransacoesViews(dados = []){
//         return dados.map(dados =>{
//             return({

//                 id:dados.id,
//                 status:dados.status,
//                 payment_method:dados.payment_method,
//                 paid_amout:dados.paid_amout,
//                 date_created:dados.date_created,

//                 customer:{
//                     id:dados.customer.external_id,
//                     name:dados.customer.name,
//                     email:dados.customer.email,
//                     country:dados.customer.country,
//                     phone_numbers:dados.customer.phone_numbers
//                 },

//                 shipping:{
//                     id:dados.shipping.address.id,
//                     zipcode:dados.shipping.address.zipcode,
//                     country:dados.shipping.address.country,
//                     state:dados.shipping.address.state,
//                     city:dados.shipping.address.city,
//                     expedited:dados.shipping.expedited,                        
//                     delivery_date:dados.shipping.delivery_date
//                 },
                
//                 items:dados.items
//             })
            
//         })
    
//     }   
// }

module.exports = {
    
    TransacoesViews(dados = []){
        
        return dados.map((dado)=>{
            return {
            
                id:dado.id,
                status:dado.status,
                payment_method:dado.payment_method,
                paid_amout:dado.paid_amout,
                date_created:dado.date_created,
                
                customer:{
                    id:dado.customer.external_id,
                    name:dado.customer.name,
                    email:dado.customer.email,
                    country:dado.customer.country,
                    phone_numbers:dado.customer.phone_numbers
                },
                shipping: dado.shipping,
                items:dados.items
            }
        })
    }   
}