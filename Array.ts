

/**
 * @how Defining the array and setting up the 
 * type of it
 */
const superHeros:string[]= []
const power : Array<string> =[]

superHeros.push("Spiderman")
superHeros.push("Batman")


power.push("Spider")
power.push("Rich")
console.log( superHeros, power)
type User ={
    name:string;
    isActive:boolean
}

/**
 * using object type  in array now 
 */
const allUsers: User[] =[]

allUsers.push({name:"shivam", isActive:true})
allUsers.push({name:"Gourav", isActive:true})

console.log(allUsers)

superHeros.push("Spiderman")

export {}