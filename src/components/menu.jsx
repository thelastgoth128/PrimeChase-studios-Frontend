import { useEffect, useRef, useState } from "react"


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

const Menu = ({ children }) => {
        const [footerRef, footerVisible] = useInView()


    return (
        <div className="">
            <div className="fixed top-0 w-full bg-black text-white z-50">
                <div className="flex justify-between h-16 items-center px-4 text-2xl">
                    <h1 className="">Primechase Studios</h1>
                    <button className="cursor-pointer">Menu[+]</button>
                </div>
                <hr className="text-white "/>
            </div>
            {children}
            <div className="bg-black w-full flex flex-col text-white">
                <div ref={footerRef} className={` transition-all duration-2000 ease-out ${footerVisible? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                    <div className="w-10/12 border-2  border-white">
                       <div className="ml-4 mt-6">
                            <h1>Stay Connected with US</h1>
                            <p>Enter Your Email Here*</p>
                            <form className="flex gap-x-2 mt-2">
                                <input className="border-2"/>
                                <button className="bg-blue-200 rounded-3xl px-2 text-black">Subscribe</button>
                            </form>
                       </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu