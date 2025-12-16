// src/data/articles.ts
export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  cover: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "Beyond-Firewalls",
    title: "Beyond Firewalls: Building a Human Centered Cybersecurity Culture",
    author: "Jeremiah Jideofor",
    date: "2025-11-01",
    readTime: "6 min read",
    cover: "/articles/Beyond Firewalls.png",
    excerpt:
      "Even with strong technical defenses, most breaches happen because of simple human actions like clicking the wrong link or reusing passwords. Real security comes from a culture where everyone understands their role and takes responsibility for staying safe.",
    content: `
      <p>Firewalls, encryption, and multi-factor authentication form the backbone of modern cybersecurity. Yet, despite these layers of defense, one factor continues to define whether a system stays secure: <strong>people</strong>.</p>

      <p>The truth is, most security breaches do not happen because of weak software. They happen because of human actions such as a misplaced click, a reused password, or a simple lack of awareness. Technology can protect, but people make security work.</p>

      <h2>The Human Element in Cybersecurity</h2>
      <p>Attackers have learned to target behavior, not just infrastructure. A single well-crafted phishing email can bypass millions of dollars’ worth of security tools. In many cases, the weakest link is not the network but the culture (how employees think about and respond to security risks).</p>

      <p>When security is seen as something that belongs to the IT department alone, employees disengage. Real protection begins when everyone understands that cybersecurity is a shared responsibility.</p>

      <h2>Common Cultural Gaps</h2>
      <p>Many organizations struggle to build a security-aware culture because of gaps in communication and engagement. Common examples include:</p>
      <ul>
        <li><strong>Security treated as a checklist</strong> rather than a business priority.</li>
        <li><strong>Leadership that rarely talks about security</strong> until an incident happens.</li>
        <li><strong>Training that feels like compliance</strong> rather than practical learning.</li>
        <li><strong>Rules that make security inconvenient,</strong> pushing people toward risky shortcuts.</li>
      </ul>

      <p>When employees see security as a barrier rather than an enabler, risk increases, no matter how advanced the technology is.</p>

      <h2>Building a Human-Centered Security Culture</h2>
      <p>True cyber resilience depends on the mindset of the people behind the systems. Here are practical ways to build that culture:</p>
      <ul>
        <li><strong>Make security part of everyday work:</strong> Training should be continuous and connected to real tasks, not a yearly event.</li>
        <li><strong>Reward awareness:</strong> Recognize staff who report suspicious activity or follow best practices.</li>
        <li><strong>Communicate with purpose:</strong> Explain why policies exist and how they protect both company and individuals.</li>
        <li><strong>Encourage openness:</strong> Create a safe environment to report mistakes or suspected incidents.</li>
        <li><strong>Lead by example:</strong> When leaders model secure behavior, it sends a powerful message across the organization.</li>
      </ul>

      <h2>Technology Should Support People</h2>
      <p>Tools and frameworks are vital, but they should make security easier, not harder. User-friendly password managers, adaptive authentication, and automated alerts help employees stay protected without adding friction. The goal is to make secure choices the simplest ones.</p>

      <h2>Conclusion</h2>
      <p>A human-centered cybersecurity culture goes beyond firewalls and tools. It is about awareness, communication, and shared accountability. When people understand their role in protecting information, they do not just follow security rules, they live them. That is what turns a company from vulnerable to resilient.</p>
    `,
  },
  {
    id: "Delivering-Smarter-Software",
    title:
      "Delivering Smarter Software: How AI is Redefining Agile Development",
    author: "Jeremiah Jideofor",
    date: "2025-10-10",
    readTime: "8 min read",
    cover: "/articles/How AI is Redefining Agile Development.png",
    excerpt:
      "Agile teams are under more pressure than ever to deliver faster and build better experiences. AI fits naturally into this pace by reducing routine work, improving planning, and giving teams clearer insight. Used well, it helps teams work smarter while staying true to Agile values.",
    content: `
      <p>Agile has helped teams move faster for years, but the work has become more demanding: users expect smoother experiences, organisations want shorter delivery cycles, and developers face growing technical complexity.</p>

      <p>AI fits naturally into this workflow by reducing routine work and helping teams focus on higher-value activities. When used well, AI becomes part of the everyday process, not something separate or complicated.</p>

      <h2>How AI Is Making Agile Teams More Effective</h2>

      <h3>1. More clarity during sprint planning</h3>
      <p>AI tools analyse prior sprints, user patterns, and performance data to highlight what truly deserves attention. This gives product owners a clearer view of value and reduces last-minute surprises.</p>

      <h3>2. Improved developer productivity</h3>
      <p>AI assistants reduce repetitive work, suggesting fixes, flagging risky code, and generating initial function drafts, so developers can focus on creative problem solving.</p>

      <h3>3. Faster and smarter testing</h3>
      <p>AI testing tools predict high-risk areas, generate test cases quickly, and surface vulnerabilities early, improving quality and speeding up delivery.</p>

      <h3>4. Better visibility for project managers</h3>
      <p>AI analytics provide real-time insights on team velocity, workload balance, and blockers, enabling faster, more informed decisions.</p>

      <h2>Practical ways to bring AI into existing workflows</h2>
      <ul>
        <li><strong>Use AI for backlog refinement:</strong> identify high-impact items and prioritise effectively.</li>
        <li><strong>Adopt AI coding assistants:</strong> reduce repetitive tasks and improve consistency.</li>
        <li><strong>Introduce AI testing solutions:</strong> speed up test generation and early bug detection.</li>
        <li><strong>Use predictive analytics for forecasting:</strong> improve estimates and risk planning.</li>
        <li><strong>Improve documentation with AI:</strong> speed onboarding and reduce knowledge loss.</li>
      </ul>

      <p>Start small and focus on areas where AI delivers quick, measurable value, each small step strengthens Agile without disrupting the team's process.</p>

      <h2>Looking ahead</h2>
      <p>AI is not about replacing people; it's about freeing teams from routine work so they can build more intelligently. Organisations that combine Agile principles with AI capabilities will deliver faster, more stable, and more user-aligned software.</p>
    `,
  },
  {
    id: "Smart-Lean-and-Secure",
    title: "Smart, Lean, and Secure: How SMEs Can Assess Cyber Risks Without Breaking the Bank",
    author: "Jeremiah Jideofor",
    date: "2025-09-22",
    readTime: "5 min read",
    cover: "/articles/How SMEs Can Assess Cyber Risks Without Breaking the Bank.png",
    excerpt:
      "By understanding their most critical systems, likely risks, and real business impact, SMEs can take simple, affordable steps to stay secure. Cybersecurity becomes less about fear and more about smart, consistent decisions that protect daily operations and long term growth.",
    content: `
      <p>
For many small and medium sized businesses, cybersecurity often feels intimidating, expensive, or simply out of reach. Unfortunately, attackers do not see smaller companies as low value targets. In reality, SMEs hold customer data, financial records, and operational systems that are attractive and often less protected.
</p>

<p>
Effective cybersecurity is not about having the biggest budget. It is about making smart decisions with the resources you already have. When business leaders take time to understand their real risks, they can focus on protecting what truly matters instead of trying to secure everything at once.
</p>

<h2>Why cyber risk assessment matters for SMEs</h2>
<p>
A single cyber incident can stop operations, disrupt customer relationships, and damage trust that took years to build. The good news is that many of these incidents are preventable. A simple and structured risk assessment helps businesses spot problems early and reduce exposure before issues turn into costly events.
</p>

<h2>Key questions to answer</h2>
<ul>
  <li>Which systems, files, or services would cause serious disruption if they became unavailable?</li>
  <li>Where are people, processes, or technology most likely to fail under pressure?</li>
  <li>What would the real world impact be on customers, revenue, and reputation if something went wrong?</li>
</ul>

<h2>Practical and affordable steps</h2>
<ol>
  <li>
    <strong>Understand your environment:</strong>
    List the systems, devices, and user accounts that store or access business information.
  </li>
  <li>
    <strong>Focus on realistic threats:</strong>
    Most incidents begin with phishing emails, weak passwords, outdated software, or unsecured networks.
  </li>
  <li>
    <strong>Assess potential impact:</strong>
    Think about downtime, lost data, missed sales, customer frustration, and regulatory consequences.
  </li>
  <li>
    <strong>Improve basic protections:</strong>
    Use multi factor authentication, require strong passwords, back up important data, and train staff to spot suspicious activity.
  </li>
  <li>
    <strong>Review regularly:</strong>
    As the business grows or changes, revisit risks to ensure protections remain effective.
  </li>
</ol>

<h2>Collaboration over complexity</h2>
<p>
Small businesses do not have to handle everything alone. Managed service providers, consultants, and local tech communities can offer practical guidance, affordable assessments, and targeted training without adding unnecessary complexity.
</p>

<h2>Final thoughts</h2>
<p>
Cybersecurity is an ongoing practice, not a one time task. With a clear understanding of risk and a steady commitment to improvement, SMEs can protect their operations, build customer confidence, and grow with greater peace of mind.
</p>

    `,
  },
];
