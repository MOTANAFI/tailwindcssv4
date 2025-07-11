import { useState } from "react";

const accordionData = [
  {
    question: "What is GSAP, and why should I use it?",
    answer:
      "GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations. It's great for complex UI animations, scroll-based effects, and works well with React and other frameworks.",
  },
  {
    question: "How do I integrate GSAP with React?",
    answer:
      "You can use the `useEffect` hook to trigger GSAP animations when a component mounts. Use `gsap.to()` or `gsap.from()` to target refs or elements inside the component.",
  },
  {
    question: "What is the difference between `gsap.to()` and `gsap.from()`?",
    answer:
      "`gsap.to()` animates properties from their current value to the target value, while `gsap.from()` animates from a given starting value to the element's current state. Use them based on whether you want to animate in or out.",
  },
];
function Accordion() {
  const [show, setShow] = useState<number | null>(0);
  const handleShow = (index: number) => {
    setShow((prev:number | null) => (prev === index ? null: index));
  };
  return (
    <div>
      {/* <div className="text-3xl font-bold"></div> */}
      {/* Main component  */}
      <div className=" flex flex-col items-center justify-center min-h-screen bg-blue-50 space-y-7">
        <div className="text-3xl font-bold">FAQ Section</div>
        {/* Accordion components */}

        <div className="border rounded-xl bg-white p-5 w-[500px] md:w-[700px] duration-500">
          {accordionData.map((data, i) => (
            <div
              onClick={() => handleShow(i)}
              key={i}
              className="flex flex-col p-3 hover:bg-zinc-100 rounded-lg border-b cursor-pointer"
            >
              <div className="flex items-center justify-between group">
                <h3 className="font-bold">{data.question}</h3>
                <div className="group-hover:bg-gray-500 group-hover:rounded-full">
                  <svg
                    className={`w-6 h-6 text-gray-800 dark:text-white transition-transform duration-300 ${show === i ? "-rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`p-3 rounded-b-lg mt-2 ${show === i ? "block" : "hidden"}`}
              >
                {data.answer}
              </div>
            </div>
          ))}
          {/* Question 1 */}

          {/* Question 2 */}
          {/* Question 3 */}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
