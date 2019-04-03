import React, {Component} from "react"

import { Spin, Button, Icon  } from 'antd';

import goodApi from "../../api/good"

export default class GoodDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            isLoading: true,
            detail: {}
        }
    }

    createDom=()=>{
        if(this.state.isLoading){
            return <Spin />
        }else{
            let movie = this.state.detail
            return <div>
                <h1 style={{ textAlign: 'center' }}>{movie.title}</h1>
                <div style={{ textAlign: 'center' }}>
                    <img src={movie.images.large} alt="" />
                </div>

                <h4>主要演员：</h4>
                <div style={{ display: 'flex' }}>
                    {movie.casts.map((item, i) => {
                        return <div key={i} style={{ margin: '5px' }}>
                            <img src={item.avatars.small} alt="" />
                            <h5>{item.name}</h5>
                        </div>
                    })}
                </div>

                <h4>剧情简介：</h4>
                <p>{movie.summary}</p>
            </div>
        }
    }

    componentDidMount(){
        let url = "http://127.0.0.1:3090/getditail?id="+this.state.id
        goodApi.getDetail(url).then(data=>{
            this.setState({
                isLoading: false,
                detail: data
            })
        })
    }

    goBack=()=>{
        this.props.history.goBack();
    }

    render(){
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />返回电影列表
            </Button>
            {this.createDom()}
        </div>
    }
}