import Hotel from '../models/hotel.js';
import { validationResult } from 'express-validator';


const createHotel = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    console.error('Error al crear el hotel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error('Error al obtener los hoteles:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel no encontrado' });
    }
    res.status(200).json(hotel);
  } catch (error) {
    console.error('Error al obtener el hotel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const updateHotelById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedHotel) {
      return res.status(404).json({ error: 'Hotel no encontrado' });
    }

    res.status(200).json(updatedHotel);
  } catch (error) {
    console.error('Error al actualizar el hotel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const deleteHotelById = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!deletedHotel) {
      return res.status(404).json({ error: 'Hotel no encontrado' });
    }

    res.status(200).json({ message: 'Hotel eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el hotel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export { createHotel, getAllHotels, getHotelById, updateHotelById, deleteHotelById };
