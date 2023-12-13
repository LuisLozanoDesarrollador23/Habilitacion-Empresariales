import mongoose from 'mongoose';


const hotelSchema = new mongoose.Schema({    
  name: {
    type: String,
    required: true,
  },  
  nationality: {
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
  phone: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  },
  resposibleUser:
    {
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
    },
  rooms: [
    {           
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      numberGuests: {
        type: Number,
        required: true,
      },      
      airType: {
        type: String,
        required: true,
      },
      parkingLot: {
        type: Boolean,
        required: true,
      },      
      pets: {
        type: Boolean,
        required: true,
      },
      beds: [
        {           
          name: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },             
        },
      ],      
    },    
  ],
  booking: [
    {           
      dateInit: {
        type: Date,
        required: true,
      },
      dateFinish: {
        type: Date,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },      
      status: {
        type: String,
        required: true,
      },
      resposibleUser:
      {
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
    },    
  ],
},{versionKey:false});


const hotel = mongoose.model('hotel', hotelSchema);

export default  hotel;
