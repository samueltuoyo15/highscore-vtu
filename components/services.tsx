import { Phone, Wifi, Tv, Zap, HardDrive, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Airtime", icon: Phone, href: "/airtime" },
  { name: "Data", icon: Wifi, href: "/data" },
  { name: "Cable TV", icon: Tv, href: "/cable" },
  { name: "Electricity", icon: Zap, href: "/electricity" },
  { name: "Internet", icon: HardDrive, href: "/internet" },
  { name: "Transfer", icon: Smartphone, href: "/transfer" },
];

export default function Services() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Quick Services</h2>
        <Link href="/services" className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center gap-4 active:scale-95"
          >
            <div className="w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <service.icon className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-gray-700 text-sm group-hover:text-primary transition-colors">
              {service.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
