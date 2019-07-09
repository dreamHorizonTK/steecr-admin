import React, { Component } from 'react';
import { Feed, Container, Header, Divider } from 'semantic-ui-react';

const image = 'https://avatars1.githubusercontent.com/u/13114677?s=460&v=4'
const date = '3 days ago'
const summary = 'You added Jenny Hess to your coworker group.'

export default class About extends Component {
    render() {
        return (
            <Container fluid>
                <Header as='h2' textAlign="center">changeLog</Header>
                <Divider />
                <Feed>
                    <Feed.Event image={image} date={date} summary={summary} />
                    <Feed.Event>
                        <Feed.Label image={image} />
                        <Feed.Content date={date} summary={summary} />
                    </Feed.Event>
                </Feed>
            </Container>
        )
    }
}