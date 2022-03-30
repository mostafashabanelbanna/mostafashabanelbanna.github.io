import Projects from "./Projects";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div className="App">
      <Projects />
      <MessengerCustomerChat
        pageId="1395836770668214"
        appId="526554522434399"
      />
    </div>
  );
}

export default App;
