import React, { Component } from 'react';
import axios from 'axios'

class MovieDetail extends Component{

    state = {
        movieDetail : {},
        isLoading : true
    }

    async componentDidMount(){
        let movieId = this.props.match.params.movies_id

        let movieData = await axios.get(`https://swapi.co/api/films/${movieId}`) 

        this.setState({movieDetail : movieData.data})
        this.setState({isLoading : false})

    }


   
    renderDetails = () => {
        console.log(this.state.movieDetail)
        const {director, producer, release_date, title} = this.state.movieDetail

        return(
            <div className='jumbotron'>
                <div className='container' style={{borderRadius: '25px'}}>
                    <div className='m-5'>
                        <h1>{title}</h1>
                        <h3> directed by : {director}</h3>
                        <h3> produced by : {producer}</h3>
                        <h5> released date : {release_date}</h5>
                    </div>
                </div>
            </div>
        )
    }

    


    render(){
        return (
            this.state.isLoading ? <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> Loading... </div>
                </div> :
            <div>
               {this.renderDetails()}
            </div>
        )
    }
}

export default MovieDetail