import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { Grid, Segment, Statistic, Card, Message } from 'semantic-ui-react';
// import './index.scss';


export default class Default extends Component {
    getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
    }
    render() {
        return (
            <div>
                <Message info>
                    <Message.Header>欢迎使用react-admin后台管理系统</Message.Header>
                    <p>源码地址：<a href="https://github.com/2fps/react-admin" target="_target">react-admin</a></p>
                </Message>
                <Grid columns={4} stackable>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content>
                                <Card.Header>日PV</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Statistic horizontal label='Views' value='2,204' />
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content>
                                <Card.Header>日IP</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Statistic>
                                    <Statistic horizontal label='Views' value='2,204' />
                                </Statistic>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content>
                                <Card.Header>总PV</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Statistic>
                                    <Statistic horizontal label='Views' value='2,204' />
                                </Statistic>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content>
                                <Card.Header>总IP</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Statistic>
                                    <Statistic horizontal label='Views' value='2,204' />
                                </Statistic>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Segment>
                            <ReactEcharts
                                option={this.getOption()}
                                notMerge={true}
                                lazyUpdate={true} 
                                />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={10}>
                        <Segment>Content10</Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Segment>Content6</Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}