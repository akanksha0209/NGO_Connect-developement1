const express= require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const mysql=require('mysql')
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Pat24Rv18Ihs@",
    database:"ngo_website",
});
// INSERT INTO donor(donor_id, ngo_id, donor_name, donor_contact, quantity_donated, category_donated, admin_id ) VALUES (1 , 2, 'akan' , 1234567, '10clothes' , 'clothes', 34)
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pat24Rv18Ihs@' ;
// app.get('/', (req,res)=>{
    
//     const sqlInsert = "INSERT INTO ngo(ngo_id, ngo_name, ngo_contact_number) VALUES (1 , 'xxx' , 1234567)  ";
//     db.query(sqlInsert, (err,result)=>{
//         if(err) return res.json(err)
//         res.send("hello world1");

//     })
    
// })
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post('/donate/',(req,res)=>{
    const d_name=req.body.name;
    const contact=req.body.contact;
    const donation_quantity=req.body.donation_quantity;
    const category=req.body.category;
    const sqlInsert = "INSERT INTO donor(donor_id, ngo_id, donor_name, donor_contact, quantity_donated, category_donated, admin_id ) VALUES (?,?,?,?,?,?,?)";
        db.query(sqlInsert, [1,1, d_name,contact,category ,donation_quantity, 1] ,(err,result)=>{
            if(err) return res.json(err)
            console.log(result)
        });
});
app.listen(3001, () => {
   console.log("running on port 3001");
});