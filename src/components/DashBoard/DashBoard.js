import React, { Component } from 'react';
import config from "../../config";
import TokenService from "../../services/token-service"
import { Link } from 'react-router-dom';



export default class DashBoard extends Component {

    state = {
        error: null,
        language: null,
        totalScore: 0,
        words: [],

    };

    componentDidMount() {
        let wordsArr = [];
        fetch(`${config.API_ENDPOINT}/language`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
            .then(data => {
                data.words.map(word => {
                    wordsArr.push({
                        word: word.original,
                        correct: word.correct_count,
                        incorrect: word.incorrect_count
                    });

                    return wordsArr;
                })
                this.setState({
                    words: wordsArr,
                    language: data.language.name,
                    totalScore: data.language.total_score
                });
            })
            .catch(error => {
                console.error({ error });
            })
    }


    render() {
        let words = this.state.words.map((word, index) => {
            return (
                <li key={index}>
                    <h4>{word.word}</h4>
                    <p>Correct Answer Count: {word.correct}</p>
                    <p>Incorrect Answer Count: {word.incorrect}</p>
                </li>)
        });
        return (
            <section className='dashBoard'>
                <section>
                    <h2>Today we're learning {this.state.language}!</h2>
                    <section className='total___correct'>Total correct answers: {this.state.totalScore}</section>
                    <Link to='/learn'>
                        <button>Start practicing</button>
                    </Link>
                </section>
                <h3>Words to practice</h3>
                <ul className='wordsList'>
                    {words}
                </ul>
            </section>
        );
    }
}

