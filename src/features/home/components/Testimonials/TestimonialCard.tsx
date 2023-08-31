import userIcon from '@/assets/images/user-icon.png';
import Image from 'next/image';

type TestimonialCardProps = {
  quote: string;
  author: string;
}

export const TestimonialCard = ({ quote = "", author = "" }: TestimonialCardProps) => {
  return (
    <li className="w-full p-8 overflow-hidden rounded-3xl mb-10 bg-gradient-testimonial-card">
      <div className="flex items-start flex-col sm:flex-row gap-4">
        <div className="inline-block align-top relative overflow-hidden">
          <div className="block max-w-xs">
            <Image height={48} width={48} src={userIcon} alt="user-icon" />
          </div>
        </div>
        <blockquote className="pb-8 sm:basis-10/12">
          <p className="text-para font-normal tracking-normal leading-normal mb-4">
            {`"${quote}"`}
          </p>
          <figcaption>
            <cite className='font-medium not-italic text-citation uppercase mb-2 tracking-wider'>{author}</cite>
          </figcaption>
        </blockquote>
      </div>
    </li>
  );
}