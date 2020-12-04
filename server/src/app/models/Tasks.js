const { Schema, model } = require('mongoose');

const TasksSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    hour: {
        type:String,
        required:true
    },
    fish: Boolean,
});



module.exports = new model('Tasks', TasksSchema);