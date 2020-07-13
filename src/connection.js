const Sequelize = require('sequelize');
const sequelize = new Sequelize('torrents','root','',{
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate().then(function(){
    console.log("Connected to database");
}).catch(function(e){
    console.log("not connected",e);

})

module.exports = sequelize;