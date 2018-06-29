'use strict';
import React, { Component } from 'react';
import { Divider } from 'antd';
import './footer.less';
import logo from './img/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer-container">
                <div className="menu">
                    <div>HOME</div>
                    <div>ABOUT US</div>
                    <div>SERVICE</div>
                    <div>DYNAMICS</div>
                    <div>CONTACT US</div>
                    <div>CAREERS</div>
                </div>
                <Divider></Divider>
                <div className="contact">
                    <div className="logo-info">
                        <div className="logo-img">
                                <img src={logo} />
                            </div>
                            <div className="logo-content">Goldminer Consult Co., Ltd</div>
                    </div>
                    <div className="contact-content">
                        Add:  No. 8 SIYOU Street, YUEXIU District, GUANGZHOU, China
                        <br />
                        Tel:  XXX
                        <br />
                        Fax: XXX
                        <br />
                        Web: www.goldminer-intl.com
                        <br />
                        Email: info@goldminer-intl.com
                    </div>
                </div>
            </div>
        );
    }
}
