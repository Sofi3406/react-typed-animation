import React from 'react';
import Laptop from '../assets/iphone16.jpg';

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="iPhone 16"
          loading="lazy"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet
            nihil blanditiis animi facilis ipsum. Quas atque fugiat exercitationem!
            Eum, inventore odit aliquam natus error ex amet numquam minima? Expedita!
          </p>
          <button
            type="button"
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
