var express = require('express');
var router = express.Router();
var callService = require('../services/user');

router.post('/post', async (req, res) => {
    try {
        userdetails = {
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }
        await callService.postMethod(userdetails );
        res.json({
            success: 1,
            message: 'successfully inserted'
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            message: error.sqlMessage
        })
    }
});

router.get('/getById/:id', async (req, res) => {
    try {
        let id = req.params.id;
        var result = await callService.getMethod(id);
        console.log(result);
        console.log('rohit');
        res.send(result[0]);
    } catch (error) {
        console.log(error);
        res.json({
            success: 0
        })
    }
});

router.get("/getAllEmployees",async(req,res)=>{
    try {
        let result = await callService.getAllDetails();
        res.send(result[0]);
    } catch (error) {
        console.log(error);
    }
})
router.put("/update/:id", async (req,res)=>{
    try{
        let id = req.params.id;
        if(req.body.firstname){
            let result = await callService.updateMethod(id,"firstname",req.body.firstname);
        }
        if(req.body.lastname){
            let result = await callService.updateMethod(id,"lastname",req.body.lastname);
        }
        if(req.body.email){
            let result = await callService.updateMethod(id,"email",req.body.email);
        }
        res.send('updated successfully')
    }catch(error){
        console.log(error);
        res.send(error.message);
    }
});

router.delete("/delete/:id",async(req,res)=>{
    try{
        let id = req.params.id;
        await callService.deleteMethod(id);
        res.send('deleted');
    }catch(error){
        console.log(error);
        res.send(error.message);
    }
});

module.exports = router;