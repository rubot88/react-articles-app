import React, { PureComponent } from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends PureComponent {
    state = {
        reverted: false
    }
    revert = () => {
        this.setState(state => ({
            reverted: !state.reverted
        }))
    }

    styleTitle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron p-4" style={this.styleTitle}>
                    <h1 className="display-3">
                        App name
                    </h1>
                    <button className="btn btn-lg btn-dark float-right" onClick={this.revert}>Revert</button>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }
}
