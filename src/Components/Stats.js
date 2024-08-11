import React from "react";
import { Card } from 'primereact/card';
import { ArrowDown, ArrowUp, CirclePercent, IndianRupee, ShoppingCart, Users } from "lucide-react";

const Stats = () => {
  return (
    <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
      <Card className="bg-white px-5" style={{ borderRadius: "13px" }}>
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Sales</p>
                <div className="bg-blue-100 p-2 rounded-lg">
                    <ShoppingCart className="text-blue-600" strokeWidth={1} />
                </div>
            </div>
            <p className="text-2xl font-semibold">120</p>
            <div className="flex justify-start items-center gap-1">
                <p className="text-green-500">+12%</p>
                <ArrowUp className="text-green-500" size={20} strokeWidth={1} />
            </div>
        </div>
      </Card>
      <Card className="bg-white px-5" style={{ borderRadius: "13px" }}>
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Revenue</p>
                <div className="bg-orange-100 p-2 rounded-lg">
                    <IndianRupee className="text-orange-600" strokeWidth={1} />
                </div>
            </div>
            <p className="text-2xl font-semibold">1000</p>
            <div className="flex justify-start items-center gap-1">
                <p className="text-green-500">+20%</p>
                <ArrowUp className="text-green-500" size={20} strokeWidth={1} />
            </div>
        </div>
      </Card>
      <Card className="bg-white px-5" style={{ borderRadius: "13px" }}>
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Customers</p>
                <div className="bg-pink-100 p-2 rounded-lg">
                    <Users className="text-pink-600" strokeWidth={1} />
                </div>
            </div>
            <p className="text-2xl font-semibold">340</p>
            <div className="flex justify-start items-center gap-1">
                <p className="text-red-500">+24%</p>
                <ArrowDown className="text-red-500" size={20} strokeWidth={1} />
            </div>
        </div>
      </Card>
      <Card className="bg-white px-5" style={{ borderRadius: "13px" }}>
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Stock</p>
                <div className="bg-green-100 p-2 rounded-lg">
                    <CirclePercent className="text-green-600" strokeWidth={1} />
                </div>
            </div>
            <p className="text-2xl font-semibold">164</p>
            <div className="flex justify-start items-center gap-1">
                <p className="text-green-500">+30%</p>
                <ArrowUp className="text-green-500" size={20} strokeWidth={1} />
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Stats;
