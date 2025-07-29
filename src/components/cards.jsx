import React from 'react';
import apple from '../assets/apple.jpg';
import hero from '../assets/hero.jpg';
import iphon16 from '../assets/iphone16.jpg';

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={apple} alt="Apple product" />
          <h2 className="text-2xl font-bold text-center py-8">single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted user</p>
            <p className="py-2 border-b mx-8">send up to 2 GB</p>
          </div>
          <button
  type="button"
  style={{ backgroundColor: 'green' }}
  className=" w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 "
>
  Start Trial
</button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={hero} alt="Hero product" />
          <h2 className="text-2xl font-bold text-center py-8">single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted user</p>
            <p className="py-2 border-b mx-8">send up to 2 GB</p>
          </div>
          <button type="button" className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={iphon16} alt="iPhone 16" />
          <h2 className="text-2xl font-bold text-center py-8">single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted user</p>
            <p className="py-2 border-b mx-8">send up to 2 GB</p>
          </div>
          <button
  type="button"
  style={{ backgroundColor: 'green' }}
  className=" w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 "
>
  Start Trial
</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
