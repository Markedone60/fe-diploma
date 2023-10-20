import React from "react";
import { useSelector } from "react-redux";
import './Sidebar.css';
import LastTickets from "./LastTickets/LastTickets";
import SidebarWithSelectors from "./SidebarWithSelectors/SidebarWithSelectors";
import SidebarCompleted from "./SidebarCompleted/SidebarCompleted";

export default function Sidebar() {
  const { stage } = useSelector((state) => state.stage);
  
  return (
    <aside className="sidebar-aside">
      <section className="sidebar">
        {stage === 1 ?
          (<div> 
            <SidebarWithSelectors />
          </div>) : 
          (<div>
            <SidebarCompleted />
          </div>)
        }
      </section>

      <section className="sidebar-lasttickets-container">
        {stage === 1 && <LastTickets />}
      </section>
    </aside>
  )
}