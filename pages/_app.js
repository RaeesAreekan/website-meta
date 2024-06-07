import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";


 const App=({ Component, pageProps })=> {
  return (
   <>
   <Navbar company="XYZ Company" user_name="Iman"/>
   <Sidebar/>
   
    <Component {...pageProps}/>
    
      
    
   </>);
}
export default App;
