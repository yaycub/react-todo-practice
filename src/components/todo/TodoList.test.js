import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  it('can render TodoList', () => {
    const wrapper = shallow(<TodoList todos={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
