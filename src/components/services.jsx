import products from "./dummydata"


const ServicePage = () => {
    return (
        <div className="bg-black text-white text-center text-2xl font-bold">
            <h1 className="pt-32 text-4xl">Our Services</h1>
            <div className="">
                <div className="flex flex-wrap justify-center gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="mt-20">
                            <img src={product.image} alt={product.image} className="w-[250px]  h-40" />
                            <div className="border-1 h-68 border-gray-300 ">
                                <div className="text-left ml-4 flex flex-col justify-between w-[200px] min-h-[230px] ">
                                    <div>
                                        <p className="w-46 text-left">{product.cat}</p>
                                        <hr className="w-56"/>
                                        <p className="text-left text-lg mt-4">{product.duration}</p>
                                        <p className="text-left text-lg">{product.price}</p>
                                    </div>
                                    <button className="bg-blue-400 hover:underline w-32 text-black text-lg p-1">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ServicePage
