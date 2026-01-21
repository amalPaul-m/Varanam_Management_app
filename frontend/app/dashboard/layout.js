import NavBar from '@/components/navbar'

const DashboardLayout = ({children}) => {

    return (
        <div className="h-full md:h-full bg-[#f0f0f0] md:bg-linear-to-br from-[#dadada] to-[#fcd864]">
            <NavBar />
            {children}
        </div>
    )
}

export default DashboardLayout;