import React from 'react';

interface IconProps {
    name: string;
}

// Icon 是一个 React.FunctionComponet 组件
// 它有一个属性是 IconProps
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>{props.name}</span>
    );
};

export default Icon;