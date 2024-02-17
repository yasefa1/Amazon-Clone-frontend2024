import { Type } from "./Actiontype"

export const initialState = {
    basket:[],
    user:null
}
export const reducer =(State,action)=>{

   switch (action.type){

    case Type.ADD_TO_BASKET:
      const existingItem =State.basket.find((item)=>item.id=== action.item.id)
        if(!existingItem)
        return{
            ...State,
            basket:[...State.basket,{...action.item,amount:1}]
        }
        else{
            const updatedBasket = State.basket.map((item)=>
            {
               return item.id === action.item.id?
                {...item,amount:item.amount + 1}: item
            })
            return{
                ...State,
                basket:updatedBasket
            }
        }

        
        case Type.REMOVE_FROM_BASKET:
            const index = State.basket.findIndex(item=> item.id===action.id)
            let newBasket=[...State.basket]

            if(index >= 0){
                if (newBasket[index].amount > 1){
                    newBasket[index]={...newBasket[index],amount:newBasket[index].amount-1
                    }
                }
                    else
                    {
                        newBasket.splice(index,1)
                    }
                }
                return{
                ...State,
                basket:newBasket
                }
                
    case Type.EMPTY_BASKET:
        return {
          ...State,
          basket: [],
        };
                case Type.SET_USER:
                return{
                        ...State,
                        user:action.user
                };
            
      
        default:
            return State;
   }
}

