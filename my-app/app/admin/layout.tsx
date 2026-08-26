import AdminSidebar from '@/components/layout/AdminSidebar'
import Topbar from '@/components/layout/Topbar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-gray">
      <AdminSidebar />
      <div className="md:ml-64 flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1 p-5 pb-20 md:pb-5">{children}</main>
      </div>
    </div>
  )
}
