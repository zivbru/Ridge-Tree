import React from 'react';
import AccordionToggle from '../AccordionToggle/AccordionToggle';

const Tree = ({ data }) => {
  return (
    <div>
      {data && !Array.isArray(data) ? (
        Object.keys(data).map((d, index) =>
          d ? (
            typeof data[d] === 'object' ? (
              <AccordionToggle label={d}>
                <Tree data={data[d]} />
              </AccordionToggle>
            ) : (
              <AccordionToggle
                label={`${d + ' : ' + data[d]}`}
                primitive={true}
              ></AccordionToggle>
            )
          ) : (
            <div></div>
          )
        )
      ) : data && Array.isArray(data) && data.length ? (
        data.map((o, i) =>
          o ? (
            typeof data[i] === 'object' ? (
              <AccordionToggle label={i}>
                <Tree data={data[i]} />
              </AccordionToggle>
            ) : (
              <AccordionToggle label={o} primitive={true}></AccordionToggle>
            )
          ) : (
            <div></div>
          )
        )
      ) : (
        <div>{data}</div>
      )}
    </div>
  );
};

export default Tree;
