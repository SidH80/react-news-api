import React, {Component} from 'react';
import NewSingle from './NewSingle.jsx';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }



    componentDidMount() {

        const url = 'https://newsapi.org/v2/top-headlines?sources=&apiKey=3b360f20444d4d618d6d62a90874da87';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));
    }
    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;
