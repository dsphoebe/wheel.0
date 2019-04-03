import * as renderer from 'react-test-renderer';
import React from 'react';
import { mount } from 'enzyme';
import Icon from '../icon';

describe('icon', () => {
    it('render Icon', () => {
        const json = renderer.create(<Icon name={"wechat"} />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick', () => {
        const fn = jest.fn()
        const c = mount(<Icon name={"wechat"} onClick={ fn }/>)
        c.find('svg').simulate('click')
        expect(fn).toBeCalled();
    })
})
