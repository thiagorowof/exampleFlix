import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../components/screens/Login';

configure({adapter: new Adapter()});

describe('Test case for testing login', () => {
  let wrapper;
  test('username check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'sanarrrrrrr' } });
    expect(wrapper.state('username')).toEqual('sanarrrrrrr');
  })
  it('password check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '12312312312' } });
    expect(wrapper.state('password')).toEqual('12312312312');
  })
  it('login check with right data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'joao' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'sanar' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('error')).toBe("");
  })
  it('login check with wrong data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'sanarrrrrrr' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '123123123124' } });
    wrapper.find('button').simulate('click');
    setTimeout(()=>{
      expect(wrapper.state('error')).toBe('Usuário ou senha incorretos!');
    }, 500);    
  })
})