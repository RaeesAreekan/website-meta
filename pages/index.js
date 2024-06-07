import Image from "next/image";
import { Inter } from "next/font/google";
import RecentListings from "@/components/Recent_listings";
import Post_Candidates from "@/components/Post_candidates";
import Sidebarn from "@/components/SidebarN";
import RecentN from "@/components/RecentN";
import NotifN from "@/components/NotifN";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar user_name="Iman" company="XYZ Company"/>
    <div className="flex h-screen">
      <Sidebarn/>
      <RecentN/>
      <NotifN/>
    </div>
    </>
  );
}
