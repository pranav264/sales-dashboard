import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Stats from "../Components/Stats";
import Charts from "../Components/Charts";
import Tables from "../Components/Tables";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import SidebarComponent from "../Components/SidebarComponent";
import { MoveUp } from "lucide-react";

const Home = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div>
            <SidebarComponent openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <div className="roboto-regular px-10 py-10">
          <TopBar handleSideBar={handleSideBar} />
          <Stats />
          <Charts />
          <div id="tables" className="flex flex-col md:flex-row md:justify-center md:items-start gap-2 p-10">
            <Tables />
            <Products />
          </div>
          <Footer />
      </div>
      <a className="fixed bottom-3 right-3 bg-gray-300 p-2 rounded-full transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-gray-400 animate-bounce" href="#home">
        <MoveUp size={20} className="text-gray-700" />
      </a>
    </div>
  );
};

export default Home;
