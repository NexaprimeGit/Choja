import Image from "next/image";

export default function FormSidebar() {
  return (
    <div className="space-y-8 sticky top-20">

      {/* Live Preview */}
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100">
        <p className="text-xs text-green-600 font-semibold mb-4 tracking-wide">
          LIVE PREVIEW
        </p>

        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/template1.jpg"
            width={400}
            height={250}
            alt="preview"
            className="w-full object-cover"
          />
        </div>

        <h4 className="font-semibold mt-4 text-gray-800">
          Apple iPhone 15 Pro Max - Mint Condition
        </h4>
        <p className="font-bold text-xl mt-2 text-blue-600">₹75,000</p>
      </div>

      {/* Pricing */}
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 space-y-6">
        <h4 className="font-semibold text-lg text-gray-800">
          Promotion & Pricing
        </h4>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Featured Upgrade</span>
            <span className="font-medium">₹799</span>
          </div>

          <div className="flex justify-between">
            <span>Standard Listing</span>
            <span className="font-medium">₹399</span>
          </div>
        </div>

        <div className="border-t pt-4 flex justify-between font-semibold text-gray-800">
          <span>Total</span>
          <span className="text-blue-600">₹1,198</span>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:opacity-90 transition shadow-md">
          Review & Post Ad
        </button>

        <button className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition">
          Save Draft
        </button>
      </div>
    </div>
  );
}
