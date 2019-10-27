import React, { PureComponent } from 'react';
import ArticleList from './ArticleList';
import LoadArticles from '../services/LoadArticles';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends PureComponent {
    LoadArticles = new LoadArticles();
    state = {
        reverted: false,
        articles:[],
        error:false
    }
    revert = () => {
        this.setState(state => ({
            reverted: !state.reverted
        }))
    }

    updateArticles=()=>{
        this.LoadArticles.getAllArticles()
        .then(this.onArticlesLoaded)
        .catch(this.onError);
    }

    onArticlesLoaded=articles=>{
        this.setState({
            articles,
            error:false
        })
        
    }

    onError=()=>{
        this.setState({
            error:true
        })
    }

    styleTitle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    componentDidMount=()=>{
        this.updateArticles();
        
    }
    render() {
        const {articles} = this.state;
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
