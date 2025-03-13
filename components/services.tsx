import Image from 'next/image';
import React from 'react';

import groom from '@/public/landing/grooming.webp';
import { Button } from './ui/button';

const services = [
  { title: 'Grooming & Bathing', description: 'Keep your dog looking and feeling their best.', button: 'Book Now' },
  { title: 'Dog Breeding', description: 'Professional training for a well-behaved pup.', button: 'Learn More' },
  { title: 'Dog Boarding', description: 'Daily walks to keep your dog active and happy.', button: 'Book Now' },
  { title: 'Veterinary Consultations', description: 'Expert advice for your dog\'s health and well-being.', button: 'Schedule Now' },
  { title: 'Dog Accessories', description: 'High-quality accessories for your dog.', button: 'Shop Now' },
  { title: 'Dog Food', description: 'Nutritious food for a healthy diet.', button: 'Shop Now' },
  { title: 'Dog Import & Export', description: 'Secure and professional pet relocation.', button: 'Learn More' },
  { title: 'Stud Service', description: 'Premium breeding services for your dog.', button: 'Schedule Now' }
];

const Services = () => {
  const servicesShow = services.slice(0, 4)
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesShow.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform  hover:scale-107"
            >
              <Image
                src={groom}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-gray-600 hover:bg-yellow-500 hover:text-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                < Button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">
                  {service.button}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-end justify-end pt-10 w-full'>
        <Button className='bg-transparent border-none shadow-none text-black hover:bg-transparent hover:border-0 hover:underline underline-offset-4 '>
          See More Services...
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
