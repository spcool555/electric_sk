'use client'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faGlobe,faProjectDiagram,faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons

import './counter.css'; // Ensure you have the appropriate styles

const Counter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const duration = 15000; // Total duration for counting up
    const interval = 100; // Update interval

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const count = +counter.textContent!;
      const increment = Math.ceil(target / (duration / interval));

      let currentCount = 0;
      const updateCount = () => {
        if (currentCount < target) {
          currentCount += increment;
          counter.textContent = Math.min(currentCount, target).toString();
          setTimeout(updateCount, interval);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCount();
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-4 ">
        <div className="counter-container flex flex-col items-center border ">
          <FontAwesomeIcon icon={faIndustry} className="text-3xl mb-2" /> {/* Industry icon */}
          <div className="counter text-2xl font-bold" data-target="12000">0</div>
         <p>Years in Industry</p>
        </div>
        <div className="counter-container flex flex-col items-center border">
          <FontAwesomeIcon icon={faGlobe} className="text-3xl mb-2" /> {/* Countries icon */}
          <div className="counter text-2xl font-bold" data-target="5000">0</div>
         <p>Countries Served</p>
        </div>
        <div className="counter-container flex flex-col items-center border">
          <FontAwesomeIcon icon={faCheckCircle} className="text-3xl mb-2" />
          <div className="counter text-2xl font-bold" data-target="7500">0</div>
         <p>Utility Approvals</p>
        </div>
        <div className="counter-container flex flex-col items-center border">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-3xl mb-2" />
          <div className="counter text-2xl font-bold" data-target="7500">0 </div>
         <p>Projects executed Globally</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
