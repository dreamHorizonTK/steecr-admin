import React, { Component } from 'react';
import { Icon, Dropdown, Button, Breadcrumb } from 'semantic-ui-react';

import './head.scss';

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isopen: true
        };
    }
    slideMenu = () => {

    }
    render() {
        return (
            <div className="head">
                {/* <Button.Group basic size='small' color="teal" onClick={ this.slideMenu }>
                    <Button icon='th list' />
                </Button.Group> */}
                <div style={{float: 'left'}}>
                    <Breadcrumb>
                        <Breadcrumb.Section link>Home</Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section link>Store</Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                    </Breadcrumb>
                </div>
                <div className="head-setting">
                    <Dropdown text='设置' direction='right' floating icon='settings' className='icon'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='New' />
                            <Dropdown.Item text='Open...' description='ctrl + o' />
                            <Dropdown.Item text='Save as...' description='ctrl + s' />
                            <Dropdown.Item text='Rename' description='ctrl + r' />
                            <Dropdown.Item text='Make a copy' />
                            <Dropdown.Item icon='folder' text='Move to folder' />
                            <Dropdown.Item icon='trash' text='Move to trash' />
                            <Dropdown.Divider />
                            <Dropdown.Item text='Download As...' />
                            <Dropdown.Item text='Publish To Web' />
                            <Dropdown.Item text='E-mail Collaborators' />
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>
        )
    }
}