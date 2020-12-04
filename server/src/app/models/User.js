const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    passwordHash:String,
    
});

UserSchema.pre('save', async function(){
    if(this.password) this.passwordHash = await bcrypt.hash(this.password, 8);
        this.password = undefined;
})

module.exports = new model('User', UserSchema);