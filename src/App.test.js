import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('Renders the App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //console.log(app.debug());
  let app = mount(<App />);
  it('Renders the App"', () => {
    expect(app.find('.btn').text()).toEqual('Submit');
  });

  describe('Test the Formcontrol', () => {
    let testNote = 'test note';
    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target:{ value: testNote }
      });
      
      it('It updates the state', () => {
        expect(app.state().text).toEqual(testNote);
      });  
    });
  });
});


