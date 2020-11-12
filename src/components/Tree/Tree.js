import React from 'react';
import AccordionToggle from '../AccordionToggle/AccordionToggle';

const Tree = ({ data }) => {
  return (
    <div>
      {data && !Array.isArray(data) ? (
        Object.keys(data).map((d, index) => (
          <AccordionToggle label={d} data={data[d]} key={index}>
            {Array.isArray(data[d]) && data[d].length ? (
              data[d].map((o, i) => {
                if (typeof o[i] !== 'undefined') {
                  return <div key={new Date()}>{o.join(', ')}</div>;
                } else {
                  return <Tree data={o} key={new Date()} />;
                }
              })
            ) : typeof data[d] === 'object' ? (
              <Tree data={data[index]} key={new Date() + Math.random()} />
            ) : (
              <div>{data[d]}</div>
            )}
          </AccordionToggle>
        ))
      ) : data && Array.isArray(data) && data.length ? (
        data.map((o, i) => {
          if (typeof o[i] !== 'undefined') {
            return <div key={new Date()}>{o.join(', ')}</div>;
          } else {
            return <Tree data={o} key={new Date() + Math.random()} />;
          }
        })
      ) : typeof data === 'object' ? (
        <Tree data={data} />
      ) : (
        <div>{data}</div>
      )}
    </div>
  );
};

export default Tree;
