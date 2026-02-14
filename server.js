express=require('express');
const app=express();
app.use(express.json());

// admin=require('firebase-admin');
// credentials=require('./google-services.json');
// admin.initializeApp({
//     credential: admin.credential.cert(credentials)
// });

// app.post('/add_user',(req,res)=>{
//     const userResponse=admin.auth().createUser({
//         email:req.body.email,
//         password:req.body.password,
//     });
//     console.log('User creation initiated:', userResponse);
//     // res.json(userResponse)
//     userResponse.then((userRecord) => {
//         res.status(201).send(`User created: ${userRecord.uid}`);
//     }).catch((error) => {
//         console.error('Error creating user:', error);
//         res.status(500).send('Error creating user');
//     });
// });

app.get('/test_api',(req,res)=>{
    res.send('Hello World');
});
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});