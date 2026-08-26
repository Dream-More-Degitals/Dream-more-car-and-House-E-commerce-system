interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bento-card ${hover ? '' : 'hover:shadow-none hover:border-outline-variant/35'} ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-5 py-4 flex items-center justify-between border-b border-outline-variant/20 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-5 ${className}`}>{children}</div>
}
