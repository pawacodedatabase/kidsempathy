import { useEffect, useRef, useState } from "react";
import HomePage from "../components/heroSection";
import CountUp from "react-countup";

// Reusable ProgressBar
const ProgressBar = ({ label, percent, animate }: { label: string; percent: number; animate: boolean }) => (
  <div>
    <p className="mb-2">{label}</p>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-[#fa0262] h-2 rounded-full transition-all duration-1000 ease-in-out"
        style={{ width: animate ? `${percent}%` : `0%` }}
      ></div>
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
      {start ? <CountUp start={0} end={end} duration={1.5} suffix={suffix} /> : "0"}
    </h4>
    <p className="text-sm mt-1">{label}</p>
  </div>
);

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      {
        threshold: 0.4, // Trigger when 40% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <HomePage />

      <section ref={sectionRef} className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-black">Our Impact Areas</h3>

        <div className="space-y-6">
          <ProgressBar label="Education Support" percent={85} animate={startCount} />
          <ProgressBar label="Child Healthcare" percent={78} animate={startCount} />
          <ProgressBar label="Mentorship & Empathy Building" percent={91} animate={startCount} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center text-black/90">
          <StatItem label="Years of Impact" end={5} suffix="+" start={startCount} />
          <StatItem label="Children Reached" end={2000} suffix="+" start={startCount} />
          <StatItem label="Volunteers & Donors" end={300} suffix="+" start={startCount} />
          <StatItem label="Local Communities" end={12} start={startCount} />
        </div>
      </section>
    </>
  );
};

export default Home;
