import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
<div className="ui container comments">
<ApprovalCard>
    <div>
        <h4>Warning!</h4>
        Are you sure you want to do this?
        
        </div>
        </ApprovalCard>


        <ApprovalCard>
       <CommentDetail author="sam" 
        timeAgo="Today at 04:45PM" 
        CommentDetailData="Nice!"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail author="jane" 
        timeAgo="Today at 01:05AM" 
        CommentDetailData="Wow !!!"
        avatar={faker.image.avatar()}
        />
          </ApprovalCard>

          <ApprovalCard>
        <CommentDetail author="jojo" 
        timeAgo="Yesterday at 11:14PM" 
        CommentDetailData="YoYo MoMo"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>
      
</div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
