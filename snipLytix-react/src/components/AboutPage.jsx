import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-16 sm:px-10 px-6 min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl p-8 sm:p-12 rounded-2xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold italic text-slate-800 mb-5 text-center">
          About SnipLytix
        </h1>
        <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed mb-8">
          SnipLytix is designed to make <b>link management seamless and efficient</b>. 
          Whether youre a marketer, business owner, or casual user, our platform 
          offers powerful tools to <b>shorten, customize, and analyze your links </b>  
            in real time.  
          <br /> <br />
          With a <b>user-friendly interface</b>, you can create <b>trackable short URLs</b>, 
          monitor <b>click trends</b>, and gain <b>detailed insights</b> into your audience.  
          We prioritize <b>speed, security, and reliability</b>, ensuring your links 
          remain accessible and protected at all times.
        </p>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <feature.icon className="text-3xl transition-transform transform hover:scale-110" style={{ color: feature.color }} />
              <div>
                <h2 className="text-xl font-semibold text-slate-800">{feature.title}</h2>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Feature List for cleaner JSX
const features = [
  {
    icon: FaLink,
    title: "Simple URL Shortening",
    description:
      "Generate short, clean, and shareable links instantly. Our streamlined process makes it easy to manage your links without clutter or complexity.",
    color: "#3b82f6", // Blue
  },
  {
    icon: FaShareAlt,
    title: "Powerful Analytics",
    description:
      "Track every click in real-time. Analyze geographic locations, referral sources, and device types to optimize your content strategy effectively.",
    color: "#22c55e", // Green
  },
  {
    icon: FaEdit,
    title: "Enhanced Security",
    description:
      "Your data is safe with us. We implement encryption and advanced security measures to protect your links from unauthorized access or misuse.",
    color: "#9333ea", // Purple
  },
  {
    icon: FaChartLine,
    title: "Fast and Reliable",
    description:
      "Experience lightning-fast redirects with 99.9% uptime. Our robust infrastructure ensures your links are always accessible without delays.",
    color: "#ef4444", // Red
  },
];

export default AboutPage;
