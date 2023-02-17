// 4. Create a PersonDetails interface

// - it should have
// - Prefix optional
// - phones array of numbers
// - addresses array of Addresses
// - email optional
// - firstname
// - lastname
// - middlename optional

// ```cmd
// npm run ts_4
// ```

interface PersonDetails{
    Prefix?:number;
    phones:Array<number>;
    addresses:Array<string>;
    email:string;
    firstname:string;
    lastname:string;
    middlename?:string;
}
