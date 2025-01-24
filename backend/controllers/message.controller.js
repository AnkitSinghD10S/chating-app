export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

       let conversation = await await Conversation.findOne({participants:{$all :[senderId],receiverId}})


       if(!conversation ){
        conversation = await Conversation.create({
            participants:[senderId,receiverId],
        })
       }

       const newMessage = new MessageChannel({
        senderId,
        receiverId,
        message
       })

       if(newMessage){
        conversation.message,push(newMessage._id)
       }

       res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in sending message controller ", error.message);

        res.status(500).json({ error: "Internal server error" });
    }
};
