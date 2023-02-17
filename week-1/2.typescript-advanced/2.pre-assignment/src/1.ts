// type Direction="East"|"West"|"North"|"South";

// Numeric ENUM
// String ENUM
enum Direction{
    East="east",
    west="west",
    North="north",
    South="south",
}

let a:Direction=Direction.East;



// Tuples (Exact Length of Array)
let id_name:[number,string]=[1,"Shivam"];
id_name[0]=5;   // okay
// id_name[0]='Hello';     // error



// 2D-Array
let arr_2nd:Array<[number,number]>=[
    [1,2],
    [3,4],
    // [5,6,7]      Error
];



// How to make function common
const getIndentify=<T>(arg:T):T=>{
    return arg;
}
let a1:string="Hello World";
let b:number=45;
let c:boolean=false;

getIndentify<string>(a1);
getIndentify<number>(b);
getIndentify<boolean>(c);


const get3rdElement=<T>(arg:T[]):T=>{
    return arg[3];
}
let month:string[]=['Jan','Feb','Mar','Apr','May','Jun'];
let nums:number[]=[1,2,3,4,5,6];

get3rdElement<string>(month);
get3rdElement<number>(nums);



// Doubt
const useState = <T>(arg: T): [T, (a: T) => void] => {
    let v: typeof arg=arg;
    const setV = (newValue:T): void => {
        v=newValue;
    }
    return [v,setV];
}
const [count,setCount]=useState<number>(8);
const [company,setCompany]=useState<string>('masai');




// keyof
interface User{
    id:number,
    name:string,
}

let users: User[] = [
    {id:1,name:'Shivam'},
    {id:2,name:"Ram"}
];

const getValue=(user:User, key:keyof User)=>{
    return user[key];
}

let response = getValue(users[1], "name");
console.log(response);



// Interfaces & Classes
interface UserNode{
    name:string;
}
interface UserNode{
    getId:()=>number;
}

const userProp:UserNode={name:"string", getId:() => 5};

