

import React from 'react';
interface DestinationCardProps {
  imageUrl: string;
  location: string;
  distance: string;
  altText?: string;
}

const VerticalCard: React.FC<DestinationCardProps> = ({
  imageUrl,
  location,
  distance,
  altText = `Image of ${location}`, // Nilai default untuk alt text
}) => {
  return (
  
   <div className="max-w-full lg:max-w-xs w-full h-96 rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col">
      
      
      {/* Bagian Gambar */}
     <div className=" h-3/4 lg:h-1/2 relative"> 
        {/* - absolute inset-0: Membuat gambar mengisi penuh parent-nya (div di atas). */}
        <img 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imageUrl} 
          alt={altText} 
        />
      </div>
       <div className="lg:h-1/2 h-3/12 bg-rose-600 text-white p-5 flex flex-col justify-center">
        
        {/* Judul Lokasi */}
        <h3 className="font-bold text-2xl">{location}</h3>
        
        {/* Sub-judul Jarak */}
        <p className="text-base opacity-90 mt-1">{distance}</p>
      </div>

    </div>
  );
};

export default VerticalCard;