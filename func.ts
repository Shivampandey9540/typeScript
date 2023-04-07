// arrow funciton
let loginUser = (user:string, email:string, ispaid:boolean)=>{
    console.log(user)
    if(ispaid=== true){
        console.log("he")
    }else{
        console.log("heelo")
    }
}

// normal funciton
 function signup(name:string, test:boolean){
     if(test ===true){
        console.log("true")
     }else{
        console.log("test false")
     }
 }

loginUser("shiva","shiva@", true)


signup("shviam", true)



// We can even setup the return type of a funciton
function addTwo (num: number, num2: number): number{
    return num + num2
}
addTwo(2, 2)
// return  differant data
// function dif(te:boolean):string{
//     if(te ===true){
//         return 1
//     }
//     return "shivam"
// }



const heros = ["thor", "spiderMan", "ironman"]
const heros2 = [1, 2, 3]

//seting up the  return type of string in map
heros.map((e):string=>{
    return ` hero is  ${e}`
})
heros2.map((e):number=>{
    return e
})

function consoleError (errmsg: string):void{
    console.log(errmsg)
    /**
     * void is used to say that  it's not return anything
     * there are different type of retuns in typscript
     *  
     */
    // return 1
}

/**
 * 
 * @param errmsg String type 
 * @returns Never
 */
function HandleEror (errmsg: string):never{
   throw new Error(errmsg)
}


export {}