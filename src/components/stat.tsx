import CountUp from "react-countup";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    // Trigger count up when the component mounts (can also use IntersectionObserver for visibility)
    setTimeout(() => setStartCount(true), 400); // Delay to simulate load animation
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-8">Our Impact Areas</h3>
      <div className="space-y-6">
        {/* Progress Bars */}
        <ProgressBar label="Education Support" percent={85} />
        <ProgressBar label="Child Healthcare" percent={78} />
        <ProgressBar label="Mentorship & Empathy Building" percent={91} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center text-white/90">
        <StatItem label="Years of Impact" end={5} suffix="+" start={startCount} />
        <StatItem label="Children Reached" end={2000} suffix="+" start={startCount} />
        <StatItem label="Volunteers & Donors" end={300} suffix="+" start={startCount} />
        <StatItem label="Local Communities" end={12} start={startCount} />
      </div>
    </section>
  );
};

// Reusable ProgressBar
const ProgressBar = ({ label, percent }: { label: string; percent: number }) => (
  <div>
    <p className="mb-2">{label}</p>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div className="bg-[#fa0262] h-2 rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

// Reusable StatItem
const StatItem = ({
  label,
  end,
  suffix,
  start,
}: {
  label: string;
  end: number;
  suffix?: string;
  start: boolean;
}) => (
  <div>
    <h4 className="text-3xl font-bold">
      {start && <CountUp start={0} end={end} duration={1.5} suffix={suffix} />}
    </h4>
    <p className="text-sm mt-1">{label}</p>
  </div>
);

export default StatsSection;
