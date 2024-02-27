import { useState } from "react";

const articleData = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png",
    header: "Marching Cubes in Unity C#",
    description: "some description"},
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/600px-WebAssembly_Logo.svg.png",
    header: "WebAssembly Tech Talk",
    description: "some description"},
  {
    src: "https://miro.medium.com/v2/format:webp/1*b3qxB8ELI-kyQKztCsLwEQ.png",
    header: "The Importance of Logging in Web Applications",
    description: "some description"},
];

function Articles() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const setSlide = (newSlideIndex: number)=>{
    newSlideIndex = newSlideIndex<0?articleData.length - 1:newSlideIndex;
    newSlideIndex %= articleData.length;
    setCurrentSlide(newSlideIndex);
  }
  
  const articles = [];
  const buttons = [];

  let i = 0;
  for (const articleDatum of articleData){
    articles.push(
      <div key={`article ${i}`} className={`${i === currentSlide || "hidden"} h-full duration-700 ease-in-out`}>
        <img src={articleDatum.src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
      </div>
    );
    const temp = i;
    const bg = i === currentSlide?"bg-black":"bg-white"
    buttons.push(
      <button onClick={()=>setSlide(temp)} key={`button ${i}`} type="button" className={`w-5 h-5 rounded-full ${bg}`} aria-current="true" aria-label={`Slide ${i+1}`}></button>
    );
    i++;
  }

  return (
    <>
      <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
        <div className="relative h-full overflow-hidden rounded-lg">
          { articles }
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          { buttons }
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={()=>setSlide(currentSlide - 1)}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={()=>setSlide(currentSlide + 1)}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
    )
  }
  
  export default Articles