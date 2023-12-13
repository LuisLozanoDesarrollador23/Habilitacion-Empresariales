import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({  
  idType: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },  
  nationality: {
    type: String,
    required: true,
  },   
  phone: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },  
  state: {
    type: String,
    required: true,
  },  
  municipality: {
    type: String,
    required: true,
  },    
  address:{
    type: String,
    required: true,
  },      
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companions: [
    {      
      document: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      idType: {
        type: String,
        required: true,
      },
    },
  ],
},{versionKey:false});


const User = mongoose.model('User', userSchema);

export default  User;
