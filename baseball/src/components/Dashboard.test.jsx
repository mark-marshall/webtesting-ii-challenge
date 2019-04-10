import React from 'react';
import * as rtl from 'react-testing-library';

import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('<Dashboard />', () => {
  it('renders the add strike button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getAllByText(/add strike/i));
  });
  it('renders the add ball button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getAllByText(/add ball/i));
  });
  it('renders the add foul button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getAllByText(/add foul/i));
  });
  it('renders the add hit button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getAllByText(/add hit/i));
  });
});
