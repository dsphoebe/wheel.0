import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

ReactDOM.render(<div>
    <Icon name="wechat" onClick={() => console.log('hahah')}/>
</div>, document.getElementById('root'));
