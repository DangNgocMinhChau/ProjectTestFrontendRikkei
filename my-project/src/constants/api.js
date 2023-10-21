export const server = "https://cors-anywhere.herokuapp.com/https://mystoreapi.com"


export const catalog = server + "/catalog"
export const categories =  catalog +"/categories"
export const findProductByCategory =  catalog +"/category"
export const products =  catalog +"/products"

export const product =  catalog +"/product"



export const auth =  server +"/auth"
export const APIlogin =  auth +"/login"
export const APISignUp =  auth +"/user"
export const APIloginMe =  auth +"/me"


// Order
export const order =  server +"/order"
export const orderMy =  order +"/my"
export const orderNew =  order +"/new"
