module.exports = {
    //url: "mongodb://localhost:27017/bancoTeste"
    //url: "mongodb+srv://marcos:<password>@cluster0.m3yrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    
    //Glitch's secrets variables
    url: "mongodb+srv://marcos:process.env.[password]@cluster0.m3yrt.mongodb.net/process.env.[db]?retryWrites=true&w=majority"
};