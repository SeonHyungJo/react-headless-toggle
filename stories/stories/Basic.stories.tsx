import React from 'react';
import Toggle from 'react-headless-toggle';

export default {
  title: 'Basic',
  component: Toggle,
};

export const Basic = () => {
  return (
    <Toggle>
      {({on, toggle, setOn, setOff}) => {
        return (
          <section>
            <section>
              <button onClick={toggle}>{'toggle'}</button>
              <button onClick={setOn}>{'setOn'}</button>
              <button onClick={setOff}>{'setOff'}</button>
            </section>
            <span style={{fontSize: '14px'}}>{on ? 'Turn On' : 'Turn Off'}</span>
          </section>
        )
      }}
    </Toggle>
  )
}
