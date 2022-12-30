import Image from "next/image";

export default function About() {
  return (
    <div className="py-16">
      <div className="flex">
        <div className="text-beige m-auto">
          <h3 className="text-2xl mb-4 text-center text-yellow">Speakers</h3>
          { /* TODO: Componentize */}
          <div className="max-w-2xl space-y-12 py-8">
            <div className="flex-1 flex">
              <div className="mr-5">
                <Image src="/placeholder.jpg" height={500} width={500} />
              </div>
              <div>
                <h4 className="text-xl text-blue">Jasmine Lawrence</h4>
                <h5 className="text-lg">Engineer &amp; Entrepreneur</h5>
                <p className="text-md">Jasmine is an experienced Product Manager and Entrepreneur with a passion for both consumer technology and business strategy. Whether it&apos;s building devices or formulating beauty products, she focuses on creating delightful experiences that make a difference in people&apos;s lives.</p>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="mr-5">
                <Image src="/placeholder.jpg" height={500} width={500} />
              </div>
              <div>
                <h4 className="text-xl text-blue">Jasmine Lawrence</h4>
                <h5 className="text-lg">Engineer &amp; Entrepreneur</h5>
                <p className="text-md">Jasmine is an experienced Product Manager and Entrepreneur with a passion for both consumer technology and business strategy. Whether it&apos;s building devices or formulating beauty products, she focuses on creating delightful experiences that make a difference in people&apos;s lives.</p>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="mr-5">
                <Image src="/placeholder.jpg" height={500} width={500} />
              </div>
              <div>
                <h4 className="text-xl text-blue">Jasmine Lawrence</h4>
                <h5 className="text-lg">Engineer &amp; Entrepreneur</h5>
                <p className="text-md">Jasmine is an experienced Product Manager and Entrepreneur with a passion for both consumer technology and business strategy. Whether it&apos;s building devices or formulating beauty products, she focuses on creating delightful experiences that make a difference in people&apos;s lives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}