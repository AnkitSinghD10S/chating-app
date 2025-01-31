import useGetConversation from "../../pages/hooks/useGetConversation";
import Conversation from "./Conversation"

const Conversations = () => {
  const {loading,conversations}=useGetConversation();
  console.log("conversations ",conversations);
  
  return (
    <div className=" py-2 flex flex-col overflow-auto">
    </div>
  )
}

export default Conversations