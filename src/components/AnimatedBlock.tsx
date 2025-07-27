import '../css/blockedAnimated.css';
const AnimatedBlock = () => {
const logos = [
    '/ikhsan-portfolio/langues/react.png',
    '/ikhsan-portfolio/langues/angular.png',
    '/ikhsan-portfolio/langues/vue.png',
    '/ikhsan-portfolio/langues/vite.png', 
];

  return (
    <div className=" relative lg:scale-[5] scale-[3] h-[50px] w-[40px]">
{logos.map((logo, i) => (
  <div key={i} className={`box box-${i + 1} relative opacity-0 left-[10px]`}>
    <div className="side-left absolute bg-gradient-to-r from-blue-600 to-green-500  w-[19px] h-[5px] skew-y-[-25deg] top-[14px] left-[10px]"></div>
    <div className="side-right absolute bg-gradient-to-r from-blue-600 to-green-500  w-[19px] h-[5px] skew-y-[25deg] top-[14px] left-[-9px]"></div>
    <div className="side-top absolute w-[19px] h-[20px] rotate-[45deg] skew-x-[-20deg] skew-y-[-20deg] overflow-hidden bg-gradient-to-r from-blue-600 to-green-500">
      <img
        src={logo}
        alt="Logo"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
))}

    </div>
  );
};

export default AnimatedBlock;
