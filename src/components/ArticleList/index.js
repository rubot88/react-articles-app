import React, { PureComponent } from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {
    render() {
        console.log(`---> 2`);

        const articleElements = this.props.articles.map((article, index) =>
            <li className="article_list_li"
                key={article.id}>
                <Article article={article}
                    defaultOpen={index === 0}
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
