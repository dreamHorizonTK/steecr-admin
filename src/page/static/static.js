import React, { Component } from 'react';
import { createHashHistory } from 'history';
import { Divider, Header, Grid, TextArea, Radio,
    Tab, Form, Button, Table, Checkbox, Message, Popup, Input } from 'semantic-ui-react';

import StaticConfig from '../../component/staticConfig/staticConfig';
import StaticAdvance from '../../component/staticAdvance/staticAdvance';

import './static.scss';

const history = createHashHistory();

const panes = [{
    menuItem: '基本设置',
    render: () => (<Tab.Pane attached={false}>
        <StaticConfig />
    </Tab.Pane>)
}, {
    menuItem: '高级设置',
    render: () => <Tab.Pane attached={false}>
        <StaticAdvance />
    </Tab.Pane>
}]

export default class Static extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    changeInter = () => {
        alert('请关注收费版！');
    }

    render() {
        return (
            <div>
                <Header as='h3'>基础爬虫</Header>
                <Divider hidden />
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                <div className="foot-button">
                    <Button>测试</Button>
                    <Button color="teal">执行一次</Button>
                    <Button color="teal">保存</Button>
                </div>
            </div>
        );
    }
}