console.log("hallo")

//command line

/* javascript is a intepreter and dinamic programming language mainly used to add interactivity and behavior to the webpage, it run in the browser but also on the non browser environtment like node js, support multiple programming style including function, object oriented, and imperative */


/*=========================================*/
/*=============== BASIC ===================*/
/*=========================================*/
alert("hallo woy") //popup
prompt("masukan nama") //input popup
confirm("yakin?") //ok/cancel popup

let $ = "2";
let _ = 1;

console.log(typeof (_+$))
console.log(typeof 1.2)
console.log(new Date().toLocaleString())
console.log(2**3) //pangkat
let a = 10
a *=2 
console.log("1"<"10") //true, karena string dibandingkan berdasarkan urutan karakter ascii

if(a ==10 ) console.log(true)
else if(a<10) console.log(false)

const condition = 1
switch(condition){
    case 1:
    case 2: 
    case 3: 
    console.log("awug");
    break;
    default : console.log("default") ;
}

/*=========================================*/
/*============ FOR LOOPING ================*/
/*=========================================*/
const length = 10 ;
for(let i = 0;length>i;i++){
    console.log(i)
}

let i = 0;
while(length>i){
    console.log(i)
    i++
}

// For OF, array looping
const datas = [1,2,3,4,5]
for( let [data,i] of datas.entries() ){
console.log(data)
console.log(i)
}

// For IN, Object Looping
const dataObj = {nama:"udin",tempat:"baleendah"}
for(let key in dataObj){
    console.log(key)
    console.log(dataObj[key])
}

const datas2 = [1,2,3,4,5]
datas2.forEach((v)=>{
    console.log(v)
})


//convert type
let dataku = 1;
console.log(typeof dataku.toString())
let numbernih = 10
console.log(typeof parseInt(numbernih))


/*=========================================*/
/*=============== NUMBER ===================*/
/*=========================================*/



/*=========================================*/
/*=============== STRING ===================*/
/*=========================================*/
const text = "halo,mo"

const url = "asdad?nama=udin&umur=10"
const array = url.split("?")[1].split("&")
let object = {}
for(value of array){
    const [key,v] = value.split("=")
    object[key] = v
}

console.log(object)
const namaString = new String(99999)
console.log(text.at(2))
console.log(text.includes("lo"))
console.log(text.indexOf("o"))
console.log(text.match("/halo/"))
console.log(text.trim())
console.log(text.split(","))
console.log(text.trim())
console.log(text.substring())
console.log(text.slice(0,2))
console.log(namaString)
console.log(text[0])
console.log("hallo \\ \"woy\" \n yapp")
console.log(text.replace("mo","modol"))
console.log(text.startsWith("alo"))
console.log(`
    ${text}
    hallo \"
    `) //template string


//ARRAY
const arr = [10, 20, 30, 40, 50]
console.log(arr.length)// 5
console.log(arr[0]) // 10
console.log(arr.push(60)) // 6
console.log(arr) // [10, 20, 30, 40, 50, 60]
console.log(arr.pop()) // 60
console.log(arr) // [10, 20, 30, 40, 50]
console.log(arr.map(x => x * 2)) // [20, 40, 60, 80, 100]
console.log(arr.filter(x => x > 25)) // [30, 40, 50]
console.log(arr.find(x => x === 30)) // 30
console.log(arr.includes(20)) // true
console.log(arr.some(x => x > 40)) // true
console.log(arr.every(x => x > 5)) // true
console.log(arr.reduce((sum, x) => sum + x, 0)) // 150
console.log(arr.slice(1, 3)) // [20, 30]
console.log(arr) // [10, 20, 30, 40, 50]
console.log(arr.splice(2, 1)) // [30]
console.log(arr) // [10, 20, 40, 50]
console.log(arr.sort((a, b) => b - a)) // [50, 40, 20, 10]


/*=========================================*/
/*=============== OBJECT ===================*/
/*=========================================*/
const user = {
  nama: "Luthfi",
  umur: 25,
  role: "admin",
  aktif: true
}

