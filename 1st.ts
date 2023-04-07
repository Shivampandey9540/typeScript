// const user = {name:"shivam", age:22}

// console.log(user.name)

// {
// let myname:string ="shivam"

// console.log(myname)
// }

/**
 * Assign type for  parameters
 */
// parameter type annotations
function greet(t:string){
     console.log("hi my name" + t.toUpperCase() + " !!")
}

greet("shivam")


function uni(t : string |number){
    if ( typeof t==="string"){
        console.log("Hello", + t.toUpperCase()+ " !!")
    }
    else{
        console.log("hello id " + t/2)
    }
    
}

// number
let userId: number = 333.34

userId.toFixed()

console.log(userId)
// boolean 
let isLoggedIn: boolean = true

export {}