import React,{memo} from 'react'
import Home from '../Asset/1.png'
const HomePage = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" width={600} src={Home}/>
    </div>



    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-fontfirst lg:text-6xl">Before they Rent out
        {/* <br class="hidden lg:inline-block">readymade gluten</br> */}
      </h1>
      <p class="mb-8 leading-relaxed font-fontfirst ">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.

</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white  border-0 py-2 px-6 focus:outline-none bg-[rgb(255,76,48)] rounded text-lg font-fontfirst">Book Ride</button>
        <button class="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline hover:bg-white box-border hover:border-black hover:text-black rounded text-lg font-fontfirst">Read More</button>
      </div>
    </div>
  </div>
</section>




    </div>
  )
}

export default memo(HomePage);