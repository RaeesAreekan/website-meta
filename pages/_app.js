import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";


 const App=({ Component, pageProps })=> {
  return (
   <>
  
   
    <Component {...pageProps}/>
    
      
    
   </>);
}
export default App;
