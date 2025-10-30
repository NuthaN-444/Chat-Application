import { useState , useEffect , useContext , createContext } from "react";

const ChatContext = createContext();

export const ChatMessagesProvider = ({children}) => {


const [name,setName] = useState("");

useEffect(() => {
    
    let userName;
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      userName = prompt("Enter Your userName");
      if(userName) {
        sessionStorage.setItem("hasVisited", "true");
        sessionStorage.setItem("usersName",userName);
        setName(userName);
        console.log(userName)
      } else {
            let storedName = sessionStorage.getItem("usersName");
            if (storedName) { setName(storedName); }
      }
    }
  }, []);



const [messagesData, setMessageData] = useState(() => {
  const saved = sessionStorage.getItem("chatMessages");
  return saved
    ? JSON.parse(saved)
    : [
        
      ];
});

    
useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messagesData));
  }, [messagesData]);


    return (
        <ChatContext.Provider value={{messagesData,setMessageData,name,setName}}>
            {children}
        </ChatContext.Provider>
    )
}


export const useChatContext = () => useContext(ChatContext);