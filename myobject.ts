const User = {
    name:"shivam",
    emai:"shivam@gmaili",
    isAvtive: true
}

function createuser({name:string, ispaid: boolean}):void{

}

let user= {name:"shivam", ispaid:true}

createuser({name:"shivam", ispaid:true})
createuser(user)
// return type object
function creatercourse():{name:string, price:number}{
return {name:"shivam", price:299}
}
export default {}