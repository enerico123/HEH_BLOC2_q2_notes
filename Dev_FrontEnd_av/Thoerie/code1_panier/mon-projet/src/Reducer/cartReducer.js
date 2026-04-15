export const initialState = {
    items: [],
    total: 0
}

export function cartReducer(state,action) {
    switch(action.type){
        case "ADD_ITEM": {
            const existItem = state.items.find(item => item.id === action.payload.id);
            const itemsUpdate = existItem ?
                state.items.map((item) => item.id === action.payload.id ? {...item,qty: item.qty +1} : item
            ):
            [...state.items,{...action.payload, qty : 1 }]
        return {
            items: itemsUpdate,
            total: state.total + action.payload.price 
        }

        }
        case "REMOVE_ITEM" : {
            console.log(state.total)
            const existItem = state.items.find(item => item.id === action.payload.id);
            if (!existItem) return state;
            const itemsUpdate = existItem.qty > 1 ?
                state.items.map((item) => item.id === action.payload.id ? {...item,qty: item.qty - 1} : item
            ):
            state.items.filter(item => item.id !== action.payload.id)
            console.Log(state.total)
            return {
                items: itemsUpdate,
                total: state.total - action.payload.price 
            }
        }
        case "CLEAR_CART" : 
        {
            return initialState
        }
        default : 
            return state; 
    }
}