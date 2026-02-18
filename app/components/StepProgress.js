export default function StepProgress() {
  const steps = [
    "Basic Info",
    "Category Details",
    "Scheduling & Targeting",
    "Review & Pay",
  ];

  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-4 w-full">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
            ${i === 0 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            {i + 1}
          </div>
          <p className={`text-sm ${i === 0 ? "font-semibold" : "text-gray-500"}`}>
            {step}
          </p>

          {i !== steps.length - 1 && (
            <div className="flex-1 h-[1px] bg-gray-200 mx-4" />
          )}
        </div>
      ))}
    </div>
  );
}
