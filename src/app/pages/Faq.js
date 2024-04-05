import { BiChevronRight } from "react-icons/bi";
const FaqPage = () => {
  // Define FAQ data as an array of objects
  const faqData = [
    {
      question: "What is Netflix?",
      answer:
        "Next.js is a React framework that enables server-side rendering, static site generation, and other features to build modern web applications.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Next.js provides features like server-side rendering (SSR), static site generation (SSG), API routes, and file-based routing out of the box, whereas Create React App focuses on client-side rendering and a simpler setup for React projects.",
    },

    {
      question: "Where can I watch?",
      answer:
        "Next.js provides features like server-side rendering (SSR), static site generation (SSG), API routes, and file-based routing out of the box, whereas Create React App focuses on client-side rendering and a simpler setup for React projects.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Next.js provides features like server-side rendering (SSR), static site generation (SSG), API routes, and file-based routing out of the box, whereas Create React App focuses on client-side rendering and a simpler setup for React projects.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Next.js provides features like server-side rendering (SSR), static site generation (SSG), API routes, and file-based routing out of the box, whereas Create React App focuses on client-side rendering and a simpler setup for React projects.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "Next.js provides features like server-side rendering (SSR), static site generation (SSG), API routes, and file-based routing out of the box, whereas Create React App focuses on client-side rendering and a simpler setup for React projects.",
    },

    // Add more FAQ items as needed
  ];

  return (
    <div className="">
      <hr className="border border-zinc-800 h-2 bg-zinc-800 w-full relative" />

      <h1 className="text-white text-center mt-6 text-5xl  font-black mb-10">
        Frequently Asked Questions
      </h1>
      {faqData.map((faqItem, index) => (
        <section
          key={index}
          className="bg-zinc-800 hover:bg-zinc-700 p-5 mt-4 mx-40 flex justify-between items-center"
        >
          <h2 className="text-white text-2xl">{faqItem.question}</h2>
          <button className="text-white text-5xl">+</button>
          {/* <p>{faqItem.answer}</p> */}
        </section>
      ))}
 <p className="text-white text-2xl font-normal mt-8 text-center">Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="flex justify-between mx-[500px] mt-6">
        <input
          autoComplete="email"
          minLength={5}
          maxLength={50}
          type="email"
          className="bg-transparent border border-1 border-slate-50  pt-6 px-4 pb-2 rounded mr-2  text-white  w-80 "
          placeholder="Email Address"
        ></input>

    
          <button className="bg-btn-primary text-white ml-1 rounded font-semibold w-52 py-3 px-4 text-2xl flex items-center ">
            Get Started <BiChevronRight className="text-4xl" />{" "}
          </button>
      
      </div>
    </div>
  );
};

export default FaqPage;
