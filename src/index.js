import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App = () =>{
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.people()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Prithvi
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog post!!</div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))

