import React, {Component} from "react"

import { Route, Link, Redirect, Switch} from 'react-router-dom'

import GoodList from './goodList'
import GoodDetail from './goodDetail'

import {
    Layout, Menu
  } from 'antd';
  
  const {
    Content, Sider
  } = Layout;

export default class Good extends Component {
    render(){
        return <Layout style={{ padding: '24px 0', background: '#fff', height: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}>    
                            <Menu.Item key="1"><Link to="/good/in_theaters">正在热情</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/good/coming_soon">预热</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/good/top250">Top250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    
                    <Switch>
                        <Route path="/good/:type" exact component={ GoodList }></Route>
                        <Route path="/good/detail/:id" component={ GoodDetail }></Route>
                        <Redirect to="/good/in_theaters"></Redirect>
                    </Switch>
                    
                </Content>
            </Layout>
    }
}