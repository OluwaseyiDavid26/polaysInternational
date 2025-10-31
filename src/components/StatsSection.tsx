import  { useState, useEffect, useRef } from "react";
import { Home, Users, FileText } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const Counter: React.FC<{ end: number; duration?: number }> = ({
  end,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-7xl font-bold text-blue-900 mb-4">
      {count}
    </div>
  );
};

const StatCard: React.FC<{ stat: StatItem; index: number }> = ({
  stat,
  index,
}) => {
  return (
    <div
      className="text-center transform transition-all duration-500 hover:scale-105"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
      }}
    >
      <Counter end={stat.value} />
      <div className="flex items-center justify-center gap-3">
        <div className={`${stat.color}`}>{stat.icon}</div>
        <h5 className="text-lg font-semibold text-blue-900 uppercase tracking-wide">
          {stat.label}
        </h5>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 1,
      value: 72,
      label: "Completed Projects",
      icon: <Home className="w-6 h-6" />,
      color: "text-orange-500",
    },
    {
      id: 2,
      value: 34,
      label: "Happy Customers",
      icon: <Users className="w-6 h-6" />,
      color: "text-orange-500",
    },
    {
      id: 3,
      value: 12,
      label: "Ongoing Projects",
      icon: <FileText className="w-6 h-6" />,
      color: "text-orange-500",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="relative w-full py-20 bg-gray-50 overflow-hidden">
        {/* Geometric Background Pattern */}
        <svg
          className="absolute top-0 left-0 w-auto h-full opacity-10 pointer-events-none"
          width="358"
          height="721"
          viewBox="0 0 358 721"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin slice"
        >
          <g
            stroke="currentColor"
            className="text-orange-500"
            strokeWidth="1.5"
          >
            <path d="M356.475 355.943L239.925 93.594L64.2729 93.594L180.823 355.943L356.475 355.943Z" />
            <path d="M-248.231 652.782L-131.68 390.433L43.9714 390.433L-72.579 652.782L-248.231 652.782Z" />
            <path d="M199.647 262.849L83.0971 0.49999L-92.5547 0.499974L23.9957 262.849L199.647 262.849Z" />
            <path d="M-92.5555 559.688L23.9949 297.339L199.647 297.339L83.0963 559.688L-92.5555 559.688Z" />
            <path d="M123.64 423.661L7.08952 161.312L-168.562 161.312L-52.0119 423.661L123.64 423.661Z" />
            <path d="M-15.3953 720.5L101.155 458.151L276.807 458.151L160.256 720.5L-15.3953 720.5Z" />
          </g>
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {stats.map((stat, index) => (
                <StatCard key={stat.id} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
