import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import style from '../styles/Listings.module.css'
export default function App({ Component, pageProps }) {
  return (
   <>
   <Navbar company="XYZ Company" user_name="Iman"/>
   <Sidebar></Sidebar>
   
    <Component {...pageProps}/>
   </>);
}
