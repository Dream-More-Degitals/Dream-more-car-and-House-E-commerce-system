import SellerSidebar from '@/components/layout/SellerSidebar'
import Topbar from '@/components/layout/Topbar'

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-gray">
      <SellerSidebar />
      <div className="md:ml-64 flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1 p-5 pb-20 md:pb-5">{children}</main>
      </div>
    </div>
  )
}
