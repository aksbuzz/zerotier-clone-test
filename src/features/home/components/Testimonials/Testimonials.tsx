import { Rubik } from "next/font/google";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    id: 0,
    quote:
      'In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us.',
    author: 'Peter Boin, Principal Software Engineer, Allume Energy',
  },
  {
    id: 1,
    quote: 'ZeroTier provides a robust and essential backbone for our communications stack.',
    author: 'Andrew Lipscomb, Mechatronics Engineer, SwarmFarm Robotics',
  },
  {
    id: 2,
    quote:
      'Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple.',
    author: 'Brunston Poon, Software Engineer, Loft Orbital ',
  },
];

// TODO: replace with common heading class
const rubik = Rubik({ variable: '--font-rubik', subsets: ['latin'] })

export const Testimonials = () => {
  return (
    <section className="py-4">
      <div className="wrapper max-w-5xl">
        <div className="flex items-center flex-col text-center">
          <h2 className={`text-2xl mb-4 tracking-tight font-semibold ${rubik.className}`}>Used by the world`&apos;`s most innovative teams</h2>
        </div>
        <div className="m-8" />
        <ul className="list-none gap-4 flex flex-wrap flex-col items-start">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} author={t.author} quote={t.quote}/>
          ))}
        </ul>
      </div>
    </section>
  );
}