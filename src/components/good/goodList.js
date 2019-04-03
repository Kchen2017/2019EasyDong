import React, {Component} from "react"

import { Spin, Rate  } from 'antd';

import goodApi from "../../api/good"

import '../../css/goodlist.css'

export default class Good extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: this.props.match.params.type,
            isLoading: true,
            list: []
        }
    }
    getList=()=>{
        let url = "http://127.0.0.1:3090/getMovieList?type="+this.state.type
        goodApi.getList(url).then(res => {
            this.setState({
                list: res.subjects,
                isLoading: false
            })
        })
    }
    gotoDetail=(id)=> {
        this.props.history.push('/good/detail/'+id)
    }
    createDom=()=>{
        if(this.state.isLoading){
            return <Spin />
        }else{
            return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.list.map((item, i) => {
                    return <div onClick={()=>this.gotoDetail(item.id)} className="movie-item" key={i} style={{ textAlign: 'center', border: '1px solid #eee', width: '192px', height: '230px', margin: '5px', padding: '5px 0 5px 0', cursor: 'pointer' }}>
                        <img src={item.images.medium} alt="" width="100" height="140" />
                        <h5>{item.title}</h5>
                        <p><strong>电影类型：</strong>{item.genres.join(',')}</p>
                        <p><strong>上映年份：</strong>{item.year}年</p>
                        <div><strong>评分：</strong><Rate disabled defaultValue={item.rating.average / 2} /></div>
                    </div>
                })}
            </div>
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            type: nextProps.match.params.type,
            isLoading: true
        }, () => {
            this.getList()
        })
    }
    componentDidMount(){
        this.getList()
    }
    render(){
        return <div>
            {this.createDom()}
        </div>
    }
}