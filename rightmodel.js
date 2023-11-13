const mongoose= require('mongoose');

const rightschema= new mongoose.Schema({

    staf_id:{

        type:mongoose.Schema.Types.ObjectId,
        ref : 'staf'

    },

    right:
    {
         type: 'string'
    }
});
module.exports=mongoose.model('right: ',rightschema)
