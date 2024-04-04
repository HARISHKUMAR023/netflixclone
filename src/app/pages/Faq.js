

const FaqPage = () => {
  // Define FAQ data as an array of objects
  const faqData = [
    {
      question: "What is Next.js?",
      answer: "Next.js is a React framework that enables server-side rendering, static site generation, and other features to build modern web applications."
    },
    {
      question: "How is Next.js different from Create React App?",
      answer: "Next.js provides features like server-side rendering (SSR), static site generation (SSG), API routes, and file-based routing out of the box, whereas Create React App focuses on client-side rendering and a simpler setup for React projects."
    }
    // Add more FAQ items as needed
  ];

  return (
    <div>
    
    <hr className="border border-zinc-800 h-2 bg-zinc-800 w-full relative" />
  
        <h1 className='text-white'>Frequently Asked Questions</h1>
        {faqData.map((faqItem, index) => (
          <section key={index}>
            <h2 className='text-white'>{faqItem.question}</h2>
            <p>{faqItem.answer}</p>
          </section>
        ))}
    
    </div>
  );
};

export default FaqPage;
