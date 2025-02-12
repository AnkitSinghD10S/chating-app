import { extractTime } from "../../../../backend/utils/extractTime";
import{ useAuthContext} from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
    const { authUser } = useAuthContext();

    const { selectedConversation } = useConversation();

    const fromMe = message.senderId  === authUser._id;

    const chatClassName = fromMe ? "chat-end" : "chat-start";

    const profilePic = fromMe
        ? authUser.profilePic
        : selectedConversation.profilePic;

    const bubbleBgColor = fromMe? 'bg-green-800' :'bg-gray-800'

    const fromtTime = extractTime(message.createdAt)

    return (
        <>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePic}
                        />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor} `}>{message.message}</div>
                <div className="chat-footer opacity-50 text-xs gap-1 items-center">
                    {fromtTime}
                </div>
            </div>
        </>
    );
};

export default Message;
