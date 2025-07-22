import { useEffect, useRef, useState } from "react";
import products from "./dummydata";

function useInView(threshold = 0.2) {
        const [isVisible, setIsVisible] = useState(false)
        const ref = useRef()

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => setIsVisible(entry.isIntersecting),
                { threshold }
            )
            if (ref.current) observer.observe(ref.current)
                return () => observer.disconnect()
        }, [threshold] )
        return [ref, isVisible]
    }


 export const LandingPage = ()=> {
    const [visibleCount, setVisibleCount] = useState(4);
    const [servicesRef, servicesVisible] = useInView()
    const [followRef, followVisible] = useInView()
    const [scale, setScale] = useState(1.1)
    const [loaded, setLoaded] = useState(false)
    const [storyRef, storyVisible] = useInView()
    const [footerRef, footerVisible] = useInView()

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4)
    }

    
    useEffect(() => {
        setLoaded(true)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const imageContainer = document.getElementById("zoomTarget")
            if (!imageContainer) return

            const react = imageContainer.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const progress = Math.min(Math.max((windowHeight -react.top) / windowHeight, 0), 1)

            const newScale = 1.1 - (progress * 0.1)
            setScale(newScale)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return() => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className="">
            <div className="flex">
                <div className={`bg-white w-6/12 ${loaded ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-8'}`}>
                    <img src="/logo.jpg" alt=""/>
                </div>
                <div className="customBlue w-6/12 text-white px-10 pt-20">
                    <h1 className={`text-6xl font-extrabold w-4 mt-20 ml-18 transition-all duration-700 ease-out [animation-delay:0.4s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-80'}`}>Explore Creativity</h1>
                    <p className={`w-92 text-left ml-18 mt-8 text-2xl transition-all duration-700 ease-out delay-200 [animation-delay:0.8s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-80'}`}>Welcome to Primechase Studios, 
                        where creativity meets innovation. 
                        We are dedicated to providing top-notch graphic design services that elevate your brand to new heights. 
                        Let's turn your vision into reality!
                    </p>
                    <button className="mt-8 ml-18 bg-purple-400 rounded-4xl mb-6 p-3 py-2 hover:bg-black text-black hover:border-3 hover:text-white hover:border-purple-400">Get Started</button>
                </div>
            </div>
            <div className="customPink pt-12 ">
                <div className="">
                    <h1 ref={servicesRef} className={`text-7xl ml-20 font-extrabold text-left text-white transition-all duration-1000 ease-out ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} `}>Services</h1>
                </div>
                <hr className="text-white mt-12 h-2"/>
                <div className="flex mt-12 h-82 text-white text-3xl gap-x-32">
                    <div className="w-96 ml-12 h-64 border-white border-2">
                        <p className="text-center mt-4">Marketing Materials</p>
                        <hr className="mt-4 w-72 ml-15"/>
                        <p className="mt-4 text-xl ml-14">US$ 200</p>
                        <button className="bg-blue-400 text-lg ml-14 p-2 mt-8">Book Now</button>
                    </div> 
                    <div className="w-96 h-64 border-white border-2">
                        <p className="text-center -ml-25">Poster Design</p>
                        <hr className="mt-6 w-72 ml-12"/>
                        <p className="mt-4 text-xl ml-12">US$ 200</p>
                        <button className="bg-blue-400 text-lg ml-14 p-2 mt-8">Book Now</button>
                    </div>
                    <div className="w-96 h-64 border-white border-2">
                        <p className="text-center -ml-28">Logo Design</p>
                        <hr className="mt-6 w-72 ml-12"/>
                        <p className="mt-4 ml-12 text-xl">US$ 200</p>
                        <button className="bg-blue-400 text-lg ml-14 p-2 mt-8">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="h-[400px]">
                <div className="flex h-6/6 ">
                    <div ref={storyRef} className="w-6/12  customBlue transition-all duration-1000 ease-out">
                        <div ref={storyRef} className={`transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-80'}`}>
                            <h1 className="text-6xl mt-4 text-center -ml-32 font-bold text-white">Our Story</h1>
                            <p className="text-left text-white mt-12 text-xl w-10/12 ml-12">At Primechase Studios, we are passionate about crafting unique
                                design solutions that captivate audiences and drive results.
                                With a focus on tailoring each project to our client's background,
                                    we ensure that every design resonates with their target market.
                                Let us bring your ideas to life!
                            </p>
                            <button className="p-5 ml-40 mb-14.5  mt-12 py-2 bg-purple-400 rounded-4xl">Learn More</button>
                        </div>
                    </div>
                    <div id="zoomTarget" className="w-6/12 overflow-hidden "> 
                        <img src="/story.jpg" alt="Story" style={{transform: `scale(${scale})`, transition: 'transform 0.2s ease-out', willChange: 'transform'}} className="w-full object-cover h-6/6"/>
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
                    <h1 ref={followRef} className={`text-4xl mt-4 text-center font-bold transition-all duration-1000 ease-out ${followVisible? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Follow Us</h1>
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
        </div>
    )
};
