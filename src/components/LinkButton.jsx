function LinkButton({text, link}){
  return(
 <a className='cursor-pointer bg-[#f72041] hover:bg-[#aa0019] max-w-[500px]  w-full rounded-4xl p-5  mb-5 flex justify-center content-center' target="_blank" href={link}><h1 className='text-white'>{text}</h1></a>
  )
}
export default LinkButton
