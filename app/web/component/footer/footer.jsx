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
                        <div>
                            <span className="title">
                                Add:&nbsp;
                            </span>
                            <span className="detail">
                                No. 8 SIYOU Street, YUEXIU District, GUANGZHOU, China
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                Tel:&nbsp;
                            </span>
                            <span className="detail">
                                XXX
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                FAX:&nbsp;
                            </span>
                            <span className="detail">
                                XXX
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                Web:&nbsp;
                            </span>
                            <span className="detail">
                                www.goldminer-intl.com
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                Email:&nbsp;
                            </span>
                            <span className="detail">
                                info@goldminer-intl.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
