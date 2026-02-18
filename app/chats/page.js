import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ChatsPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
 <Navbar></Navbar>
      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex h-[650px]">

          {/* LEFT SIDEBAR */}
          <ChatSidebar />

          {/* RIGHT CHAT WINDOW */}
          <ChatWindow />

        </div>
      </div>

      <Footer />
    </div>
  );
}
