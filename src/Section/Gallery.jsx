import React from 'react';
import CircularGallery from '../components/ui/CircularGallery';
import { Star } from 'react-feather';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1000',
    title: 'Victoria Memorial',
    description: "An iconic marble building dedicated to Queen Victoria's memory",
    year: '1921',
    category: 'Historical',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1000',
    title: 'Howrah Bridge',
    description: 'The iconic cantilever bridge over the Hooghly River',
    year: '1943',
    category: 'Engineering Marvel',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1000',
    title: 'College Street',
    description: 'The intellectual hub with countless bookstores and educational institutions',
    year: 'Est. 1800s',
    category: 'Cultural',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1567601169793-82ce9d2a637a?q=80&w=1000',
    title: 'Dakshineswar Kali Temple',
    description: 'A Hindu temple dedicated to goddess Kali',
    year: '1855',
    category: 'Spiritual',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1000',
    title: 'Millennium Park',
    description: 'Modern riverfront promenade along the Hooghly River',
    year: '2000',
    category: 'Recreation',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1566456199354-32f92871e973?q=80&w=1000',
    title: 'Indian Museum',
    description: 'The oldest and largest museum in India',
    year: '1814',
    category: 'Educational',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1595519644260-a586bb71303a?q=80&w=1000',
    title: 'Science City',
    description: 'The largest science center in the Indian subcontinent',
    year: '1997',
    category: 'Technology',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1000',
    title: 'Salt Lake Stadium',
    description: 'One of the largest football stadiums in India',
    year: '1984',
    category: 'Sports',
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-screen "
      style={{ backgroundColor: 'rgba(244, 229, 194, 0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(3rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: '#3E2C1D',
            marginBottom: '1rem'
          }}>
            GLIMPSES OF CALCUTTA
          </h2>
          <div style={{
            width: '8rem',
            height: '0.25rem',
            backgroundColor: '#D4AF37',
            margin: '0 auto 1.5rem'
          }}></div>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.25rem',
            color: '#6B4423',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            Explore the city's rich heritage through this curated collection of iconic landmarks and cultural treasures that inspire our hackathon.
          </p>
        </div> */}

        {/* <div className="flex items-center justify-center mb-10">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(107, 68, 35, 0.1)',
            borderRadius: '9999px',
            border: '2px solid rgba(107, 68, 35, 0.3)'
          }}>
            <Star size={20} style={{ color: '#D4AF37' }} />
            <span style={{
              fontFamily: 'Playfair Display, serif',
              color: '#6B4423',
              fontSize: '1.125rem',
              fontStyle: 'italic'
            }}>
              Swipe or drag to navigate through Calcutta's heritage
            </span>
          </div>
        </div> */}

        <div className="h-[55vh] bg-red-200 full ">
          <CircularGallery items={galleryItems} className="w-[8vw] h-[12vh]" />
        </div>

        {/* <div className="text-center mt-12">
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1rem',
            color: '#6B4423',
            fontStyle: 'italic',
            maxWidth: '36rem',
            margin: '0 auto'
          }}>
            These historical landmarks represent the blend of tradition and innovation that defines our hackathon's spirit.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
