import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail  from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () =>{
    
    return (
      <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
            author="Prithvi"
            timeAgo="Today at 4:34 PM"
            content="Nice blog post!"
            avatar={faker.image.people()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
            author="Parth"
            timeAgo="Today at 6:47 PM"
            content="I like the subject"
            avatar={faker.image.people()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
            author="Rajani"
            timeAgo="Yesterdat at 11:00 AM"
            content="I like the writing"
            avatar={faker.image.people()}
            />
        </ApprovalCard>
      </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))

