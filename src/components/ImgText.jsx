function ImgText({text,img}){
  return(
  <div className='rounded-3xl max-w-[500px] my-5 flex-col justify-center content-center overflow-hidden'>
      <img src={img} className='w-dvw h-60 object-cover'  alt="Running Urim"/>
      <h1 className="text-white text-center p-2 bg-[#2C2C2C]">{text}</h1>
  </div>
  )
}

export default ImgText
