import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "7671939740"; // your WhatsApp number
  const message = "Hello, I want to know more about your services!";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="whatsapp-button">
      <button onClick={handleClick}>
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
}
