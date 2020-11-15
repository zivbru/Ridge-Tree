import React from 'react';
import './AccordionToggle.css';

const AccordionToggle = ({ label, children, primitive }) => {
  const onclick = (e) => {
    e.target.classList.toggle('is-open');

    var content = e.target.nextElementSibling;

    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = 'inherit';
    }
  };

  return (
    <div className='container'>
      <button
        className={`accordion ${
          primitive ? 'accordion-remove accordion-is-open-remove' : ''
        }`}
        onClick={onclick}
      >
        {label}
      </button>
      <div className='accordion-content'>{children}</div>
    </div>
  );
};

export default AccordionToggle;
