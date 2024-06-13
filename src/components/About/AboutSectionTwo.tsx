'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from '../../../public/images/ourClients/download (2).png';
import img2 from '../../../public/images/ourClients/1630645410547.jpeg';
import img3 from '../../../public/images/ourClients/Baker_Hughes_logo.svg.png';
import img4 from '../../../public/images/ourClients/CM20230927-6c8e3-3c4b9.jpeg';
import ico from '../../../public/images/ourClients/icoico.jpg';
import './about2.css';
const AboutSectionTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: 'Projects in 80+ Countries',
      icon: img1,
      title: 'Why do we ussssssssssssssse it?',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
    },
    {
      heading: 'Projects in 80+ Countries',
      icon: img2,
      title: 'Why do we use it?',
      text: 'It is a long establihas a more-or-less normal distribution of letters, as ent here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
    },
    //...
    {
      heading: 'Projects in 80+ Countries',
      icon: img3,
      title: 'Why do we ussssssssssssssdwswsqswdswdsse it?',
      text: 'It is a long established fact that a reader will be distracted um as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
    },
    {
      heading: 'Projects in 80+ Countries',
      icon: img4,
      title: 'Why do we usedddddddddddd it?',
      text: 'It is a long establihas a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
    },
    //...
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <section className="py-16 md:py-20 lg:py-28">
    <div id="default-carousel" className="relative w-full bg" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0  transition-all duration-700 ease-in-out ${index === currentSlide? 'block' : 'hidden'}`}
          data-carousel-item
        >
          {/* <Image src={slide.src} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} /> */}
        <center> <h1 className='heading'>{slide.heading}</h1> </center>
          <div className="absolute imgtext  left-0 right-0  bg-opacity-50 text-white text-center p-4">
            <div className="flex items-center justify-center mb-4">
              <Image src={slide.icon} className="w-28 h-12  ico" alt={slide.text} />
              <h1 className="text-2xl font-bold title">{slide.title}</h1>
            </div>
            <div>
            <p>{slide.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
