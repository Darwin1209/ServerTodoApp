import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../components/Footer';

describe('Footer', () => {
    const footer = shallow(<Footer/>);
    it('render footer name', () => {
        expect(footer.find('h1').text()).toEqual('Project by Denis Shevchenko');
    });
    it('render footer github', () => {
        expect(footer.find('a').text()).toEqual('My github');
    });
})