const mongoose = require('mongoose');

try{
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
});
}catch(err){
    console.log(`Database acess error ${err}`);
}

module.exports = mongoose;