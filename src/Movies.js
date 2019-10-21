import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Movies extends Component {


    state = {
        movies : [],
        isLoading : true
    }

    componentDidMount() {
        this.getSwapi()
        this.setState({isLoading:false})
    }

    getSwapi = async () => {
        let tarikData = await axios.get('https://swapi.co/api/films/')
        this.setState({movies : tarikData.data.results})

        console.log(tarikData.data.results)
    }

    rendermovies = () => {
        // character
        // directors/
        // title
        let film = this.state.movies.map(el => {
            return(
                <div className='card col-3 col-sm-12 col-md-6 col-lg-5 shadow m-2'>
                <div className='card-body'>
                    <h4 className='card-title'>{el.title}</h4>
                    <p className='card-text'>release date : {el.release_date}</p>
                    <p className='card-test'>Directed by : {el.director}</p>
                <Link to={`/movies/${el.episode_id}`} >
                <button className='btn btn-primary'> see more</button>
                </Link>
                </div>
                </div>
            
            )
        })
        return film
    }

    render() {
        return (
            
            this.state.isLoading ? <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> Loading... </div>
                </div> :
            <div>
                <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div className='row'>
                        {this.rendermovies()}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Movies