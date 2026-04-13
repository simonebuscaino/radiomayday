import React, { useEffect } from 'react';
import { MdClose, MdCheckCircle, MdError, MdInfo, MdWarning } from 'react-icons/md';

/**
 * Toast notification component
 * @component
 * @param {Object} props
 * @param {string} [props.type='info'] - Toast type: 'success', 'error', 'warning', 'info'
 * @param {string} props.message - Toast message
 * @param {number} [props.duration=5000] - Auto-hide duration in milliseconds (0 = no auto-hide)
 * @param {Function} [props.onClose] - Close handler
 * @param {string} [props.className] - Additional CSS classes
 */
export const Toast = ({
  type = 'info',
  message,
  duration = 5000,
  onClose,
  className = '',
  ...props
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <MdCheckCircle size={24} />,
    error: <MdError size={24} />,
    warning: <MdWarning size={24} />,
    info: <MdInfo size={24} />,
  };

  const styles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-sm border-l-4 rounded-lg p-4 shadow-lg flex items-center gap-3 animate-fade-in ${styles[type]} ${className}`}
      {...props}
    >
      {icons[type]}
      <span className="flex-1 text-sm font-medium">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/50 rounded transition-colors"
          aria-label="Close toast"
        >
          <MdClose size={18} />
        </button>
      )}
    </div>
  );
};

export default Toast;
