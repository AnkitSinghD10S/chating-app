import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Message from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation} = useConversation();

    useEffect(()=>{
        return ()=> setSelectedConversation(null);
    },[setSelectedConversation])

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="bg-green-500 px-4 py-2 mb-2">
                        <span className="lable-text font-bold"> To :</span>{" "}
                        <span className="text-green-950 font-bold">{selectedConversation.fullName}</span>
                    </div>
                    <Message />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>{authUser?.fullname}</p>
                <p>No chat selected</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    );
};
