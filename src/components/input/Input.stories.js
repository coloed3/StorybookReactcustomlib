import React from 'react'
import Input from '././Input';

export default {
    title: 'Input',
    component: Input,
    argTypes: {
       
        width: { control: 'text' },
        height: { control: 'text' },
        primary: { control: 'color' },
        color : { control: 'color' },
        radius: { control: 'text' },
        padding: { control: 'text' },   
        border: { control: 'color' },
        placeholder: { control: 'text' },
    },
}

export const InputTest = (args) => <Input {...args} />;
InputTest.args = {
    width: '200px',
    height: '10px',
    primary: "blue",
    radius: '10px',
    padding: '10px',
    border: 'blue',
    placeholder: 'white',
}


