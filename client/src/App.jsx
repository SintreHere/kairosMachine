import { useState } from "react"

const key = import.meta.env.VITE_KEY





function App() {

  const [humid, setHumid] = useState(0)
  const [temp, setTemp] = useState(0)
  const [wind, setWind] = useState(0)
  const [city, setCity] = useState()
  const [pre, setPre] = useState()
  const [dis, setDis] = useState(false)
  const [cod,setCod] = useState()
  const[city1,setCity1] = useState()
  const getName = (e) => {
    setDis(false)
    setCity1(e.target.value)
  }

  async function getWeather() {

    setDis(true)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&units=metric&appid=${key}`)
    var data = await response.json()
    if(response.status != 404)
    {
      setPre(data.main.pressure)
      setCity(data.name)
      setHumid(data.main.humidity)
      setTemp(data.main.temp)
      setWind(data.wind.speed)
      setCod(data.weather[0].icon)
    }
    else{
      setDis(false)
      alert("Enter valid city name")
      setPre("")
      setCity("")
      setHumid("")
      setTemp("")
      setWind("")
      setCod("")

    }
    }

  return (
    <div className=" bg-black w-screen h-screen flex flex-row justify-center ">
      <div className="w-[1389px] h-[832px]">
        <div className="relative w-[970px] h-[654px] top-[89px] left-[210px] bg-[#4e4e5066] rounded-[20px]">
          <div className="flex justify-center pt-[128px]  w-auto h-[72px] font-mono text-8xl text-center text-yellow-400">{dis ? city : ""}</div>
          <div className="absolute  top-[230px] left-[328px] font-sans font-normal  text-white text-4xl tracking-[0] leading-[normal]">
            {dis ? `Pressure :${pre} hPa` : ""}
          </div>
          <div className="absolute  h-[348px] top-[234px] left-[362px]">

            <img className="flex w-[224px] h-[224px] mt-[80px] ml-[5px] left-[30px]" src={dis? `https://openweathermap.org/img/wn/${cod}@2x.png` : "/blank.png"} />
            <div className="absolute w-[198px] top-[310px] left-[24px] font-mono font-normal text-white text-[50px] text-center tracking-[0] leading-[normal]">
              {dis ? `${temp}°C` : ""}
            </div>
          </div>
          <div className="absolute w-[202px] h-[178px] top-[389px] left-[157px]">
            <div className="relative w-[198px] h-[178px]">
              <div className="absolute w-[178px] h-[178px] top-0 left-[10px] bg-[#1a1a1d] rounded-[23px] duration-300  hover:bg-gray-800 border-4 border-black" />
              <div className="absolute w-[145px] top-[119px] left-[27px] text-3xl font-mono text-white text-center tracking-[0] leading-[normal]">
                {dis ? "Humidity" : ""}
              </div>
              <div className="absolute w-[198px] top-[45px] left-0 text-6xl font-mono text-white text-center tracking-[0] leading-[normal]">
                {dis ? `${humid}%` : ""}
              </div>
            </div>
          </div>
          <div className="absolute w-[202px] h-[178px] top-[397px] left-[609px]">
            <div className="relative w-[198px] h-[178px]">
              <div className="absolute w-[178px] h-[178px] top-0 left-[10px] bg-[#1a1a1d] rounded-[23px] duration-300  hover:bg-gray-800 border-4 border-black" />
              <div className="absolute w-[145px] top-[114px] left-[27px] text-3xl font-mono text-white text-center tracking-[0] leading-[normal] ">
                {dis ? "Wind m/s" : ""}
              </div>
              <div className="absolute w-[198px] top-[43px] left-0 font-mono text-6xl  text-white text-center tracking-[0] leading-[normal]">
                {dis ? wind : ""}
              </div>
            </div>
          </div>
          <input type="text" placeholder="Enter city" className=" text-slate-400 font-mono text-center text-4xl w-[376px] h-[67px] left-[256px] bg-[#36363c] rounded-[18px] absolute top-[36px] placeholder:font-mono  placeholder:text-slate-500" onChange={getName} />
          <button className="w-[73px] h-[67px] left-[671px] absolute top-[36px] bg-[#36363c] rounded-2xl text-center text-5xl pl-3 pt-0.5 duration-500 hover:bg-slate-600" onClick={getWeather} >🔍</button>
        </div>
      </div>
    </div>
  )
}

export default App
