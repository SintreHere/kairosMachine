import { useState } from "react"
import axios from "axios"



 



function App (){

  const [humid,setHumid] = useState(0)
  const [temp,setTemp] = useState(0)
  const [wind,setWind] = useState(0)
  const[city,setCity] = useState()


  const getName = (e) => {
    setCity(e.target.value)
    console.log(city)
    }
    
     function getWeather() {
  
      const options = {method: 'GET', headers: {accept: 'application/json'}};

      fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=LPUlX8S6smN9rq5OBbrQuhh489UHkqih', options)
        .then(response => {

          const result = response.json()
          setCity(result.location.name)
          console.log(city)
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    
    }

  return (
    <div className=" bg-black w-screen h-screen flex flex-row justify-center ">
    <div className="w-[1389px] h-[832px]">
      <div className="relative w-[970px] h-[654px] top-[89px] left-[210px] bg-[#4e4e5066] rounded-[20px]">
        <div className="absolute w-[425px] h-[72px] top-[126px] left-[274px] font-mono text-8xl text-yellow-400"> NewYork </div>
        <div className="absolute w-[246px] h-[348px] top-[234px] left-[362px]">
          <div className="absolute w-[246px] top-0 left-0 font-sans font-normal text-white text-[50px] text-center tracking-[0] leading-[normal]">
            19:12:98
          </div>
          <img className="absolute w-[245px] h-[245px] top-[57px] left-0 " src="" />
          <div className="absolute w-[198px] top-[310px] left-[24px] font-mono font-normal text-white text-[50px] text-center tracking-[0] leading-[normal]">
            24°C
          </div>
        </div>
        <div className="absolute w-[202px] h-[178px] top-[389px] left-[157px]">
          <div className="relative w-[198px] h-[178px]">
            <div className="absolute w-[178px] h-[178px] top-0 left-[10px] bg-[#1a1a1d] rounded-[23px] duration-300  hover:bg-gray-800 border-4 border-black" />
            <div className="absolute w-[145px] top-[119px] left-[27px] text-3xl font-mono text-white text-center tracking-[0] leading-[normal]">
              Humidity
            </div>
            <div className="absolute w-[198px] top-[45px] left-0 text-6xl font-mono text-white text-center tracking-[0] leading-[normal]">
              65%
            </div>
          </div>
        </div>
        <div className="absolute w-[202px] h-[178px] top-[397px] left-[609px]">
          <div className="relative w-[198px] h-[178px]">
            <div className="absolute w-[178px] h-[178px] top-0 left-[10px] bg-[#1a1a1d] rounded-[23px] duration-300  hover:bg-gray-800 border-4 border-black" />
            <div className="absolute w-[145px] top-[114px] left-[27px] text-3xl font-mono text-white text-center tracking-[0] leading-[normal] ">
              Wind m/s
            </div>
            <div className="absolute w-[198px] top-[43px] left-0 font-mono text-6xl  text-white text-center tracking-[0] leading-[normal]">
              40
            </div>
          </div>
        </div>
        <input type="text" placeholder="Enter city" className=" text-slate-400 font-mono text-center text-4xl w-[376px] h-[67px] left-[256px] bg-[#36363c] rounded-[18px] absolute top-[36px] placeholder:font-mono  placeholder:text-slate-500" onChange={getName}/>
        <button className="w-[73px] h-[67px] left-[671px] absolute top-[36px] bg-[#36363c] rounded-2xl text-center text-5xl pl-3 pt-0.5 duration-500 hover:bg-slate-600" onClick={getWeather} >🔍</button>
      </div>
    </div>
  </div>
  )
}

export default App
