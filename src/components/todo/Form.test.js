import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form Component', () => {
  it('should render a form', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
