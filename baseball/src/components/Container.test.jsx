import React from 'react';
import * as rtl from 'react-testing-library';

import Container from './Container';

afterEach(rtl.cleanup);

describe('<Container />', () => {
    it('renders the h2 with the apps title', () => {
        const wrapper = rtl.render(<Container />);
        expect(wrapper.getByText(/baseball/i))
    })
})
