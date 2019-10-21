import React, { Component } from 'react';
import axios from 'axios'
class Characters extends Component {

    state = {
        chars : [],
        isLoading : true
    }

    async componentDidMount(){
        let tarikPeople = await axios.get('https://swapi.co/api/people/')
        
        console.log(this.state.isLoading)
        console.log(tarikPeople.data)
        this.setState({chars : tarikPeople.data.results, isLoading:false})
        // console.log(this.state.chars)
        console.log(this.state.isLoading)
        
        
    }


    renderChar = () => {
        let char = this.state.chars.map(el => {
            return(
                <div className='card col col-sm-3 col-md-3 col-lg-3 shadow m-2'>
                <div className='card-body'>
                    <h4 className='card-title'>{el.name}</h4>
                    <p className='card-text'>Birty Year : {el.birth_year}</p>
                    <p className='card-test'>Eye Color : {el.eye_color}</p>
                
                <button className='btn btn-primary'> see more</button>
                
                </div>
                </div>
            
            )
        })
        return char
    }
    render(){
        return(
            this.state.isLoading ? <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> Loading... </div>
                </div> :
            <div>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <div className='row'>
                        {this.renderChar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Characters