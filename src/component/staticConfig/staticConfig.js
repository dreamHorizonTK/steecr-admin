import React, { Component } from 'react';
import { Grid, TextArea, Radio, Form, Button, Table, Checkbox, Message, Popup, Input, Select } from 'semantic-ui-react';

import './staticConfig.scss';

const encodeType = [{
    key: 'utf-8',
    value: 'utf-8',
    text: 'UTF-8',
}, {
    key: 'gbk',
    value: 'gbk',
    text: 'GB2312',
}];

export default class StaticConfig extends Component {

    changeInter = () => {
        alert('请关注收费版！');
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        任务名称
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Form>
                            <input placeholder='请输入任务名称' />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        url地址
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Form>
                            <TextArea placeholder='请输入要抓取的url地址，多个用换行隔开' />
                            <Message content='需要递归的数值用*表示' />
                                初始值：
                                <Input />
                                间隔值：
                                <Input />
                        </Form>
                    </Grid.Column>
                </Grid.Row> 
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        字段定义
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Popup content='增加字段' inverted trigger={<Button icon='add' />} />
                        <Table compact celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell>名称</Table.HeaderCell>
                                    <Table.HeaderCell>取值名称</Table.HeaderCell>
                                    <Table.HeaderCell>操作</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell collapsing>
                                        <Checkbox slider />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form>
                                            <input placeholder='Search...' />
                                        </Form>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form>
                                            <input placeholder='Search...' />
                                        </Form>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button negative>删除</Button>
                                    </Table.Cell>
                            </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={2} textAlign="right" ></Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}