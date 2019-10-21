import React, { Component } from 'react';
import axios from 'axios'

class Community extends Component{

    //4000 company
    //4001 educational
    //4002 community
    //4003 index
    

    state = {
        com: []
    }

    componentDidMount() {
        this.getData()
    }
    getData = async () => {
        let tarikData = await axios.get('http://localhost:4002/data')

        this.setState({com : tarikData.data})

        console.log(tarikData.data)
    }
    renderItem = () => {
        let item = this.state.com.map(el => {
            return(
                <div className='card col-5 shadow m-2'>
                <img className='card-img-top m-2' src={el.img}></img>
                <div className='card-body'>
                    <h4 className='card-title'>{el.name}</h4>
                    <p className='card-text'>{el.desc}</p>
                </div>
            </div>
            )

        })
        return item
    }

    render(){
        return(
            <div>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <div className='row'>
                            {this.renderItem()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community