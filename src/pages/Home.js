import React, { Component } from 'react';

import Navbar from "../components/partials/Navbar";
import AuthorItem from "../components/AuthorItem";
import QuoteItem from "../components/QuoteItem";

export default class Home extends Component {

    state = {
        randomQuoteItem: ""
    }

    async componentDidMount() {
        const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random');
        const res = await response.json();

        this.setState({
            randomQuoteItem: res.data[0]
        })
    }

    render() {
        const quoteItem = this.state.randomQuoteItem;

        if (!quoteItem) {
            return (<></>)
        }

        return (
            <div id="home-page">
                <Navbar/>
                <div className="container home-container">
                    <QuoteItem quoteItem={quoteItem}/>
                    <AuthorItem quoteItem={quoteItem}/>
                </div>
            </div>
        )
    }
}
