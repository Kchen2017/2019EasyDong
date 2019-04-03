import React, {Component} from "react";
import { TabBar, NavBar, Flex } from 'antd-mobile';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'blueTab'
        }
    }
    componentDidMount(){
        console.log(this.props)
    }

    renderContent(pageText) {
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
          </div>
        );
      }
    
    render(){
        return <div>
            woshiren
        </div>
        
        
        
        
        
        
        // <div style={{ position: 'fixed', height: '94%', width: '100%', top: 0 }}>
        //     <NavBar
        //     mode="light"
        //     >Easy Dong</NavBar>
        //     <div>hahah</div>
        //     <TabBar
        //         unselectedTintColor="#949494"
        //         tintColor="#33A3F4"
        //         barTintColor="white"
        //         >
        //         <TabBar.Item
        //             title="go where"
        //             key="go where"
        //             icon={<span class="iconfont">&#xe60a;</span>}
        //             selectedIcon={<span class="iconfont">&#xe60a;</span>}
        //             selected={this.state.selectedTab === 'blueTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'blueTab',
        //             });
        //             }}
        //             data-seed="logId"
        //         >
        //         </TabBar.Item>
        //         <TabBar.Item
        //             icon={<span class="iconfont">&#xe646;</span>}
        //             selectedIcon={<span class="iconfont">&#xe646;</span>}
        //             title="with who"
        //             key="with who"
        //             selected={this.state.selectedTab === 'redTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'redTab',
        //             });
        //             }}
        //             data-seed="logId1"
        //         >
        //         </TabBar.Item>
        //         <TabBar.Item
        //             icon={<span class="iconfont">&#xe603;</span>}
        //             selectedIcon={<span class="iconfont">&#xe603;</span>}
        //             title="persons"
        //             key="persons"
        //             selected={this.state.selectedTab === 'greenTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'greenTab',
        //             });
        //             }}
        //         >
        //         </TabBar.Item>
        //         <TabBar.Item
        //             icon={<span class="iconfont">&#xe658;</span>}
        //             selectedIcon={<span class="iconfont">&#xe658;</span>}
        //             title="my"
        //             key="my"
        //             selected={this.state.selectedTab === 'yellowTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'yellowTab',
        //             });
        //             }}
        //         >
        //         </TabBar.Item>
        //     </TabBar>
        // </div>
    }
}