const mongoose = require('mongoose')

const goalSchema = mongoose.Schema
(
    {   
        //ta properties twn spitiwn
        name: 
        {
            type: String,
            required: [true, 'Please add a name value']
        },
        
        city:
        {
            type: String,
            required: [true, 'Please add a city value']
        },

        propertyType:
        {
            type: String,
            required: [true, 'Please add a property type value (Rental/For sale)']
        },

        rooms:
        {
            type: Number,
            required: [true, 'Please add a room value']
        },


        

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema)