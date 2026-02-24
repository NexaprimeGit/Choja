import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ChatsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <Navbar />

      {/* CHAT SECTION */}
      <div className="flex flex-1 min-h-[85vh]">

        {/* SIDEBAR */}
        <aside className="w-[360px] bg-white border-r border-gray-200 flex flex-col">
          <ChatSidebar />
        </aside>

        {/* CHAT WINDOW */}
        <main className="flex-1 flex flex-col bg-[#F8F6F2]">
          <ChatWindow />
        </main>

      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}