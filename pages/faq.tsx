import FAQs from "../src/components/FAQ";
import ComingSoon from "../src/svg/ComingSoon";

export default function FAQPage() {
  return (
      <div className="w-2/3 m-auto text-white">
        <h1 className="font-title text-4xl md:text-9xl mt-48 text-center">
        FAQs
        </h1>
        <FAQs />
      </div>
  )
}