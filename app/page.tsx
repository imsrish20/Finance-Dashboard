import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import AccountProgressCard from "@/components/dashboard/AccountProgressCard";
import InsightsAndLeadsCard from "@/components/dashboard/InsightsAndLeadsCard";
import PendingQuestions from "@/components/chat/PendingQuestions";
import ChatAssistant from "@/components/chat/ChatAssistant";
import FranchiseStatusCard from "@/components/dashboard/FranchiseStatusCard";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto ml-64"> 
        <DashboardHeader />

        <div className="p-6 flex-grow">
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <AccountProgressCard />
            <FranchiseStatusCard/>
            <InsightsAndLeadsCard />
          </div>

          {/* Bottom Section - Chat/Questions */}
          <div className="border-t-2 border-highlight pt-6"> 
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="lg:col-span-1">
                 <PendingQuestions />
               </div>
               <div className="lg:col-span-2 bg-white rounded-lg shadow-md"> 
                 <ChatAssistant />
               </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}