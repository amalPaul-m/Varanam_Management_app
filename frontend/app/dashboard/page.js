import Counter from "@/components/counter"
import CountBtn from "@/components/countBtn"
import Guest from "@/components/guest"
import Event from "@/components/event"
import Vendors from "@/components/vendors"

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const Page = async () => {

     await delay(3000) // 3 seconds
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-10 py-3 md:py-5 gap-2">
                <h1 className="shrink-0 text-lg font-bold md:text-3xl md:font-light text-black">
                    Welcome, Amal Paul
                </h1>

                <div className="flex">
                    <Counter />
                </div>


            </div>
            <div className="flex mt-2 md:mt-2 md:mx-10">
                <CountBtn />
            </div>
            <div className="flex flex-col md:flex-row mt-2 md:mt-10 md:mx-10 gap-3">
                <Guest />
                <Event />
                <Vendors />
            </div>

        </div>

    )
}

export default Page
