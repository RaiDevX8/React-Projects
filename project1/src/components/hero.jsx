const Hero = () => {
    return (
      <div className="hero-container bg-blue-400 ">
        {/* Dark blue side */}
        <div className=" width-full bg-blue-900 text-white  p-10">
          <div className=" flex flex-col justify-center items-center px-4">
            <h1 className="text-6xl font-mono text-center mb-4">
              Welcome to Our Fundraising Campaign!
            </h1>
            <p className="text-lg mb-10 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sodales consectetur erat vel consectetur.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima soluta, sit quos aut veniam a cum dignissimos tempore officiis! Dicta facilis odit sapiente recusandae quae ipsa qui quaerat accusamus iure.
            </p>
            <button className="btn donate-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
              Donate Now
            </button>
          </div>
        </div>
        <div className=" pt-10 pb-10">
            <p className="  bold whitespace-wrap text-center justify-center align-middle  text-3xl text-white">
<span className="font-bold text-3xl font-mono text-black">
National Service :   </span> Blog
Take a look inside the world of national service and volunteering to learn how AmeriCorps and AmeriCorps Seniors improve lives, foster civic engagement, and strengthen communities across the country.</p>
        </div>
      </div>
    );
  };
  
  export default Hero;
  