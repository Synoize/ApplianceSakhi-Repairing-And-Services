import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Stats = () => {
  const { dashboardData } = useContext(AppContext);

  return (
    <section className="w-full bg-blue text-white py-12 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-6">

        <div className="flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-extrabold">2025</h3>
          <p className="mt-2 text-base md:text-lg text-gray-200">
            ApplianceSakhi Patented
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-extrabold">{dashboardData? dashboardData.totalOrders : 0}+</h3>
          <p className="mt-2 text-base md:text-lg text-gray-200">Total Platform Orders</p>
        </div>


        <div className="flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-extrabold">10+</h3>
          <p className="mt-2 text-base md:text-lg text-gray-200">
            Service Partners
          </p>
        </div>
      </div>
    </section>
  )
};

export default Stats;
