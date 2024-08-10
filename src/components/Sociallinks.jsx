import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="social">
      <a href="https://chat.whatsapp.com/B5N07UJaXMcEFIHPnyqJCy" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      <div className="">WhatsApp</div>
      </a>
      {/* Facebook */}
      <a href="https://www.facebook.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <div className="https://web.facebook.com/profile.php?id=61564028339788">Faceook</div>
      </a>
      {/* YouTube */}
      <a href="https://www.youtube.com/channel/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <div className="">Youtue</div>
      </a>
    </div>
  );
};

export default SocialLinks;
