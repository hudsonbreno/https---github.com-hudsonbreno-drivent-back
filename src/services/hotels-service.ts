import { notFoundError } from '@/errors';
import { enrollmentRepository } from '@/repositories';
import hotelRepository from '@/repositories/hotels-repository';

async function getHotels(userId: number) {
    const enrollments = await enrollmentRepository.findWithAddressByUserId(userId);
    if(!enrollments) throw notFoundError();
  
    const hotels = await hotelRepository.findHotels();
    return hotels;
  }

  async function getHotelsWithRooms(userId: number, hotelId: number) {
    const enrollments = await enrollmentRepository.findWithAddressByUserId(userId);
    if(!enrollments) throw notFoundError();
  
    const hotel = await hotelRepository.findHotelByHotelId(hotelId);
  
    if (!hotel) throw notFoundError();

    return hotel;
  }
  
  export default {
    getHotels,
    getHotelsWithRooms,
  };
  
  