console.log("hallo")

//command line

/* javascript is a intepreter and dinamic programming language mainly used to add interactivity and behavior to the webpage, it run in the browser but also on the non browser environtment like node js, support multiple programming style including function, object oriented, and imperative */


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

//FOR
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


//CONVERT
let dataku = 1;
console.log(typeof dataku.toString())
let numbernih = 10
console.log(typeof parseInt(numbernih))


//NUMBER



//STRING
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


//OBJECT
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


//DATE
const now = new Date()
console.log(now)
// Wed Feb 04 2026 17:30:00 GMT+0700 (Western Indonesia Time)
console.log(new Date("2026-02-04"))
// Tue Feb 03 2026 07:00:00 GMT+0700
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
console.log(now.toDateString())
// "Thu Jun 10 2030"
console.log(now.toTimeString())
// "17:30:00 GMT+0700 (Western Indonesia Time)"
console.log(now.toISOString())
// "2030-06-10T10:30:00.000Z"
console.log(now.toLocaleDateString("id-ID"))
// "10/6/2030"
console.log(
  now.toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" })
)
// "Kamis, 10 Juni 2030 17.30"
const dateA = new Date("2026-02-01")
const b = new Date("2026-02-04")
console.log(dateA < b) // true
console.log(b - dateA) // 259200000
console.log((b - dateA) / (1000 * 60 * 60 * 24)) // 3



//PROMISE



//ERROR


//CLOSURE



//RECURSIVE



//PROTOTYPE


//CLASS



//REGEX


