import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "8cdebe11-27ea-4ad6-bb74-4ea3cae44a67"
            userName = "ashwink9"
            userSecret = "12341234"
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;