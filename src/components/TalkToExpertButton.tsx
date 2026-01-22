'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import { ExpertModal } from './ExpertModal'

interface TalkToExpertButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  children?: React.ReactNode
}

export function TalkToExpertButton({ 
  variant = 'primary', 
  className = '',
  children 
}: TalkToExpertButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const baseStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${baseStyles[variant]} ${className}`}
      >
        {children || (
          <>
            <Phone className="w-4 h-4 mr-2" />
            Talk to an Expert
          </>
        )}
      </button>
      
      <ExpertModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

