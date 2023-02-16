const express = require('express');

const bcrypt = require('bcrypt')

require('dotenv').config();
const carsRoute = require('./routes/cars');
const ownersRoute = require('./routes/owners');
const employeesRoute = require('./routes/employees');
const db = require('./database/db');

const owners = require('./models/owners');

const port = 8080
const app = express();
db.connectToMongoDB();



app.use(express.static('public'));
app.use(express.json());

app.use('/homepage', authenticate)
app.use('/cars', carsRoute);
app.use('/employees', employeesRoute);
app.use('/owners', authenticate, ownersRoute);

app.get("/homepage", (req, res) => {
    res.status(200).json({message:"This is the Homepage"})
})

app.post('/login', async (req,res) => {
    const {username, password} = req.body;

    const employee = await Employee.findOne({username})
        if(!user) {
            return res.status(401).json({ 
                message: "Username or password is incorrect"
            });
        }

        if (password === employee.password) {

            const token = Buffer.from(`${username};${password}`).toString("base64");

            return res.status(200).json({
                message: "Auth successful", 
                token:token
            });

        } else {
            return res.status(401).json({
                message: "auth failed"
            })
        }
    })


async function authenticate(req, res, next) {
    if (req.headers.authorization) {
        const authHeader = req.headers.authorization.split(' ');
        const authType = authHeader[0];
        const authValue = authHeader[1];
        if (authType === 'Basic') {
            const [username, password] = Buffer.from(authValue, 'base64').toString().split(':');
            const owner = await owners.findOne({username});
            if (!owner) {
                return res.status(401).json({
                    message: 'Authorization failed'
                });
            }

            const isPasswordMatch = await bcrypt.compare(password,owner.password);
            if(isPasswordMatch) {
                req.owner = owner.username;
                next();
            } else {
                return res.status(401).json({
                    message: 'Password or Username incorrect'
                })
            }
        } else {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
    } else {
        return res.status(401).json({
            message: 'Header not present'
        });
    }
};

app.use((req, res) => {
    res.status(404).json({message:'Page not found'});
});


app.listen(port, () => {
    console.log(`carLot is running at http://localhost:${port}`);
});
