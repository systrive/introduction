'use strict';
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './header.less';
import logo from './img/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            current: 'home'
        }
        this.handleClick = (e) => {
            this.setState({
                current: e.key
            });
        }
        this.toggleCollapsed = () => {
            this.setState({
                collapsed: !this.state.collapsed
            });
        }
        this.appSelect = (e) => {
            this.setState({
                current: e.key,
                collapsed: !this.state.collapsed
            });
        }
    }
    render() {
        return (
            <div className="header-container">
                <div className="pc-header">
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
                <div className="app-header">
                    <div className="logo-text">
                        GOLDMINIER
                    </div>
                    <div className="menu-icon" onClick={this.toggleCollapsed}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </div>
                    <Menu
                        selectedKeys={[this.state.current]}
                        mode="inline"
                        theme="dark"
                        onClick={this.appSelect}
                        inlineCollapsed={this.state.collapsed}
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
            </div>
        );
    }
}
