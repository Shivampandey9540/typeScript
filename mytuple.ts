const user : (string |number)[] = [1, "12"]

/**
 * Fix the order how you should put data in array
 * 
 */
let tUser: [string, number, boolean]
tUser= [ "shivam", 12 , true]
let rgb: [ number, number, number] = [ 233, 123, 112]

type  User =[ number , string]

const newUser : User = [ 112, "exampl@.com"]
/**
 * but there is an issue here or feature here
 *  it is a array right for tuple  and with array
 * we get the methods's of arrays such as push 
 * shift unshift etc
 * so when we do this
 */
// newUser.push(true)
newUser[1] ="shivam@.com"

export {}