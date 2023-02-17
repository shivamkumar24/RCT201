// 2. Create a function getName

// - it should accept an object firstname and lastname
// - it should return fullname
// - keep lastname optional.
// - if lastname does not exist then return only firstname
// - make a interface for it

// ```cmd
// npm run ts_2
// ```

interface obj{
    firstname:"Shivam";
    lastname?:"Kumar";
}

const getName=(obj)=>{
    return `${obj.firstname} ${obj.lastname}`;
}



