import React, { Component } from 'react';
import { createHashHistory } from 'history';
import { Divider, Header, Grid, TextArea, Radio, Form, Button, Table, Checkbox, Message, Popup, Input } from 'semantic-ui-react';

const history = createHashHistory();

export default class Static extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    logIn = () => {
        // this.props.changeStatus('islogining', true);
        sessionStorage.setItem('token', 11);
        history.push('/default/dashboard');
        // this.props.logIn();
    }

    changeInter = () => {
        alert('请关注收费版！');
    }

    render() {
        return (
            <div>
                <Header as='h3'>页面爬取</Header>
                <Divider hidden />
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2} textAlign="right" verticalAlign="">
                            任务名称
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Form>
                                <input placeholder='任务名称' />
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={2} textAlign="right" verticalAlign="">
                            url地址
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Form>
                                <TextArea placeholder='Tell us more' />
                                <Message content='需要递归的数值用*表示' />
                                    初始值：
                                    <Input />
                                    间隔值：
                                    <Input />
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={2} textAlign="right" verticalAlign="">
                            抓取间隔
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Form>
                                <input placeholder='抓取间隔' />
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={2} textAlign="right" verticalAlign="">
                            定时
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Radio toggle onClick={ this.changeInter } readOnly />
                        </Grid.Column>
                        <Grid.Column width={2} textAlign="right" verticalAlign="">
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
                        <Grid.Column width={2} textAlign="right" verticalAlign=""></Grid.Column>
                        <Grid.Column width={14} textAlign="left" verticalAlign="">
                            <Button color="teal">抓取</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}