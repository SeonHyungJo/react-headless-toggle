import React from 'react';
import Toggle from 'react-headless-toggle';

export default {
  title: 'Switch',
  component: Toggle,
};

export const Switch = () => {
  return (
    <Toggle defaultValue={true}>
      {({on, toggle}) => {
        return (
          <span
            role="switch"
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              display: 'flex',
              alignItems: 'center',
              width: '40px',
              height: '20px',
            }}
            onClick={toggle}
          >
          <span
            style={{
              flex: 1,
              height: '100%',
              borderRadius: '10px',
              background: on ? '#1EA7FD' : 'gray',
            }}
          />
          <span
            style={{
              position: 'absolute',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'white',
              transition: 'transform 0.3s',
              transform: on ? 'translateX(22px)' : 'translateX(2px)',
            }}
          />
        </span>
        )
      }}
    </Toggle>
  )
}
