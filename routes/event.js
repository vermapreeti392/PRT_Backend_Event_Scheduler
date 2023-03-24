const express = require('express');
const router = express.Router();
const EVENT = require('../models/schema');

router.post('/v1/events', async (req,res)=>{
    try{        
        const event = await EVENT.create(req.body);
        return res.status(201).json({
        event        
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })  
    }
})

router.get('/v1/events', async (req,res)=>{
    try{
        const recipe = await EVENT.find();
        return res.status(200).json({                        
            recipe,        
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})

router.get('/v1/events/:id', async (req, res)=>{
    try{
        const event = await EVENT.findById({_id: req.params.id});
        return res.status(200).json({                      
            event,        
    })
    }
    catch(e){
        return res.status(404).json({    
            status: "failure",        
            error: "there is no event with that id"
        })
    }
})

router.delete('/v1/events/:id', async (req,res)=>{
    try{
        const event = await EVENT.findByIdAndDelete({_id: req.params.id});
        return res.status(204).json({                  
            message: "Deleted Successfully"     
    })
    }
    catch(e){
        return res.status(204).json({                       
            error: e.error
        })
    }
})

router.put('/v1/events/:id', async (req,res)=>{
    try{
        const event = await EVENT.findByIdAndUpdate({_id: req.params.id}, req.body);
        const updatedData = await EVENT.findOne({_id: req.params.id})
        return res.status(200).json({                       
            updatedData,        
    })
    }
    catch(e){
        return res.status(404).json({    
            status: "failure",        
            error: e.error
        })        
    }
})
module.exports = router