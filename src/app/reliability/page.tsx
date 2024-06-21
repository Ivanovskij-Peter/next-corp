import Hero from "@/components/hero";
import ReliabilityImg from "public/reliability.jpg";

export default function ReliailityPage() {
  return (
    <Hero
      imgData={ReliabilityImg}
      imgAlt="welding"
      title="Super high reliability hosting."
    />
  );
}
