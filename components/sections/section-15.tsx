import { FAQs } from "../FAQs";

export function SectionFifteen() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 px-5 py-16 md:justify-normal lg:max-w-[1086px] lg:gap-14 lg:py-20 mx-auto">
            <h2 className="text-center font-plus-jakarta-sans text-3xl md:text-[40px] md:leading-[60px] font-bold text-yellow-900 md:w-[65%]">
            Frequently Asked Questions
            </h2>

            <div className="mx-auto w-full lg:w-[800px] xl:w-[1086px]">
            <FAQs items={faqsItems} />
            </div>
        </section>
    )
}

const faqsItems = [
    {
      question: 'What is Facebook Ad Library?',
      answer: (
        <>
          <p>At Adinspiration.com, our research process is built to identify the most impactful Meta ads in the eCommerce space, providing you with the most effective strategies for your brand.</p>
          <br />
  
          <h3 className="font-bold">1. Brand Evaluation</h3>
          <p>We begin by thoroughly analyzing the brand behind each ad. Key factors include:</p>
          <ul role="list" className="my-3 list-inside list-disc">
            <li className="leading-relaxed">Is it a fast-growing eCommerce brand?</li>
            <li className="leading-relaxed">Does it generate at least $1 million in annual revenue?</li>
            <li className="leading-relaxed">What’s its traffic volume, and how advanced is its ad testing process?</li>
          </ul>
  
          <p>Only brands that meet these rigorous standards are added to our selection pool. We continuously monitor their performance to understand the driving factors behind their success.</p>
          <br />
  
          <h3 className="font-bold">2. Creative Evaluation</h3>
          <p>Once a brand passes the initial review, we dive deep into the performance of its ad creatives. Our analysis focuses on:</p>
          <ul role="list" className="my-3 list-inside list-disc">
            <li className="leading-relaxed">How long the ad has been active versus its testing duration</li>
            <li className="leading-relaxed">The strength of the hook in capturing attention</li>
            <li className="leading-relaxed">The overall concept, style, visual appeal, and copy</li>
          </ul>
  
          <p>Out of the 100,000 ads we review monthly, only about 0.5% meet our strict criteria, ensuring you gain access to only the highest-performing ads.</p>
          <br />
  
          <h3 className="font-bold">3. Analyzing Organic Content</h3>
          <p>We also research viral organic content, especially from platforms like TikTok, where trends often emerge. By studying these organic trends, we help you integrate proven hooks, creative ideas, and popular concepts into your ad strategies, keeping your campaigns fresh and in line with current consumer interests.</p>
        </>
      )
    },
    {
      question: 'Why don’t you offer a monthly plan?',
      answer: (
        <>
          <p>Based on our past experience, members who choose quarterly or annual plans consistently see better results. These plans give you enough time to dive deep into our research, implement strategies, and test your viral videos and high-performing ads. With a monthly plan, the results often feel rushed and incomplete, which is why we focus on longer-term options.</p>
          <br />
          <p>By opting for our quarterly plan, you’ll have the time needed to maximize the value of our research and achieve more meaningful outcomes.</p>
        </>
      )
    },
    {
      question: 'Do you analyze only brands from the United States?', 
      answer: "While most of the brands we analyze are from the United States, we do include brands from all over the world. We focus on the U.S. market because it’s one of the most competitive in terms of Meta ads and viral content, meaning U.S. brands are often the first to test new ideas. If you’re based in another country, you can take these insights and apply them in your own market, giving you the advantage of being one of the first to implement these proven strategies in your territory."
    },
    {
      question: 'Are all your viral videos and ads in English?',
      answer: "Yes, all of the viral videos and ads in our library are in English."
    },
    {
      question: 'How often do you update the viral and ad library?',
      answer: "We update the library daily to ensure you have access to the latest trends, top-performing ads, and viral content. This constant refresh helps you stay ahead in a fast-paced and competitive market."
    },
    {
      question: 'What platforms do you include in your organic analysis?',
      answer: 'We focus on TikTok for our organic analysis because it’s where most viral trends begin. By analyzing TikTok, we’re able to spot trends early—often before they make their way to other platforms—giving you the advantage of being among the first to implement these strategies in your campaigns.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: (
        <>
          <p>We don’t offer a free trial because we are not a tool—we are a research service. All the insights and resources you find on our platform are the result of extensive research. Due to the nature of this work, we do not provide free trials.</p>
          <br />
          <p>However, we do offer a quarterly plan, which gives you enough time to explore, create, and test your viral videos and high-performing ads. This plan allows you to experience the full value of our research without a long-term commitment, ensuring you have enough time to see meaningful results.</p>
        </>
      )
    },
    {
      question: 'Do you offer refunds?',
      answer: "Absolutely! We offer a 30-Day Money Back Guarantee because we want you to feel confident in your investment with Adinspiration. All we ask is that you test a few ads using the ideas from our library and send us proof of those tests. If you’re still not seeing results after 30 days, we’ll happily give you a full refund. We’re here to help you succeed, and we stand by our recommendations!"
    },
    {
      question: 'Can I cancel anytime?',
      answer: "Yes, you can cancel anytime! We want to keep things simple and flexible, just cancel whenever it feels right for you, no strings attached."
    }
  ]