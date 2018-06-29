'use strict';
import React, { Component } from 'react';
import { Menu } from 'antd';
import './header.less';
import logo from './img/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home'
        }
        this.handleClick = (e) => {
            console.log('click ', e);
            this.setState({
                current: e.key
            });
        }
    }
    render() {
        return (
            <div className="header-container">
                <div className="logo">
                    <img src={logo} />
                </div>
                <Menu
                    className="menu-container"
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        HOME
                    </Menu.Item>
                    <Menu.Item key="about">
                        ABOUT US
                    </Menu.Item>
                    <Menu.Item key="service">
                        SERVICE
                    </Menu.Item>
                    <Menu.Item key="dynamics">
                        DYNAMICS
                    </Menu.Item>
                    <Menu.Item key="contact">
                        CONTACT US
                    </Menu.Item>
                    <Menu.Item key="careers">
                        CAREERS
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
