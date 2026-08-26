export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-gray via-surface-container-low to-surface-gray px-4">
      {children}
    </div>
  )
}
