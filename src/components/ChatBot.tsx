import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        size="lg"
        variant="heritage"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl hover-scale pulse transition-all duration-300"
        onClick={() => console.log("Chat opened")}
      >
        <Bot className="h-12 w-12 animate-bot-bounce" />
      </Button>
    </div>
  );
};

export default ChatBot;