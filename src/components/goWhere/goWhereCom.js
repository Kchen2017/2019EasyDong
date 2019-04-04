import React, {Component} from "react"
import { SearchBar, Carousel, Menu } from 'antd-mobile';
import "../../css/gowhere.css"

export default class GoWhereCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            listData: [
                {
                  img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                  title: 'Meet hotel',
                  des: '不是所有的兼职汪都需要风吹日晒',
                },
                {
                  img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
                  title: 'McDonald\'s invites you',
                  des: '不是所有的兼职汪都需要风吹日晒',
                },
                {
                  img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
                  title: 'Eat the week',
                  des: '不是所有的兼职汪都需要风吹日晒',
                },
              ],
            initDataMenu: [
                {
                  value: '1',
                  label: 'Food',
                }, {
                  value: '2',
                  label: 'Supermarket',
                },
                {
                  value: '3',
                  label: 'Extra',
                  isLeaf: true,
                },
              ]
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render(){
        return <div style={{height: "100%"}}>
            <header class="barTop">
                <a class="mui-action-back mui-icon icon-tubiao-qiuchang mui-pull-left">北京</a>
                <SearchBar placeholder="Search" maxLength={8} />
            </header>
            <div>
                    <Carousel   autoplay={true}
                                infinite
                                >
                                {this.state.data.map(val => (
                                    <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                    <img
                                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                    </a>
                                ))}
                                </Carousel>
            </div>
            <div class="go_content">
                <div class="go_searchBar">
                
                </div>
                <div class="go_list">
                    <ul>
                        { this.state.listData.map((item,i)=>{
                            return <li key={i}>
                                <img 
                                    src={item.img}
                                    style={{height: '100px', width: "100px"}}
                                    />
                                <span>{item.title}</span>
                                <span>{item.des}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    }
}