import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount} key={p.id} />);

    let onAddPost = values => {
        props.addPost(values.newPostText)
    }

    return <div className={style.postBlock}>
        <div className={style.textBox}>
            <h2>My posts</h2>
        </div>
        <AddPostFormRedux onSubmit={onAddPost} />
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
})

function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.areaBox}>
            <Field name={'newPostText'} component={Textarea} placeholder={'Post message'} className={style.area} validate={[required, maxLength10]} />
        </div>
        <div className={style.addButtonBox}>
            <button className={style.addButton}>Add post</button>
        </div>
    </form>
}

const AddPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)


export default MyPosts;