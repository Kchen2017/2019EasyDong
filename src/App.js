import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import GoWhereCom from './components/goWhere/goWhereCom'
import WithWhoCom from './components/withWho/withWhoCom'
import PersonsCom from './components/persons/personsCom'
import MyCom from './components/my/myCom'


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'go'
        }
    }

    navClickFun(navFlag){
        this.setState({
            selectedTab: navFlag
        })
    }

    render(){
        return <Router>
            <div class="mui-content" style={{height: "100%"}}> 
                    {/* <Redirect push to="/goWhere" /> */}
                    <Switch>
                        <Route path="/" exact component={GoWhereCom} />
                        <Route path="/goWhere" component={GoWhereCom} />
                        <Route path="/withWho" component={WithWhoCom} />
                        <Route path="/persons" component={PersonsCom} />
                        <Route path="/my" component={MyCom} />
                    </Switch>
            </div>
            <nav class="mui-bar mui-bar-tab">
                <Link className={["mui-tab-item", this.state.selectedTab==='go'?'mui-active':null].join(' ')}  to="/goWhere" onClick={this.navClickFun.bind(this,'go')}> 
                    <span class="mui-icon icon-qiuchang1"></span>
                    <span class="mui-tab-label">Go</span>
                </Link>
                <Link className={["mui-tab-item", this.state.selectedTab==='withWho'?'mui-active':null].join(' ')} to="/withWho" onClick={this.navClickFun.bind(this,'withWho')}>
                    <span class="mui-icon icon-tubiaozhizuomoban"></span>
                    <span class="mui-tab-label">Who</span>
                </Link>
                {/* <Link className={["mui-tab-item", this.state.selectedTab=='persons'?'mui-active':null].join(' ')} to="/persons" onClick={this.navClickFun.bind(this,'persons')}>
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">persons</span>
                </Link> */}
                <Link className={["mui-tab-item", this.state.selectedTab==='my'?'mui-active':null].join(' ')} to="/my" onClick={this.navClickFun.bind(this,'my')}>
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">my</span>
                </Link>
            </nav>
        </Router>
    }
}