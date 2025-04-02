import { useEffect } from "react";

// export const Navbar= ({menuOpen, setMenuOpen}) => {

//     useEffect(()=>{
//         document.body.style.overflow= menuOpen ?"hidden": "";
//         },[menuOpen]);


//     return (<nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] 
//     backdrop-blur-lg border-b border-white/10 shadow-lg">
//         <div className="max-w-5xl mx-auto px-4">
//             <div className="flex justify-between items-center h-16">
//                 <a href="#home" className="font-mono text-xl font-bold text-white">
//                     {" "}
//                      <span className="text-blue-500">.tech</span>{" "}
//                 </a>

//                 <div className="w-7 h-5 relative cursor-pointer z-50 md:hidden" 
//                 onClick={(prev)=>setMenuOpen(!prev)}>
//                     &#9776;
//                 </div>

//                 <div className="hidden md:flex items-center space-x-8">
//                     <a href="#home" className="text-gray-300 hove:text-white transition-colors">{" "}Home{" "}</a>
//                     <a href="#home" className="text-gray-300 hove:text-white transition-colors">{" "}About{" "}</a>
//                     <a href="#home" className="text-gray-300 hove:text-white transition-colors">{" "}Projects{" "}</a>
//                     <a href="#home" className="text-gray-300 hove:text-white transition-colors">{" "}Contact{" "}</a>

//                 </div>
//             </div>
//         </div>

//     </nav>);
// };

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
  
    return (
      

      <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="md:max-w-2xl
        lg:max-w-5xl mx-auto px-4">

          
          <div className="space-x- flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              Personal <span className="text-blue-500">Portfolio</span>
            </a>
            {/* <div  id='top' className="text-white flex justify-end p-4">
            <a href="#contact"><span className="bg-amber-400 rounded-2xl py-2 px-1 text-sm md:text-base lg:text-lg lg:px-6 lg:py-3">
    Contact Us
            </span></a>
        </div> */}
            <a  href="#developer"
            className=" bg-blue-500 text-white font-bold rounded-2xl px-2 py-1.5">Connect with Me</a>
            <div
              className="w-18 h-5 relative cursor-pointer z-50 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </div>
            <div className="ml-2 mr-8 hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };