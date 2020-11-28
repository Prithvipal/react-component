import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail  from './CommentDetail'

const App = () =>{
    
    return (
      <div className="ui container comments">
        <CommentDetail
          author="Prithvi"
          timeAgo="Today at 4:34 PM"
          content="Nice blog post!"
          avatar={faker.image.people()}
        />
        <CommentDetail
          author="Parth"
          timeAgo="Today at 6:47 PM"
          content="I like the subject"
          avatar={faker.image.people()}
        />
        <CommentDetail
          author="Rajani"
          timeAgo="Yesterdat at 11:00 AM"
          content="I like the writing"
          avatar={faker.image.people()}
        />
      </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))

