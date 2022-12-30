export default function Sponsors() {
  return (
    <div className="py-16 bg-white">
      <div className="flex">
        <div className="text-beige m-auto">
          <h3 className="text-2xl mb-4 text-center text-purple">Sponsors</h3>
          <div className="space-y-12">
            { /* TODO: Componentize + Responsive */ }
            <div className="flex justify-between items-center">
              <div className="text-lg text-black mr-8 w-24 text-right">Silver</div>
              <div className="flex flex-1 justify-center gap-x-8">
                <img src="/sponsors/wayfair.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
                <img src="/sponsors/oracle.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
                <img src="/sponsors/capital-one.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg text-black mr-8 w-24 text-right">Bronze</div>
              <div className="flex flex-1 justify-center gap-x-8">
                <img src="/sponsors/hrt.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
                <img src="/sponsors/figma.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
                <img src="/sponsors/sandia.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg text-black mr-8 w-24 text-right">Special</div>
              <div className="flex flex-1 justify-center gap-x-8">
                <img src="/sponsors/meta.gif" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg text-black mr-8 w-24 text-right">Kind</div>
              <div className="flex flex-1 justify-center gap-x-8">
                <img src="/sponsors/gcp.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
                <img src="/sponsors/replit.png" className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}