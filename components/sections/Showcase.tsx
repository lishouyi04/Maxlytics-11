export default function Showcase() {
  return (
      <section className="section showcase" id="showcase">
        <div className="container">
          <div className="section-head">
            <h2 data-reveal>Recent results</h2>
          </div>
          <div className="showcase-grid">
            <article className="showcase-card" data-reveal>
              <div className="sc-shot"><img  src="/img/img-2f81419ccb.webp" alt="Google Search Console: medical/health site clicks and impressions trending up" /></div>
              <span className="sc-tag">Healthcare</span>
              <h3>Healthcare website traffic jumps <em className="it">300%</em></h3>
              <p>Maxlytics provided in-depth SEO technical support to a healthcare website, redefined its web content strategy, and improved its content keywords. Through precise optimization, the website&rsquo;s reach and click-through rate have both soared, resulting in a significant increase in user interaction.</p>
            </article>
            <article className="showcase-card" data-reveal>
              <div className="sc-shot"><img  src="/img/img-1774998af0.webp" alt="Google search result ranking BusinessFocus #1 for a UAE mortgage keyword" /></div>
              <span className="sc-tag">Real Estate · PR</span>
              <h3>BusinessFocus × Middle East Real Estate Company — Search <em className="it">No.1</em></h3>
              <p>In addition to pushing clients&rsquo; web pages to the top of search rankings, Maxlytics will also work with PressLogic&rsquo;s nine major websites to push clients to the top of search rankings through content marketing, leveraging their combined monthly page views of over 150 million, to achieve full coverage. For example, we once set &ldquo;UAE mortgage&rdquo; as a marketing keyword for a client, and in less than a month, we pushed the client&rsquo;s keyword article to the top of the search results, successfully grabbing suitable and unique traffic in the market.</p>
            </article>
          </div>
        </div>
      </section>
  );
}
