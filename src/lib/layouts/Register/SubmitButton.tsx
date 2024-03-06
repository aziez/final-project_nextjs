import { ArrowPathIcon } from '@heroicons/react/24/outline'

interface LoadingButtonProps {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  type = 'submit',
  className,
  disabled,
  loading,
  onClick,
  children,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`inline-flex items-center justify-center btn-loading${className ? ' ' + className : ''}`}
    disabled={disabled || loading}
  >
    {loading && (
      <div className="mr-2">
        <ArrowPathIcon className="h-5 w-5 animate-spin" />
      </div>
    )}
    <div>{children}</div>
  </button>
)

export default LoadingButton
