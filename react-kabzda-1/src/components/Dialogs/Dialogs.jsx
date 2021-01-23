import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const maxLength50 = maxLengthCreator(50)

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} k={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    // if (!props.isAuth) return <Redirect to={'/Login'} />

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div >
    )
}

const AddMessageForm = (props) => {
    return (
        <form className={style.send} onSubmit={props.handleSubmit} >
            <Field name={'newMessageText'} component={Textarea} validate={[required, maxLength50]} />
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


export default Dialogs;