console.log(user.nama) // "Luthfi"
console.log(user["umur"]) // 25
console.log(user.alamat) // undefined
user.umur = 26
console.log(user.umur) // 26
user.email = "luthfi@mail.com"
console.log(user) // { nama: 'Luthfi', umur: 26, role: 'admin', aktif: true, email: 'luthfi@mail.com' }
delete user.role
console.log(user) // { nama: 'Luthfi', umur: 26, aktif: true, email: 'luthfi@mail.com' }
console.log(Object.keys(user)) // ["nama", "umur", "aktif", "email"]
console.log(Object.values(user)) // ["Luthfi", 26, true, "luthfi@mail.com"]
console.log(Object.entries(user))
// [
//   ["nama", "Luthfi"],
//   ["umur", 26],
//   ["aktif", true],
//   ["email", "luthfi@mail.com"]
// ]

for (let key in user) {
  console.log(key, user[key])
}
// nama "Luthfi"
// umur 26
// aktif true
// email "luthfi@mail.com"

console.log(
  Object.entries(user).map(([key, value]) => `${key}: ${value}`)
)
// ["nama: Luthfi", "umur: 26", "aktif: true", "email: luthfi@mail.com"]

const user2 = { ...user }
console.log(user2) // { nama: 'Luthfi', umur: 26, aktif: true, email: 'luthfi@mail.com' }
const { nama, umur } = user
console.log(nama, umur) // "Luthfi" 26
const { role = "user" } = user
console.log(role) // "user"
console.log("email" in user) // true
console.log(user.hasOwnProperty("email")) // true


/*=========================================*/
/*=============== DATE ===================*/
/*=========================================*/
const now = new Date()

console.log(now) // Wed Feb 04 2026 17:30:00 GMT+0700 (Western Indonesia Time)
console.log(new Date("2026-02-04")) // Tue Feb 03 2026 07:00:00 GMT+0700

console.log(new Date(2026, 1, 4))
// Wed Feb 04 2026 00:00:00 GMT+0700
// ⚠️ bulan dimulai dari 0 (Jan = 0)

console.log(now.getFullYear()) // 2026
console.log(now.getMonth()) // 1
console.log(now.getDate()) // 4
console.log(now.getDay()) // 3   // Rabu (0 = Minggu)
console.log(now.getHours()) // 17
console.log(now.getMinutes()) // 30
console.log(now.getSeconds()) // 0
console.log(now.getTime()) // 1707039000000

now.setFullYear(2030)
console.log(now.getFullYear()) // 2030

now.setMonth(5)
console.log(now.getMonth()) // 5

now.setDate(10)
console.log(now.getDate()) // 10

console.log(now.toDateString()) // "Thu Jun 10 2030"
console.log(now.toTimeString()) // "17:30:00 GMT+0700 (Western Indonesia Time)"
console.log(now.toISOString()) // "2030-06-10T10:30:00.000Z"
console.log(now.toLocaleDateString("id-ID")) // "10/6/2030"

console.log(
  now.toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" })
) // "Kamis, 10 Juni 2030 17.30"

const dateA = new Date("2026-02-01")
const b = new Date("2026-02-04")
console.log(dateA < b) // true
console.log(b - dateA) // 259200000
console.log((b - dateA) / (1000 * 60 * 60 * 24)) // 3

const start = Date.now()
// proses berat...
const end = Date.now()
console.log(end - start) // 120
new Date("2026-02-04") // ISO format → aman


//PROMISE
const janji = new Promise((resolve, reject) => {
  const sukses = true

  if (sukses) {
    resolve("Data berhasil diambil")
  } else {
    reject("Terjadi error")
  }
})
console.log(janji) // Promise { <fulfilled>: "Data berhasil diambil" }

janji
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Selesai"))
// Data berhasil diambil
// Selesai

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), ms)
  })
}
delay(1000).then(res => console.log(res))
// (1 detik kemudian)
// Done

Promise.resolve(5)
  .then(x => x * 2)
  .then(x => x + 10)
  .then(x => console.log(x)) // 20

Promise.reject("Gagal")
  .catch(err => console.log(err))// Gagal

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

Promise.all([p1, p2, p3])
  .then(res => console.log(res)) // [1, 2, 3]

Promise.race([
  delay(500),
  delay(1000)
]).then(res => console.log(res)) // Done

Promise.allSettled([
  Promise.resolve("OK"),
  Promise.reject("ERROR")
]).then(res => console.log(res))
// [
//   { status: "fulfilled", value: "OK" },
//   { status: "rejected", reason: "ERROR" }
// ]

