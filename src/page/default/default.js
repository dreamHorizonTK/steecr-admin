import React, { Component } from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';

import Head from '../../component/head/head';
import Foot from '../../component/foot/foot';
import Dashboard from '../../component/dashboard/dashboard';
import Static from '../../page/static/static';
import Changelog from '../../page/changelog/changelog';

import './default.scss';

export default class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isopen: true
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    slideMenu = () => {

    }

    render() {
        const { activeItem } = this.state;

        return (
            <div style={{ height: '100%' }}>
                <Menu vertical floated color='teal' inverted style={{ height: '100%', marginRight: 0, borderRadius: 0 }}>
                    <Menu.Item>
                        <Input placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick} link href="#/default/dashboard">
                        <Icon name='grid layout' />
                        首页
                    </Menu.Item>
                    <Menu.Item>
                        基础爬虫
                        <Menu.Menu>
                            <Menu.Item
                                name='list'
                                active={activeItem === 'list'}
                                onClick={this.handleItemClick}
                                link href="#/setting/static"
                                >
                                任务列表
                            </Menu.Item>
                            <Menu.Item
                                name='add'
                                active={activeItem === 'add'}
                                onClick={this.handleItemClick}
                                link href="#/setting/static"
                                >
                                新建任务
                            </Menu.Item>
                            <Menu.Item
                                name='result'
                                active={activeItem === 'result'}
                                onClick={this.handleItemClick}
                                link href="#/setting/static"
                                >
                                结果展示
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                        >
                        Messages
                    </Menu.Item>
                    <Dropdown item text='More'>
                        <Dropdown.Menu>
                            <Dropdown.Item icon='edit' text='Edit Profile' />
                            <Dropdown.Item icon='globe' text='Choose Language' />
                            <Dropdown.Item icon='settings' text='Account Settings' />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item
                        name='changelog'
                        active={activeItem === 'changelog'}
                        onClick={this.handleItemClick}
                        link href="#/changelog"
                        >
                        changeLog
                    </Menu.Item>
                </Menu>
                <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
                    <Head />
                    {/* <Breadcrumb style={{ padding: '2rem'}}>
                        <Breadcrumb.Section link>Home</Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section link>Store</Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                    </Breadcrumb> */}
                    <div style={{ position: 'absolute', top: 62, left: 0, right: 0, bottom: 30,overflowY: 'scroll' }}>
                        <div style={{ padding: 20 }}>
                        <Switch>
                            <Route path="/default/dashboard" component={ Dashboard }></Route>
                            <Route path="/setting/static" component={ Static }></Route>
                            <Route path="/changelog" component={ Changelog }></Route>
                        </Switch>
                        </div>
                    </div>
                    <Foot/>
                </div>
            </div>
        )
    }
}