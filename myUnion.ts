/**
 * We you don't  know which data type will come
 * from your work it's has 1 or 2 types in it
 * 
 */

let score:number|string = 33
score =45
score = "22"

type User = {
    name:string;
    id: number
}

type admin = {
    username: string;
    id : number
}

let shivam : User  |admin = {
name:"shivam",
id:233
}
 shivam= {username: "sv", id: 33}

 function getDbId( id : number | string){
      if  (typeof id === "string") return id.toLowerCase()
      else  return id.toFixed()
 }

//array

const dat : number[] = [1,2,3]
const dat2 : string[] = ["1","2","3"]
// const dat3 : number = [1,2,"3"]
const dat3 : (string| number)[] = [1,2,3,"4"]