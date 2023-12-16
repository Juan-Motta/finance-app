import { SettingsIcon } from "@/components/icons";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <Link href={"#"} className="text-xl">
                <span className="text-[#36A3FF]">Finance</span>App
            </Link>
            <Link href={"#"}>
                <SettingsIcon width="28" height="28" />
            </Link>
        </nav>
    );
}

export { Navbar };
