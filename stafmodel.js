const mongoose = require('mongoose');
const stafschema= new mongoose.Schema({
    name:
    {
        type:'string',
        required:'true'
    },
    
    email:
    {
        type:'string',
        
    }

});

module.exports=mongoose.model('staf',stafschema)