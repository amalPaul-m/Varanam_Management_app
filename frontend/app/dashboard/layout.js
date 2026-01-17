import NavBar from '@/components/navbar'

const DashboardLayout = ({children}) => {

    return (
        <div className="h-full md:h-screen bg-linear-to-br from-[#dadada] to-[#fcd864]">
            <NavBar />
            {children}
        </div>
    )
}

export default DashboardLayout;