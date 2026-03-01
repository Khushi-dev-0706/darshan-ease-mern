exports.getTemples = (req,res)=>{

const temples = [

{
id:1,
name:"Tirupati Balaji"
},

{
id:2,
name:"Kashi Vishwanath"
}

];

res.json(temples);

};