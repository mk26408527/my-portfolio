import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  title: string;
  className?: string;
  href: string; // URL for the download link
}

export function Button({ title, className, href }: ButtonProps) {
  return (
    <div className='mt-12'>
      <Link download href={href} target="_blank" rel="noopener noreferrer">
        <button className={`flex items-center bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 ${className}`}>
          {title}
          <FaArrowRight className="ml-2" />
        </button>
      </Link>
    </div>
  );
}

export default Button;
