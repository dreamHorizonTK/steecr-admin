import React, { Component } from 'react';
import { Grid, TextArea, Radio, Form, Button, Table, Checkbox, Message, Popup, Input, Select } from 'semantic-ui-react';

const encodeType = [{
    key: 'utf-8',
    value: 'utf-8',
    text: 'UTF-8',
}, {
    key: 'gbk',
    value: 'gbk',
    text: 'GB2312',
}];

export default class StaticAdvance extends Component {
    changeInter = () => {
        alert('请关注收费版！');
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        超时时间
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Input placeholder='请输入超时时间(S)' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        抓取间隔
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Input placeholder='请输入抓取间隔(S)' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        重试次数
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Input placeholder='请输入重试次数' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        线程数
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Input placeholder='请输入线程数' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        UserAgent
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Input placeholder='请输入UserAgent' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right"  className="form-row">
                        页面编码格式
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Select placeholder='编码格式' options={ encodeType } />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right">
                        定时
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Radio toggle onClick={ this.changeInter } readOnly />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        Cookie
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Popup content='增加Cookie' inverted trigger={<Button icon='add' />} />
                        <Table compact celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell>键</Table.HeaderCell>
                                    <Table.HeaderCell>值</Table.HeaderCell>
                                    <Table.HeaderCell>有效期</Table.HeaderCell>
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
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2} textAlign="right" className="form-row">
                        Http头
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Popup content='增加Http头' inverted trigger={<Button icon='add' />} />
                        <Table compact celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell>键</Table.HeaderCell>
                                    <Table.HeaderCell>值</Table.HeaderCell>
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
                </Grid.Row>
            </Grid>
        );
    }
}