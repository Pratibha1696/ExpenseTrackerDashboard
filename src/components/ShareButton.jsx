import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";

const ShareButton = ({ platform, transactions }) => {
  const shareTransaction = () => {
    const text = transactions.map(transaction =>
      `My transaction ${transaction.amount} in the Category ${transaction.category}!`
    ).join(' ');

    let url = '';

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        break;
      default:
        return;
    }

    window.open(url, '_blank');
  };

  const getIcon = () => {
    switch (platform) {
      case 'facebook':
        return <ImFacebook2 className='icon' />;
      case 'whatsapp':
        return <FaSquareWhatsapp className='icon' />;
      default:
        return null;
    }
  };

  return (
    <div onClick={shareTransaction} className='share-button'>
      <h1> {getIcon()}
        Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}</h1>
    </div>
  );
};

export default ShareButton;
