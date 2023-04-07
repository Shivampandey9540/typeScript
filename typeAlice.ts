type  User ={
    name: String;
    email:String;
    isActive:boolean
}

/**
 *  type Aliases
 * @param user it's  using User type aliases f
 * @returns 
 */

function createUser(user:User):User{
 return {name:"", email:"", isActive:true}
}

createUser({name:"shivam", email:"", isActive:true})

/**
 * Optional Properties setup
 * 
 */
type shape ={
    Circale:boolean;
    Square:boolean
}
/**
 * @interface
 * in optinoptions xpos  and ypos 
 * are optional we can give this
 * properties or not 
 * @whomtouse :- we should use 
 * interface over type
 */
 interface pointOptions {
    shape:shape;
    xpos? : number;
    ypos? : number
 }
 /**
  * @readonly properties
  */

 type User_id = {
readonly _id : string;
readonly course: Array<string>;
name: string;
email: string
 }


 const read :User_id =
  { _id: "1222", course:["test", "test2"], name:"shivam", email:"shivam@"}


read.email ="shivam@9540"
/**
 * @readonly make's unmutable 
 * error because we can
 *  only read it but can't change it
 * even if for array
 */

// read._id="shivam"

// read.course= ["test", "test34"]

type cardNumber ={
    cardNumber:string
}
type carddata ={
    carddata:string
}

/**
 * @use --&-- making  name object type using other two
 * without writing them just using  & sign
 * @cardDetails =  will now 
 *  @this{ cardNumber:string; carddata:string: cvv:Number}
 */
type cardDetails = carddata & cardNumber & {
    cvv: number
}
function and(Card: cardDetails):cardDetails {
return Card
}

const mycard = {
    cardNumber :"143123",
    carddata:"sfjlds",
    cvv: 123
}
const card= and(mycard)
console.log(card)
export {}