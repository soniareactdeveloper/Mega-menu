import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import  './Navbar.css'
const Navbar = () => {
  return (
    <>
     <div className="main w-full pt-5 pb-3 px-5 bg-black">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap pb-[7px]">
            <img className="w-[105px] h-[23px]" src="https://www.ryans.com/assets/images/ryans-logo.svg" alt="logo" />
            <div className="search flex">
              <input className="w-[385px] h-10 py-[6px] px-[12px] font-sans font-normal text-[16px] text-[#212529] border-[1px] border-solid border-[#ced4da] outline-none bg-white rounded-tl-[10px] rounded-bl-[10px]" type="text" placeholder="Enter Your Keyword..." />
              <button className="icon w-[73px] h-10 bg-[#72BF44] px-[30px] rounded-tr-[10px] rounded-br-[10px] text-[#fff] text-[16px] hover:text-[black]">
                <FaSearch/>
              </button>
            </div>
        </div>
        <nav>
          <ul className="text-white flex items-center justify-between flex-wrap text-[12px] font-bold mt-5">
            <li><Link to="#"><FaHome /></Link></li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Laptop</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-110px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-6 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Acer</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Chuwi</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Dell</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex">
                 <Link to="#">Laptop Ram</Link>
                 <MdPlayArrow className="text-[20px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-extrabold mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">KIngstone</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Cooler</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Caddy</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">K2</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Bag</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Fiesta</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Stand</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Baseus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Vention</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Yuanxin</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Battery</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Dell</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Power House</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Adapter</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Acer</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Power House</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Sony</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Desktop And Server</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-165px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-12 grid-flow-col gap-2 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">Desktop Pc</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Brand Desktop PC</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">All In One PC</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Mini PC</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Ryans PC</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 font-extrabold"><Link to="#">Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Processor</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">MotherBoard</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Desktop Ram</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Optical Device</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Graphics Card</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Power Supply</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Casing</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Casing Fan</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">CPU Cooler</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Keyboard</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Mouse</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">KeyBoard and Mouse Combo</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Mouse Pad</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">UPS</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative font-extrabold laptopRam">
                 <Link to="#">Server</Link>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Rack Server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Tower server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Ryans Server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative font-extrabold laptopRam">
                  <Link to="#">Server Component</Link>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Server Processor</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Keyboard</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Mouse</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">KeyBoard and Mouse Combo</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Mouse Pad</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">UPS</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative font-extrabold laptopRam">
                 <Link to="#">Server</Link>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Rack Server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Tower server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Ryans Server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Casing Fan</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">CPU Cooler</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Keyboard</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Mouse</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">KeyBoard and Mouse Combo</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Mouse Pad</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">UPS</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative font-extrabold laptopRam">
                 <Link to="#">Server</Link>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Rack Server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex items-center">
                 <Link to="#">Tower server</Link>
                 <MdPlayArrow className="text-[10px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-normal mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                  </ul>
                 </div>
                </li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Gaming</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-295px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-8 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">Gaming Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex items-center">
                  <Link to="#">Gaming Console</Link>
                  <MdPlayArrow className="text-[10px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex items-center">
                  <Link to="#">Gaming Controller</Link>
                  <MdPlayArrow className="text-[10px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex items-center">
                  <Link to="#">Virtual Reality (VR)</Link>
                  <MdPlayArrow className="text-[10px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex items-center">
                  <Link to="#">Capture Card</Link>
                  <MdPlayArrow className="text-[10px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex items-center">
                  <Link to="#">Games</Link>
                  <MdPlayArrow className="text-[10px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex items-center">
                  <Link to="#">Gaming chair</Link>
                  <MdPlayArrow className="text-[10px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex items-center">
                  <Link to="#">Gaming Desk</Link>
                  <MdPlayArrow className="text-[10px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Pc</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">Ryans PC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex">
                 <Link to="#">Laptop Ram</Link>
                 <MdPlayArrow className="text-[20px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-extrabold mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">KIngstone</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Cooler</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Caddy</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">K2</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Bag</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Fiesta</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Stand</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Baseus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Vention</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Yuanxin</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Monitor</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-350px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-8 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex">
                 <Link to="#">Laptop Ram</Link>
                 <MdPlayArrow className="text-[20px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-extrabold mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">KIngstone</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Cooler</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Caddy</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">K2</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Bag</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Fiesta</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Stand</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Baseus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Vention</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Yuanxin</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Pc Tablet</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-417px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">Regular Tablet</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex">
                 <Link to="#">Laptop Ram</Link>
                 <MdPlayArrow className="text-[20px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-extrabold mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">KIngstone</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Cooler</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Caddy</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">K2</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Bag</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Fiesta</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Stand</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Baseus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Vention</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Yuanxin</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Printer</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-480px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-8 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex">
                 <Link to="#">Laptop Ram</Link>
                 <MdPlayArrow className="text-[20px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-extrabold mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">KIngstone</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Cooler</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Caddy</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">K2</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Bag</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Fiesta</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Stand</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Baseus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Vention</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Yuanxin</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Camera</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-540px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-6 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                 <div className="flex">
                 <Link to="#">Laptop Ram</Link>
                 <MdPlayArrow className="text-[20px]"/>
                 </div>
                  {/* sub menu */}
                 <div>
                  <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-extrabold mt-2">
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Adata</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Apacer</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Corsoir</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">G.skill</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Hp</Link></li>
                      <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">KIngstone</Link></li>
                  </ul>
                 </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Cooler</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Cooler Master</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Deepcool</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Havit</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Micropack</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Thermaltake</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Caddy</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">K2</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Laptop Bag</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Asus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Fiesta</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Redragon</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1 relative laptopRam">
                  <div className="flex">
                  <Link to="#">Stand</Link>
                  <MdPlayArrow className="text-[20px]"/>
                  </div>
                      {/* sub menu */}
                  <div>
                    <ul className="LaptopRamDrop bg-white w-[190px] absolute top-[0px] left-[100px] rounded-lg text-[15px] font-bold mt-2">
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">All Brands</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Baseus</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Orico</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Ugreen</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Vention</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Wiwu</Link></li>
                        <li className="mt-3 hover:bg-[#B2B1B1] pl-4"><Link to="">Yuanxin</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Security System</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-600px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Network</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-700px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Sound System</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-770px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Office Item</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] left-[-860px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Accessories</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] right-[-380px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Software</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] right-[-310px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Daily Life</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] right-[-240px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
            <li className="hover:bg-gray-400 hover:p-2 pb-0 group relative transition-all ease-linear duration-100">
              <Link to="#">Store</Link>
              {/* laptop */}
              <div className="hidden group-hover:block absolute top-[30px] right-[-190px] w-[1400px] p-4 bg-[#CCCCCC] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <ul className="grid grid-rows-4 grid-flow-col gap-1 mb-[40px] text-[13px] text-[#000] font-sans font-normal">
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-bold" to="#">All Monitor</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Asus</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Apple</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold  p-1"><Link to="#">AOC</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Desktop Component</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Motherboard</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Desktop Ram</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Graphics Card</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Power Supply</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold font-extrabold p-1"><Link to="#">Gaming Laptop</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Gigabyte</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Hp</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Huawei</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Lenovo</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Microsoft</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">MSI</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Avita</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link to="#">Infinix</Link></li>
                <li className="hover:bg-[#B2B1B1] hover:font-bold p-1"><Link className="font-extrabold" to="#">Accessories</Link></li>
              </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
     </div>
    </>
  )
}

export default Navbar 