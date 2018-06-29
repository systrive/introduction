'use strict';
import React, { Component } from 'react';
import { Divider } from 'antd';
import './list.less';
import businessAgency from './img/business-agency.png';
import corporationMediating from './img/corporation-mediating.png';
import marketSurvey from './img/market-survey.png';
import strategyConsulting from './img/strategy-consulting.png';

export default class List extends Component {
    render() {
        return <div className="list-container">
            <Divider className="devider-item service-devider impact" type="horizontal">Service Items</Divider>
            <div className="more">
                <em>More>></em>
            </div>
            <div className="list-item-tr">
                <div className="item">
                    <div className="item-head">
                        <div className="img">
                            <img src={marketSurvey} />
                        </div>
                        <div className="title">
                            <strong>Market Survey</strong>
                        </div>
                    </div>
                    <div className="item-content">
                        Investigate and survey the market of target nation or area, providing scientific information for business decisions.
                    </div>
                </div>
                <div className="item">
                    <div className="item-head">
                        <div className="img">
                            <img src={strategyConsulting} />
                        </div>
                        <div className="title">
                            <strong>Strategy Consulting</strong>
                        </div>
                    </div>
                    <div className="item-content">
                        Serve our clients the  professional  strategies for international trade and business, and assist in implementation.
                    </div>
                </div>
                <div className="item">
                    <div className="item-head">
                        <div className="img">
                            <img src={businessAgency} />
                        </div>
                        <div className="title">
                            <strong>Business Agency</strong>
                        </div>
                    </div>
                    <div className="item-content">
                        Help our partners to manage the business and deal the daily routine in China and Europe.
                    </div>
                </div>
                <div className="item">
                    <div className="item-head">
                        <div className="img">
                            <img src={corporationMediating} />
                        </div>
                        <div className="title">
                            <strong>Corporation Mediating</strong>
                        </div>
                    </div>
                    <div className="item-content">
                        Assist our clients and partners in PR, and offer the whole package, including meeting  arrangement, translation, etc.
                    </div>
                </div>
            </div>
        </div>
    }
}