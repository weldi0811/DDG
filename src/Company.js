import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Company extends Component {

    //4000 company
    //4001 educational
    //4002 community
    //4003 index
    

    state = {
        company: [],
        onDetails : false
    }

    componentDidMount() {
        this.getData()
    }
    getData = async () => {
        let tarikCompany = await axios.get('http://localhost:4000/data')

        this.setState({company : tarikCompany.data})

        console.log(tarikCompany.data)
    }

    onClickDetails = () => {
        this.setState({onDetails : true})
    }
    onClickBack = () => {
        this.setState({onDetails : false})
    }

    renderItem = () => {
        let item = this.state.company.map(el => {
            return(
                <div className='card col-5 shadow m-2' key = {el.id}>
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

export default Company