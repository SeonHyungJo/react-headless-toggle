import React from 'react';
import Toggle from 'react-headless-toggle';

export default {
  title: 'Checkbox',
  component: Toggle,
};

export const Checkbox = () => {
  return (
    <Toggle defaultValue={true}>
      {({on, toggle}) => {
        return (
          <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <input type={'checkbox'} onClick={toggle} checked={on}/>
            <span style={{fontSize: '14px'}}>{on ? 'Toggled On' : 'Toggled Off'}</span>
          </section>
        )
      }}
    </Toggle>
  )
}
