import { useState } from "react";
import products from "./dummydata";


 export const LandingPage = ()=> {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4)
    }

    return (
        <div className="h-screen ">
            <div className="flex text-2xl h-16 justify-between bg-black text-white">
                <h1 className="mt-5">Primechase Studios</h1>
                <button className="cursor-pointer">Menu[+]</button>
            </div>
            <div className="flex">
                <div className="bg-white w-6/12">
                    <img src="/logo.jpg" alt=""/>
                </div>
                <div className="customBlue w-6/12 text-white">
                    <h1 className="text-6xl font-extrabold w-4 mt-20 ml-18">Explore Creativity</h1>
                    <p className="w-92 text-left ml-18 mt-8 text-lg">Welcome to Primechase Studios, 
                        where creativity meets innovation. 
                        We are dedicated to providing top-notch graphic design services that elevate your brand to new heights. 
                        Let's turn your vision into reality!
                    </p>
                    <button className="mt-8 ml-18 bg-purple-400 rounded-4xl p-3 py-2 hover:bg-black text-black hover:border-3 hover:text-white hover:border-purple-400">Get Started</button>
                </div>
            </div>
            <div className="customPink">
                <h1 className="text-6xl font-extrabold text-left text-white  ">Services</h1>
                <hr className="text-white mt-12 h-2"/>
                <div className="flex mt-12 h-82 text-white text-4xl justify-between">
                    <div className="w-80 ml-20 h-64 border-white border-2">
                        <p className="">Marketing Materials</p>
                        <hr className="mt-6 w-56 ml-12"/>
                        <p className="mt-4 text-2xl text-left ml-6">US$ 200</p>
                        <button className="bg-blue-500 p-2 mt-2">Book Now</button>
                    </div> 
                    <div className="w-80 h-64 border-white border-2">
                        <p className="">Poster Design</p>
                        <hr className="mt-6 w-56 ml-12"/>
                        <p className="mt-8 text-left text-2xl ml-6">US$ 200</p>
                        <button className="bg-blue-500 p-2 mt-8">Book Now</button>
                    </div>
                    <div className="w-80 mr-20 h-64 border-white border-2">
                        <p>Logo Design</p>
                        <hr className="mt-6 w-56 ml-12"/>
                        <p className="mt-8 text-left ml-6 text-2xl">US$ 200</p>
                        <button className="bg-blue-500 p-2 mt-8">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="h-4/6">
                <div className="flex h-full">
                    <div className="w-6/12  h-full customBlue">
                        <h1 className="text-6xl mt-4 text-center -ml-32 font-bold text-white">Our Story</h1>
                        <p className="text-left text-white mt-12 text-xl w-10/12 ml-12">At Primechase Studios, we are passionate about crafting unique
                            design solutions that captivate audiences and drive results.
                            With a focus on tailoring each project to our client's background,
                                we ensure that every design resonates with their target market.
                            Let us bring your ideas to life!
                        </p>
                        <button className="p-5 ml-40 mb-14.5  mt-12 py-2 bg-purple-400 rounded-4xl">Learn More</button>
                    </div>
                    <div className="w-6/12 h-full"> 
                        <img src="/story.jpg" alt="" className="w-full h-full"/>
                    </div>
                </div>
            </div>
            <div className="text-white w-full flex flex-col  bg-black">
                <h1 className="text-2xl text-center font-bold">My Portifolio</h1>
                <p className="w-1/3 ml-[500px] text-center font-mono mt-4 text-xl ">Welcome to my Portifolio. Here you'll find a selection of my work. Explore my projects to learn more about what I do.</p>
                <div className="mt-6">
                    <div className="flex flex-wrap gap-8">
                        {products.map((product)=>(
                            <div key={product.id} className="">
                                <img src={product.image} alt={product.image} className="w-[450px] ml-6 h-86" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="customBlue flex flex-col w-full text-white">
                <div>
                    <h1 className="text-4xl mt-4 text-center font-bold">Follow Us</h1>
                    <hr className=" mt-6"/>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                    {products.slice(0, visibleCount).map((product)=>(
                        <div key={product.id}>
                            <img src={product.image} alt="" className="w-[350px] ml-3 h-86" />
                        </div>
                    ))}
                </div>
                <button onClick={handleLoadMore} className="mt-8 bg-purple-400 p-3 mx-auto py-2 hover:bg-black w-28 text-center text-black hover:border-3 hover:text-white hover:border-purple-400 mb-8">Load more</button>
            </div>
            <hr className="text-white "/>
            <div className="bg-black h-screen w-full flex flex-col text-white">
                <h1 className="ml-20 text-2xl font-bold mt-6">Primechase Studios</h1>
                <div className="flex flex-row mt-6 h-56 ">
                    <div className="w-2/12 customPink  border-white border-2">
                        <div className="ml-4 mt-14">
                            <p>+265 991 714 487</p>
                            <p>+265 884 720 212</p>
                            <p>primechasestudios@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-2/12 border-white border-2 customBlue">
                        <div className="ml-6 mt-14">
                            <p>Area 49</p>
                            <p>Dubai</p>
                            <p>Mdechi Street 1</p>
                            <p>Lilongwe</p>
                            <p>Malawi</p>
                            <p>Africa</p>
                            </div>
                    </div>
                    <div className="w-8/12 border-2 customPink">

                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="border-2 h-52 w-2/12 border-white">
                           
                    </div>
                    <div className="w-10/12 border-2 border-white">
                        <h1>Stay Connected with US</h1>
                        <p>Enter Your Email Here*</p>
                        <form>
                            <input />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )
};
