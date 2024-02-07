const mongoose = require('mongoose');
const connectDB = async () => {
    //    
mongoose.connect('mongodb://127.0.0.1:27017/bloodBank', {
  //  useNewUrlParser: true,
  // useUnifiedTopology: true
})
  .then(async () => {
    console.log('Connected to MongoDB');
    
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
  });
}


//   const mongoose = require('mongoose');
// const colors = require('colors');

// const connectDB = async () => {
//     try {
//         console.log('MONGO_URL:', process.env.MONGO_URL);
//         await mongoose.connect(process.env.MONGO_URL);
//         // , {
//         //     useNewUrlParser: true,
//         //     useUnifiedTopology: true,
//         //     // Other options as needed
//         // });

//         console.log(`Connected To MongoDB Database ${mongoose.connection.host}`.bgCyan.white);
        
//     } catch (error) {
//         console.log(`MongoDB Database Error ${error}`.bgRed.white);
//     }
// };

 module.exports = connectDB;


