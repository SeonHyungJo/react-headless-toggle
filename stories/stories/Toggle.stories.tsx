import React from 'react';
import add from 'react-headless-toggle'

console.log(add(3, 4))

function Toggle() {
    return <></>
}

export default {
    title: 'Basic Toggle',
    component: Toggle,
};

export const BasicToggle = () => <Toggle>Basic</Toggle>;