Promise.any([
  Promise.reject("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
]).then(res => console.log(res)) // B

async function run() {
  try {
    const res = await delay(500)
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("Finish")
  }
}
run()


//ERROR
const err = new Error("Terjadi kesalahan")
console.log(err) // Error: Terjadi kesalahan
console.log(err.name) // "Error"
console.log(err.message) // "Terjadi kesalahan"
console.log(err.stack)
// Error: Terjadi kesalahan
//    at <file>:<line>:<column>

new Error("Error umum")
new TypeError("Salah tipe data")
new ReferenceError("Variable tidak ditemukan")
new SyntaxError("Sintaks salah")
new RangeError("Nilai di luar range")

try {
  throw new Error("Gagal proses")
} catch (err) {
  console.log(err.name)
  console.log(err.message)
}
// Error
// Gagal proses

try {
  throw new TypeError("Harus number")
} catch (err) {
  console.log(err instanceof TypeError)
  console.log(err.message)
}
// true
// Harus number

class AuthError extends Error {
  constructor(message) {
    super(message)
    this.name = "AuthError"
  }
}
try {
  throw new AuthError("Token expired")
} catch (err) {
  console.log(err.name)
  console.log(err.message)
}
// AuthError
// Token expired


Promise.reject(new Error("API error"))
  .catch(err => console.log(err.message))
// API error

async function run() {
  try {
    throw new Error("Async error")
  } catch (err) {
    console.log(err.stack)
  }
}
run()
// Error: Async error
// at run (<file>:line)

try {
  throw new ReferenceError("x tidak ada")
} catch (err) {
  if (err instanceof ReferenceError) {
    console.log("Reference Error")
  }
} // Reference Error


//CLOSURE



//RECURSIVE



/*=========================================*/
/*=============== PROTOTYPE ================*/
/*=========================================*/
function User(name) {
  this.name = name
}
User.prototype.sayHello = function () {
  return `Halo, saya ${this.name}`
}
const user11 = new User("Luthfi")
console.log(user11.name)        // "Luthfi"
console.log(user11.sayHello())  // "Halo, saya Luthfi"


// Prototype Chain
const arrr = []
console.log(arrr.__proto__ === Array.prototype) // true
console.log(Array.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null


// Menambah Method ke Prototype
function Car(brand) {
  this.brand = brand
}
Car.prototype.drive = function () {
  return `${this.brand} jalan`
}
const carr = new Car("Toyota")
console.log(carr.drive()) // "Toyota jalan"





/*=========================================*/
/*=============== CLASS ===================*/
/*=========================================*/
//Class & Constructor
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    return `Halo, saya ${this.name}`
  }
}
const user1 = new User("Luthfi", 25)
console.log(user1.name)        // "Luthfi"
console.log(user1.age)         // 25
console.log(user1.sayHello())  // "Halo, saya Luthfi"


//Property & Method
class Product {
  name = "Laptop"
  price = 10000000

  getPrice() {
    return this.price
  }
}
const product = new Product()
console.log(product.name)       // "Laptop"
console.log(product.getPrice()) // 10000000


//Encapsulation (Private Property)
class BankAccount {
  #balance = 0

  deposit(amount) {
    this.#balance += amount
  }
  getBalance() {
    return this.#balance
  }
}
const acc = new BankAccount()
acc.deposit(500000)
console.log(acc.getBalance()) // 500000
// console.log(acc.#balance)  // ❌ Error


//Inheritance
class Animal {
  speak() {
    return "Hewan bersuara"
  }
}
class Cat extends Animal {
  speak() {
    return "Meong"
  }
}
const cat = new Cat()
console.log(cat.speak()) // "Meong"


//Super (Akses Parent)
class Person {
  constructor(name) {
    this.name = name
  }
}
class Admin extends Person {
  constructor(name, role) {
    super(name)
    this.role = role
  }
}
const admin = new Admin("Dicky", "Super Admin")
console.log(admin.name) // "Dicky"
console.log(admin.role) // "Super Admin"



//Getter & Setter
class User {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}
const user = new User("Aji")
console.log(user.name) // "Aji"
user.name = "Budi"
console.log(user.name) // "Budi"


//Static Property & Method
class MathUtil {
  static PI = 3.14

  static sum(a, b) {
    return a + b
  }
}
console.log(MathUtil.PI)        // 3.14
console.log(MathUtil.sum(2, 3)) // 5


//Cek Tipe Object
class Car {}
const car = new Car()
console.log(car instanceof Car)   // true
console.log(car instanceof Object) // true


//Polymorphism
class Shape {
  area() {
    return 0
  }
}
class Square extends Shape {
  area() {
    return 25
  }
}
const shape = new Square()
console.log(shape.area()) // 25

//REGEX


