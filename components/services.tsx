import Image from 'next/image'
import React from 'react'

import groom from '@/public/landing/grooming.webp'

const Services = () => {
  return (
    <div className="bg-gray-50 py-12">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center mb-8">
      Our Services
    </h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Grooming Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Grooming"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Grooming & Bathing</h3>
          <p className="text-gray-600 mb-4">
            Keep your dog looking and feeling their best.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>

      {/* Training Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Training"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Dog Breeding</h3>
          <p className="text-gray-600 mb-4">
            Professional training for a well-behaved pup.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Dog Walking Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Dog Walking"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Dog Boarding</h3>
          <p className="text-gray-600 mb-4">
            Daily walks to keep your dog active and happy.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>

      {/* Veterinary Consultations Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Veterinary Consultations"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Veterinary Consultations</h3>
          <p className="text-gray-600 mb-4">
            Expert advice for your dog&apos;s health and well-being.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Schedule Now
          </button>
        </div>
      </div>

      {/* DOG ACCESSIORIES  */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Veterinary Consultations"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Dog Accessories</h3>
          <p className="text-gray-600 mb-4">
            Expert advice for your dog&apos;s health and well-being.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Schedule Now
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Veterinary Consultations"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Dog Food</h3>
          <p className="text-gray-600 mb-4">
            Expert advice for your dog&apos;s health and well-being.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Schedule Now
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Veterinary Consultations"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Dog Import & Export</h3>
          <p className="text-gray-600 mb-4">
            Expert advice for your dog&apos;s health and well-being.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Schedule Now
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={groom}
          alt="Veterinary Consultations"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Stud Service</h3>
          <p className="text-gray-600 mb-4">
            Expert advice for your dog&apos;s health and well-being.
          </p>
          <button className="bg-[#FFC107] text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Services
