import React, { PureComponent } from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }
    handleClick = openArticleId => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        })
    }
    render() {
        const articleElements = this.props.articles.map((article) =>
            <li className="article_list_li"
                key={article.id}>
                <Article article={article}
                    onButtonClick={this.handleClick.bind(this, article.id)}
                    isOpen={this.state.openArticleId === article.id}
                />
            </li>
        );
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}
