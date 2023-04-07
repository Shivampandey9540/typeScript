interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId? : string,
    getDiscount: ()=> string
    getDiscount2: ( cop:number)=>( [string, number])
    
}

const  shivam : User ={dbId:123241, email:"shiv@gm",
 userId: 221,
  getDiscount: ()=>("shivam"),
  getDiscount2:(cop=12321)=>( ["shivam", cop])
}


shivam.email = "shivam@gmail.com"
export {}