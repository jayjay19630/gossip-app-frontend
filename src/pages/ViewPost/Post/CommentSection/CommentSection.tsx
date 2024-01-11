import './commentsection.css';

//import relevant components and type
import { CreateComment } from './CreateComment/CreateComment';
import { Comment } from './Comment/Comment';
import { PostByIdType } from '../../../../data/PostType';

//comment section component with number of comments, each comment, and a section to create a comment
export const CommentSection = (props: {belongsToPost: PostByIdType}) => {

    //extracting comments from post in order of date created and also getting post_id
    const comments = props.belongsToPost.comments;
    const orderedComments = comments.slice().reverse();
    const numberOfComments = comments.length
    const postid = props.belongsToPost.post.id;
    
    return (
        <div className='comment-section'>
            <CreateComment postid={postid}/>
            <div className="comment-number">{numberOfComments} comments</div>
            <div className='zero-comments'>{numberOfComments === 0 && "This comment section is empty. Add something to the conversation!"}</div>
            {orderedComments.map(comment => <Comment key={comment.id} id={comment.id} content={comment.content} username={comment.username} created_at={comment.created_at}></Comment>)}
        </div>
    )
}