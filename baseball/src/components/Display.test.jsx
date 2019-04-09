import React from 'react';
import * as rtl from 'react-testing-library';

import Display from './Display';

afterEach(rtl.cleanup);

describe('<Display />', () => {
    it('renders the strike span', () => {
        const wrapper = rtl.render(<Display />)
        expect(wrapper.getByText(/strikes/i))
    })
    it('renders the ball span', () => {
        const wrapper = rtl.render(<Display />)
        expect(wrapper.getByText(/balls/i))
    })
    it('renders the correct strike count', () => {
        const wrapper = rtl.render(<Display strike={1}/>)
        expect(wrapper.getByText(/1/i))
    })
    it('renders the correct ball count', () => {
        const wrapper = rtl.render(<Display ball={2}/>)
        expect(wrapper.getByText(/2/i))
    })
})
