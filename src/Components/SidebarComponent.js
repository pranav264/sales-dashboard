import { ChartLine, ChartPie, Linkedin, Table } from "lucide-react";
import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SidebarComponent = ({ openSideBar, setOpenSideBar }) => {
  return (
      <Sidebar
        onBackdropClick={() => setOpenSideBar(false)}
        toggled={openSideBar}
        breakPoint="always"
        rootStyles={{
            background:
            'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
        }}
        className="relative"
      >
        <Menu>
          <MenuItem>
                <a href="#stats" className="flex justify-start items-center gap-2">
                    <ChartLine />
                    <p>Stats</p>
                </a>
            </MenuItem>
            <MenuItem>
                <a href="#charts" className="flex justify-start items-center gap-2">
                    <ChartPie />
                    <p>Charts</p>
                </a>
            </MenuItem>
            <MenuItem>
                <a href="#tables" className="flex justify-start items-center gap-2">
                    <Table />
                    <p>Tables</p>
                </a>
            </MenuItem>
        </Menu>
            <a href="https://www.linkedin.com/in/pranav-bapat-a208531b6/">
                <div className="absolute bottom-3 left-3 flex justify-start items-center gap-2">
                        <div className="bg-blue-700 rounded-full p-3">
                            <Linkedin className="text-white" />
                        </div>
                    <p>Pranav Bapat</p>
                </div>
            </a>
      </Sidebar>
  );
};

export default SidebarComponent;
