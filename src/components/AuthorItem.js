import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class QuoteItem extends Component {
    render() {
        const {quoteAuthor, quoteGenre} = this.props.quoteItem;

        let actualAuthor = quoteAuthor || `Bill Gates`;
        let actualGenre = quoteGenre || `business`;

        return (
            <Link to={`/authors/${actualAuthor}`} className="author-item">
                <div className="author-item__details">
                    <h4>{actualAuthor}</h4>
                    <p>{actualGenre}</p>
                </div>
                <div className="author-item__icon">
                    <span className="material-icons">
                        trending_flat
                    </span>
                </div>
            </Link>
        )
    }
}
