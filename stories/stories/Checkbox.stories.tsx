import React from 'react';
import add from 'react-headless-toggle'

console.log(add(3, 4))

function Toggle() {
    return <></>
}

export default {
    title: 'Checkbox',
    component: Toggle,
};

export const Checkbox = () => <Toggle>Basic</Toggle>;
