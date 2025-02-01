import useConversation from "../../zustand/useConversation"

const Conversation = ({conversation,lastIndex}) => {

    const {selectedConversation , setSelectedConversation} = useConversation()

    const isSelected = selectedConversation?._id=== conversation._id;
    return (
        <>
    <div className={`flex gap-2 items-center hover:bg-blue-800 rounded p-2 py-1 cursor-pointer  ${isSelected? 'bg-blue-900':''}`}
        onClick={()=>setSelectedConversation(conversation)}
    >
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1"> 
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-green-500">{conversation.fullName}</p>
            </div>
        </div>
    </div>
    {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    
    </>
  )
}

export default Conversation