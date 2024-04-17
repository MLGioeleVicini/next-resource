import Link from "next/link";
import LogoPic from "./logo/LogoPic";

const Navbar = () => {
    return (
        <div className="flex justify-between p-8 bg-slate-600 ">
            <LogoPic width="250" />
              <Link href="/dashboard">Homepage</Link>
              <Link href="/list">Lista</Link>
              <Link href="/edit">Modifica</Link>
              <Link href="/change-server">Cambia server</Link>
        </div>
    );
};

export default Navbar;
