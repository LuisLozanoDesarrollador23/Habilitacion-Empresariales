import { Router } from 'express'
import { getAllHotels, getHotelById, createHotel, updateHotelById, deleteHotelById } from '../controllers/hotelController.js'

const router = Router()

router.get('/', getAllHotels)
router.get('/:id', getHotelById)
router.post('/', createHotel)
router.put('/:id', updateHotelById)
router.delete('/:id', deleteHotelById)

export default router