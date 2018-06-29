'use strict';
import React, { Component } from 'react';
import { Divider } from 'antd';
import AboutUs from './img/about-us.png';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AboutUs: AboutUs
        };
    }
    render() {
        return <div className="list-container">
            <Divider className="devider-item impact" type="horizontal">About Us</Divider>
            <div className="about-us-content">
                <div className="img">
                    <img src={AboutUs} />
                </div>
                <div className="content">
                    In 2013, a group of young and passionate graduate students found there was a great gap between the medium-sized and small enterprises in different countries. Years later, becoming more professional with years experience in various industries, they assembled and founded GOLDMINER to establish a platform for the enterprises which is willing to seek more business opportunities on the world stage. Yes, that’s how the story begins. GOLDMINER attracts the wisdoms from industry elites, senior executives, bright graduates, which could provide a particular solution and mine “gold” for the business partners in both Asia and Europe.
                </div>
            </div>
        </div>
    }
}