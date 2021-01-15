import React, { Component } from 'react';

import Navbar from "../components/partials/Navbar";
import QuoteItem from "../components/QuoteItem";

export default class Home extends Component {

    state = {
        randomQuoteItems: [],
        randomQuoteItem: ""
    }

    async componentDidMount() {
        const {authorName} = this.props.match.params;

        console.log(authorName);

        const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`);
        const res = await response.json();
        
        console.log(res);
        console.log(res.data[0]);

        this.setState({
            randomQuoteItems: res.data,
            randomQuoteItem: res.data[0]
        })
    }

    renderQuoteItems = () => {
        const quoteItems = this.state.randomQuoteItems;

        return quoteItems.map(quoteItem => {
            return (
                <QuoteItem key={quoteItem._id} quoteItem={quoteItem}/>
            )
        })
    }

    render() {
        const {quoteItem, quoteItems} = this.state;
        const {authorName} = this.props.match.params;
        const {renderQuoteItems} = this;

        return (
            <div id="author-details-page">
                <Navbar/>
                <div className="container author-details-container">
                    <h2>{authorName || "N/A"}</h2>
                    <ul className="quote-list">
                        {renderQuoteItems()}
                    </ul>
                </div>
            </div>
        )
    }
}
