import React, { Component } from 'react';
import logo from './asset/klob-logo.png'
import image from './asset/images.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Home extends Component {
    //4000 company
    //4001 educational
    //4002 community
    //4003 index


    state = {
        index: []
    }

    componentDidMount() {
        this.getData()
    }
    getData = async () => {
        let tarikData = await axios.get('http://localhost:4003/data')

        this.setState({ index: tarikData.data })

        console.log(tarikData.data)
    }


    renderItem = () => {
        let item = this.state.index.map(el => {
            return(
                <div className='card col shadow m-2'>
                <img className='card-img-top m-2' src={el.img}></img>
                <div className='card-body'>
                    <Link to={`/${el.name}`} >
                        <button className='btn btn-primary'>{el.name}</button>
                    </Link>
                </div>
            </div>
            )

        })
        return item
    }

    render() {
        return (
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

export default Home