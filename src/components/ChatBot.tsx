import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        variant="heritage"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl"
        onClick={() => console.log("Chat opened")}
      >
        <Bot className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatBot;