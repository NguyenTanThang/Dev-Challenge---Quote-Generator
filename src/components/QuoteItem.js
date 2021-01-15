import React, { Component } from 'react'

export default class QuoteItem extends Component {
    render() {
        const {quoteText} = this.props.quoteItem;

        let actualQuote = quoteText || `The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.` 

        return (
            <div className="quote-item">
                <p>{`"${actualQuote}"`}</p>
            </div>
        )
    }
}
