import React, { PureComponent } from 'react';

export default class Article extends PureComponent {

    render() { 
        const { article,isOpen,onButtonClick } = this.props,
            style = { width: '65%' },
            body = isOpen && <section className="card-text"> {article.text} </section>;
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header" >
                    <h2>
                        {article.title}
                        <button onClick={onButtonClick}
                            className="btn btn-primary btn-lg float-right">{isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {new Date(article.date).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
   
}