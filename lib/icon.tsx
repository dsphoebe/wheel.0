import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
    name: string;
}

// Icon 是一个 React.FunctionComponet 组件
// 它有一个属性是 IconProps
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className={"wui-icon"}>
            <use xlinkHref={`#${props.name}`} />
        </svg>
    );
};

export default Icon;