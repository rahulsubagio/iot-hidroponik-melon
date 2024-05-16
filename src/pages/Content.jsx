import { Icon } from "@iconify/react/dist/iconify.js"
import Dashboard from "./content-items/Dashboard"
import Target from "./content-items/Target"
import Inventory from "./content-items/Inventory"
import History from "./content-items/History"
import Setting from "./content-items/Setting"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const Content = () => {

  const [activeTab, setActiveTab] = useState(0)

  const sideItem = [
    {
      name: "Dashboard",
      icon: <Icon icon="material-symbols:dashboard-outline-rounded" />,
      page: <Dashboard/>,
    },
    {
      name: "Target",
      icon: <Icon icon="material-symbols:target" />,
      page: <Target/>,
    },
    {
      name: "Inventory",
      icon: <Icon icon="material-symbols:inventory-2-outline-rounded" />,
      page: <Inventory/>,
    },
    {
      name: "History",
      icon: <Icon icon="material-symbols:history-rounded" />,
      page: <History/>,
    },
    {
      name: "Setting",
      icon: <Icon icon="material-symbols:settings-rounded" />,
      page: <Setting/>,
    },
  ] 

  return (
    <>
      <div className="flex flex-col">
        <header>
          <h3 className="font-semibold text-slate-600">{sideItem[activeTab].name}</h3>
        </header>
        <aside className="fixed h-screen">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} sideItem={sideItem} />
        </aside>
        <div className="p-2 mt-14 ml-14">
          {sideItem[activeTab].page}
        </div>
      </div>
    </>
  )
}

export default Content