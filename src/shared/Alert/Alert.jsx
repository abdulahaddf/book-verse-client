import { useEffect } from "react";

import MessageNotification from "../MessageNotification/MessageNotification";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useUserMessage } from "../../hooks/useUserMessage";
import { useState } from "react";


const Alert = () => {

    const { showAlert, setShowAlert, user } = useContext(AuthContext);

    const [replay, setReply] = useState(false)




    const [messages, userRefetch] = useUserMessage(user?.email);


    const buttonHandler = (e) => {

        event.preventDefault();
    
    
        let filter = messages?.chat?.filter(a => a) || []
    
    
        const text = e.target.name.value
    
        const chat = [...filter,
        {
          name: user?.displayName,
          email: user.email,
          text: text,
          img: messages?.photoURL,
          time: new Date().getTime()
        }
        ]
    
    
    
    
    
    
        fetch(`https://book-verse-server-phi.vercel.app/postChat?email=${user?.email}`, {
    
    
          method: "POST",
    
          headers: {
    
            'content-type': "application/json"
          },
    
    
          body: JSON.stringify(chat)
    
    
        })
          .then(res => res.json())
          .then((res) => {
    
            if (res?.modifiedCount > 0) {
    
    
    
              e.target.reset()
    
              userRefetch()
    
              adminRefetch()
    
              allUsersRefetch()
    
              setShowAlert(true)
    
    
    
    
    
    
            }
    
          })
    
    
    
    
      }



    let data = [];



    if (messages.chat && messages.chat.length > 0) {
        // console.log(messages.chat[messages.chat.length - 1].text);

        data = messages.chat[messages.chat.length - 1]
    } else {
        console.log("No chat messages available.");
    }




    useEffect(() => {
        const refetchInterval = setInterval(() => {

            userRefetch()
            setShowAlert(true)


        }, 3000); // Check every 3 seconds

        return () => {
            clearInterval(refetchInterval);
        };
    }, []);


    //   console.log(messages,'tonu')


    return (
        <div className="App">
            {showAlert && (
                <MessageNotification data={data} replay={replay} setReply={setReply} buttonHandler={buttonHandler} />
            )}

        </div>
    );



};

export default Alert;