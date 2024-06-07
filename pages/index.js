import Image from "next/image";
import { Inter } from "next/font/google";
import RecentListings from "@/components/Recent_listings";
import Post_Candidates from "@/components/Post_candidates";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main clss>
      <RecentListings/>
     <Post_Candidates/>

    
      
    </main>
  );
}
