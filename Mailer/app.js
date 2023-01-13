const { response } = require('express');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

function sendEmail(){

    return new Promise((resolve , reject)=>{

        var transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user:'freeuse14@gmail.com',
                pass:'lil958naca'
            }
        })
    const mail_configs ={
        from:'freeuse14@gmail.com',
        to:'xejike6262@vingood.com',
        subject:'Testing coding 101 Email',
        text:"Just checking if this email will be sent"
    }
    transporter.sendMail(mail_configs, function(error,info){
        if(error){
            console.log(error)
            return reject({message:`an error has occured`})
        }
        return resolve({message:"Email sent successfully"})

    })
   
    })

}

app.get('/',(req,res)=>{
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})

app.listen(PORT,()=>{
    console.log(`Server is  running on http://localhost:${PORT}`)
})