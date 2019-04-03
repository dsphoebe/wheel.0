import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

// Icon 是一个 React.FunctionComponet 组件
// 它有一个属性是 IconProps
const Icon: React.FunctionComponent<IconProps> = ({className, name, ...rest}) => {
    return (
        <svg
            className={classes("wui-icon", className)}
            {...rest}
        >
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;