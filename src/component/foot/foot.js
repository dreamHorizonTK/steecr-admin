import './foot.scss';

import React, { Component } from 'react';

export default class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: (new Date()).getFullYear()
        };
    }
    render() {
        return (
            <div className="foot">
                { this.state.year } @ <a href="http://www.zhuyuntao.cn" target="_target">2fps</a> 项目名称
            </div>
        )
    }
}