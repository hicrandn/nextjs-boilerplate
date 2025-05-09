import { SideBar } from "@/components";

export default function BasicSidebarPage() {
  return (
    <div className="h-screen flex">
      <SideBar.Basic />
      <main className="transition-all duration-300 p-6 overflow-y-scroll overflow:hidden max-h-screen flex-1  ">
        <div className="h-[2000px] sm:h-[1000px] p-6 ">
          <h1 className="text-2xl text-gray-900 font-semibold mb-4">
            Basic Sidebar
          </h1>
          <p className="text-gray-700">
            This page shows an example of the animated dropdown sidebar widget.
            Menu on the left side and content on the right side.
          </p>
        </div>
      </main>
    </div>
  );
}
