import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '2543a803-b01f-418f-8e64-90f7fc87d55f',
        props.user.username,
        props.user.secret
    )
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps}  style={{height: '100%'}}/>
        </div>
    )
};
export default ChatsPage; 