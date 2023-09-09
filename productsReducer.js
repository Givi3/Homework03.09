const products = [
    {id: 1, title: 'Velosiped', price: 40000},
    {id: 2, title: 'Samokat', price: 15000},
    {id: 3, title: 'Lyzhy', price: 20000},
    {id: 4, title: 'Snoubord', price: 30000}
];

const ADD = '[PRODUCTS] ADD'
const REMOVE = '[PRODUCTS] REMOVE'

export const addAction = (payload) => ({type: ADD, payload});
export const removeAction = (payload) => ({type: REMOVE, payload});

export const productsReducer = (state = products, action) => {
    if (action.type === ADD){
      const newProduct = {id: Date.now(), ...action.payload, amount: 1};
        return [...state, newProduct]
    }else if (action.type === REMOVE){
        return state.filter(item => item.id !== action.payload)
    }  
        return state
}