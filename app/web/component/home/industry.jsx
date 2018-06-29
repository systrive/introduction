'use strict';
import React, { Component } from 'react';
import { Tabs, Divider } from 'antd';
const TabPane = Tabs.TabPane;

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left'
        };
    }
    render() {
        return <div className="list-container">
            <Divider className="devider-item impact" type="horizontal">Industry Dynamics</Divider>
            <Tabs
                className="tab-container"
                defaultActiveKey="1"
                tabPosition={this.state.mode}
                style={{ height: 220 }}
            >
                <TabPane tab="Tab 1" key="1">
                    <ul>
                        <li>[CN]-China’s tourism grows 20% in Q2, 2018</li>
                        <li>[CN]-China’s tourism grows 20% in Q2, 2018</li>
                        <li>[CN]-China’s tourism grows 20% in Q2, 2018</li>
                    </ul>
                </TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
            </Tabs>
        </div>
    }
}