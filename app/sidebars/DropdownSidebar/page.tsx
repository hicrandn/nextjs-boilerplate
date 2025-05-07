import { SideBar } from "@/components";

export default function DropdownSidebarPage  ()  {
  return (
      <div className="h-screen flex">
        <SideBar.Dropdown />
        <main className="transition-all duration-300 p-6 overflow-y-scroll max-h-screen flex-1 ml-20 md:ml-64">
          <div className="h-[2000px] sm:h-[1000px] p-6 ">
            <h1 className="text-2xl text-gray-900 font-semibold mb-4">
              Dropdown Sidebar
            </h1>
            <p className="text-gray-700">
              This page shows an example of the classic simple sidebar widget.
              Menu on the left side and content on the right side.
            </p>
          </div>
        </main>
      </div>
    );
}



