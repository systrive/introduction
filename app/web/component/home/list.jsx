'use strict';
import React, { Component } from 'react';
import { Carousel, BackTop } from 'antd';
import './list.less';
import overviewImg from './img/overview.png';
import Industry from './industry';
import Service from './service';
import AboutUs from './about-us';

export default class List extends Component {
    render() {
        return <div className="container smart-container">
            <Carousel autoplay>
                <div><img src={overviewImg} /></div>
                <div><img src={overviewImg} /></div>
                <div><img src={overviewImg} /></div>
                <div><img src={overviewImg} /></div>
            </Carousel>
            <Service />
            <Industry />
            <AboutUs />
            <div>
                <BackTop />
            </div>
        </div>
    }
}