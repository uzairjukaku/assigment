import logo from "./logo.svg";
import "./App.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

// import productimage from './assets/'

import { Slider } from "primereact/slider";

import { InputText } from "primereact/inputtext";

import { Knob } from 'primereact/knob';
        

import { useState } from "react";

function App() {
  const [value, setValue] = useState(null);
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [slider, setSlider] = useState(0);
  const [slider2, setSlider2] = useState(10);
  return (
    <div className="h-screen w-full flex gap-10 justify-center items-center bg-[#1e1e20]  bg-center bg-[url('./assets/bg.png')]">
    
    <div className="card-container bg-white w-96 h-max pb-10 shadow-md rounded-xl grid grid-rows-[200px_1fr] overflow-hidden">
        <img
          src={require("./assets/product.png")}
          className="h-full w-full object-contain bg-white overflow-hidden"
        ></img>
        <div className="p-6 flex flex-col gap-2">
          <p className="text-lg font-bold">
            Rear Brake Disc, Mercedes, CLA CGI,Petrol{" "}
          </p>
          <div className="card flex items-center gap-2 justify-content-center">
            <p className="text-base flex-1 font-semibold">Stock:</p>

            <InputText keyfilter="int"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="card flex items-center gap-2 justify-content-center">
            <p className="text-base flex-1 font-semibold">Net Price:</p>

            <InputText keyfilter="int"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">


          
          <div className="flex flex-col justify-center items-center mt-4 gap-2">
            <p className="text-xs flex-1 font-semibold text-center">
              Additional On Price FZ: <br></br>{slider}%
            </p>
           
            <Knob value={slider} onChange={(e) => setSlider(e.value)} />
            <InputText keyfilter="int" className="!w-full"
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-4 gap-2">
            <p className="text-xs flex-1 font-semibold text-center">
              Local Additional On FZ Total : <br></br> {slider2}%
            </p>
            {/* <Slider
              value={slider2}
              onChange={(e) => setSlider2(e.value)}
              className="w-14rem"
            /> */}
            <Knob value={slider2} onChange={(e) => setSlider2(e.value)} />
            <InputText keyfilter="int" className="!w-full"
              value={slider2}
              onChange={(e) => setSlider2(e.target.value)}
            />
          </div>
          </div>
        </div>
      </div>
      <div className="card-container bg-white w-96 h-max pb-10 shadow-md rounded-xl grid grid-rows-[200px_1fr] overflow-hidden">
        <img
          src={require("./assets/product.png")}
          className="h-full w-full object-contain bg-white overflow-hidden"
        ></img>
        <div className="p-6 flex flex-col gap-2">
          <p className="text-lg font-bold">
            Rear Brake Disc, Mercedes, CLA CGI,Petrol{" "}
          </p>
          <div className="card flex items-center gap-2 justify-content-center">
            <p className="text-base flex-1 font-semibold">Stock:</p>

            <InputText keyfilter="int"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="card flex items-center gap-2 justify-content-center">
            <p className="text-base flex-1 font-semibold">Net Price:</p>

            <InputText keyfilter="int"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <p className="text-base flex-1 flex flex-col gap-2 font-semibold">
              Additional On Price FZ: {slider}%
              <InputText keyfilter="int" className="!w-full"
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
            </p>
            <Slider
              value={slider}
              onChange={(e) => setSlider(e.value)}
              className="w-14rem"
            />
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <p className="text-base flex-1 flex flex-col gap-2 font-semibold">
              Local Additional On FZ Total : {slider2}%
              <InputText keyfilter="int" className="!w-full"
              value={slider2}
              onChange={(e) => setSlider2(e.target.value)}
            />
            </p>
            <Slider
              value={slider2}
              onChange={(e) => setSlider2(e.value)}
              className="w-14rem"
            />
          </div>


        </div>
      </div>

     
    </div>
  );
}

export default App;
