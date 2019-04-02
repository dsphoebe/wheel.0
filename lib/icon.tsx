import React from 'react';
import './importIcons';

interface IconProps {
    name: string;
}

// Icon 是一个 React.FunctionComponet 组件
// 它有一个属性是 IconProps
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`} />
            </svg>
        </span>
    );
};

export default Icon;