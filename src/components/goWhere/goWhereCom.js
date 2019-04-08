import React, {Component} from "react"
import { SearchBar, Carousel, Menu } from 'antd-mobile';
import { ActivityIndicator, NavBar } from 'antd-mobile';

import "../../css/gowhere.css"
import "../../css/public.css"
//引入图片
import imgURL from '../../static/img/timg.jpg';
const data = [
  {
    value: '1',
    label: '海淀',
  }, {
    value: '2',
    label: '朝阳',
  },
  {
    value: '3',
    label: '昌平',
    isLeaf: true,
  },
];
export default class GoWhereCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: ['1', '2', '3'],
            imgHeight: 176,
            listData: [
                {
                  img: imgURL,
                  title: '安宁庄羽毛球',    
                  des: '羽毛球',
                  area: '海淀区',
                  distance:'500米',
                  bookWay:'线上预订',
                  bookPrice:'￥200'
                },
                {
                  img:  imgURL,
                  title: '清河篮球馆',
                  des: '羽毛球',
                  area: '朝阳区',
                  distance:'600米',
                  bookWay:'线上预订',
                  bookPrice:'￥200'
                },
                {
                  img:  imgURL,
                  title: '西小口排球馆',
                  des: '羽毛球',
                  area: '东城区',
                  distance:'700米',
                  bookWay:'线上预订',
                  bookPrice:'￥200'
                },
            ],
       

            initData: '',
            show: false,
        }
    }

    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
          if (dataItem.value === value[0]) {
            label = dataItem.label;
            if (dataItem.children && value[1]) {
              dataItem.children.forEach((cItem) => {
                if (cItem.value === value[1]) {
                  label += ` ${cItem.label}`;
                }
              });
            }
          }
        });
        console.log(label);
      }
      handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
          show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
          setTimeout(() => {
            this.setState({
              initData: data,
            });
          }, 500);
        }
      }
    
      onMaskClick = () => {
        this.setState({
          show: false,
        });
      }
      getlist = () => {
        fetch('http://127.0.0.1:3090/goWhere/list').then(function(res){
          console.log(res)
        })
      }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
            num: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render(){
        // 区域菜单
        const { initData, show } = this.state;
        const menuEl = (
        <Menu
            className="single-foo-menu"
            data={initData}
            value={['1']}
            level={1}
            onChange={this.onChange}
            height={document.documentElement.clientHeight * 0.4}
        />
        );
        const loadingEl = (
        <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.2, display: 'flex', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </div>
        );

        let link = {
            width: '100%',
            height: '1px',
            backgroundColor: '#eee'
        }
        return <div style={{height: "100%"}}>
            <header class="barTop">
                <a onClick={this.getlist} class="mui-action-back mui-icon icon-tubiao-qiuchang mui-pull-left">北京</a>
                <SearchBar placeholder="Search" maxLength={8} />
            </header>
            <div>
                    <Carousel   autoplay={true}
                                infinite
                                >
                                {this.state.num.map(val => (
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
                <div className={show ? 'single-menu-active' : ''}>
                    <ul style={{display: 'flex',height:'100%'}} className="single-top-nav-bar">
                        <li style={{width: '25%',height: '100%',lineHeight:'50px', textAlign:'center'}}
                        mode="light"
                        onClick={this.handleClick}
                        
                        >区域</li>
                        <li style={{width: '25%',height: '100%',lineHeight:'50px', textAlign:'center'}}>价格</li>
                        <li style={{width: '25%',height: '100%',lineHeight:'50px', textAlign:'center'}}>场地</li>
                        <li style={{width: '25%',height: '100%',lineHeight:'50px', textAlign:'center'}}>排序</li>
                    </ul>
                    {show ? initData ? menuEl : loadingEl : null}
                    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                </div>
                <div class="go_list">
                    <ul>
                        { this.state.listData.map((item,i)=>{
                            return <li key={i}>
                                <div class="floatLeft" style={{ width:'150px' }}>
                                    <img 
                                        src={item.img}
                                        style={{height: '100px', width: "150px"}}
                                        />
                                </div>
                                <div class="floatLeft" style={{ width:'200px' }}>
                                    <div>{item.title}</div>
                                    <div>{item.des}</div>
                                    <div>
                                        <div class="floatLeft">{item.area}</div>
                                        <div class="floatRight">{item.distance}</div>
                                        <div class="clear"></div>
                                    </div>
                                    <div style={link}></div>
                                    <div style={link}>
                                        <div class="floatLeft">{item.bookWay}</div>
                                        <div class="floatRight">{item.bookPrice}</div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    }
}