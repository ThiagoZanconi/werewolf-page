import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
        <nav className="w-full h-[160px] bg-gray-800 flex justify-items-center items-center">
            <div className="w-full flex mx-[10%] gap-6">
                <Link to="/" className="rounded-md px-3 py-3 text-4xl hover:bg-white/5">
                    Home
                </Link>
                <Link to="/howtoplay" className="rounded-md px-3 py-3 text-4xl hover:bg-white/5">
                    How To Play
                </Link>
                <Link to="/roles" className="rounded-md px-3 py-3 text-4xl hover:bg-white/5">
                    Roles
                </Link>
            </div>
        </nav>
        <main className="w-full m-5 max-w-7xl mx-auto">
            <Outlet />
        </main>
    </>
  )
}
