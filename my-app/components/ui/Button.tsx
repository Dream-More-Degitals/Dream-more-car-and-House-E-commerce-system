'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconPosition?: 'left' | 'right'
}

const variantStyles = {
  primary: 'bg-primary-container text-on-primary-container hover:opacity-90',
  secondary: 'bg-surface-container-low border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container',
  outline: 'border border-outline-variant text-on-surface-variant hover:bg-surface-container-low',
  ghost: 'text-on-surface-variant hover:bg-surface-container-low',
  danger: 'bg-red-50 text-red-500 hover:bg-red-100',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-[11px] gap-1',
  md: 'px-4 py-2 text-[13px] gap-1.5',
  lg: 'px-6 py-2.5 text-sm gap-2',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon, iconPosition = 'left', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
