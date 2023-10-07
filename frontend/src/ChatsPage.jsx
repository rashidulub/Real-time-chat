import { MultiChatSocket, MultiChatWindow,useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const ChatProps = useMultiChatLogic(
        '3907ddce-4f75-4afb-b959-60c02ded22d1',
        props.user.username,
        props.user.secret)
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...ChatProps}></MultiChatSocket>
            <MultiChatWindow {...ChatProps} style={{height:'100%'}}></MultiChatWindow>

       
            
        </div>
    );
};

export default ChatsPage;