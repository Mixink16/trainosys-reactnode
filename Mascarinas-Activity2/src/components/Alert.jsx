import React, { useEffect } from 'react';

const Icon = ({ type }) => {
  switch (type) {
    case 'success':
      return <span role="img" aria-label="success">✅</span>;
    case 'warning':
      return <span role="img" aria-label="warning">⚠️</span>;
    case 'error':
      return <span role="img" aria-label="error">❌</span>;
    default:
      return null;
  }
};

const Alert = ({ title, type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const resolveColorFromType = (type) => {
    switch (type) {
      case 'success':
        return '#28a745';
      case 'warning':
        return '#ffc107';
      case 'error':
        return '#dc3545';
      default:
        return '#f8f9fa';
    }
  };

  return (
    <div className="alert" style={{ backgroundColor: resolveColorFromType(type) }}>
      <h3>{<Icon type={type} />} {title}</h3>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Alert;
