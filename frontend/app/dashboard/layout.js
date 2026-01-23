import NavBar from '@/components/navbar'
import { FunctionDataProvider } from '@/context/functionsContext'
import { GuestDataProvider } from '@/context/guestContext';

const DashboardLayout = ({ children }) => {

    return (
        <div className="h-full md:h-full bg-[#f0f0f0] md:bg-linear-to-br from-[#dadada] to-[#fcd864]">
            <FunctionDataProvider>
                <GuestDataProvider>
                    <NavBar />
                    {children}
                </GuestDataProvider>
            </FunctionDataProvider>
        </div>
    )
}

export default DashboardLayout;