import Navbar from "@/app/components/Navbar";
import StepProgress from "@/app/components/StepProgress";
import PostAdForm from "@/app/components/PostAdForm";
import FormSidebar from "@/app/components/FormSidebar";
import Footer from "@/app/components/Footer";

export default function FormPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-white min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">

        {/* Step Progress */}
        <StepProgress />

        {/* Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">

          {/* LEFT FORM */}
          <div className="lg:col-span-2">
            <PostAdForm />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <FormSidebar />
          </div>

        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

