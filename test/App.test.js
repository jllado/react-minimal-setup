import React from "react";
import {expect} from "chai";
import {mount} from "enzyme";
import App from '../src/App';

describe('App', function () {

    it('renders without crashing', () => {
        const app = mount(<App />);

        expect(app.html()).to.contain('Welcome to React');
    });
});
