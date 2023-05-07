
import { ChatInput } from './ChatInput';

const ChatInput = () => {
  const [counter, setCounter] = useState(0);

  const handleMessageSend = () => {
    setCounter(counter + 1);
  };

  if (counter === 10) {
    alert('您已发送了10条消息！');
  }

  return (
    <div>
      <h1>欢迎体验 GPT AI </h1>
      <p>您已发送 {counter} 条消息。</p>
      <button className="send-message-button" onClick={handleMessageSend}>
        发送消息
      </button>
    </div>
  );
};

export default ChatInput;
