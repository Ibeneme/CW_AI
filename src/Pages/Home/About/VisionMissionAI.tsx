import "./VisionMissionAI.css";

const VisionMissionAI = () => {
  const introText =
    "At Chat WaZoBia AI, we are deeply committed to creating a platform that is inclusive, accessible, and respectful of Africa’s rich linguistic and cultural diversity. Our commitments guide everything we do, from the development of our technology to our interactions with users and communities. Here’s how we are dedicated to making a positive impact:";

  const commitmentData = [
    {
      commitments: [
        {
          title: "Commitment to Linguistic Inclusion",
          description:
            "We are committed to supporting and integrating African languages into our platform, ensuring that users can communicate, learn, and access information in their native or preferred languages. We will continuously expand our language database to include more African languages and dialects, especially those that are underrepresented or at risk of being marginalized.",
        },
        {
          title: "Commitment to Cultural Respect",
          description:
            "We are committed to respecting and reflecting the cultural nuances of African communities in our AI interactions. We will collaborate with linguists, cultural experts, and native speakers to ensure our platform is accurate, respectful, and culturally relevant.",
        },
        {
          title: "Commitment to Accessibility",
          description:
            "We are committed to making technology accessible to all Africans, regardless of their location, socioeconomic status, or linguistic background. We will design user-friendly tools that cater to both urban and rural populations, ensuring that no one is left behind in the digital revolution.",
        },
        {
          title: "Commitment to Education and Empowerment",
          description:
            "We are committed to providing educational resources and tools that help users learn new languages, acquire skills, and access knowledge. We will support students, professionals, and lifelong learners in achieving their goals by offering accurate and reliable information in their preferred language.",
        },
        {
          title: "Commitment to Community Engagement",
          description:
            "We are committed to actively engaging with African communities to ensure our platform meets their needs. We will seek feedback and input from users to improve and refine our services, ensuring that Chat WaZoBia AI remains a platform that Africans can trust and rely on.",
        },
        {
          title: "Commitment to Innovation",
          description:
            "We are committed to leading the way in developing AI solutions that address Africa’s unique challenges and opportunities. We will continuously innovate and improve our platform to meet the evolving needs of our users and contribute to the global advancement of artificial intelligence.",
        },
        {
          title: "Commitment to Ethical AI",
          description:
            "We are committed to developing and deploying AI technology that is ethical, transparent, and accountable. We will prioritize user privacy and data security, ensuring that our platform is safe and trustworthy for all users.",
        },
        {
          title: "Commitment to Preserving African Heritage",
          description:
            "We are committed to preserving and promoting African languages, traditions, and identities. We will work to ensure that these cultural treasures remain vibrant and relevant for future generations.",
        },
        {
          title: "Commitment to Economic and Social Growth",
          description:
            "We are committed to empowering businesses and entrepreneurs by enabling them to reach diverse audiences in their preferred languages. We will contribute to the economic and social development of African communities through innovative AI solutions.",
        },
        {
          title: "Commitment to Building a Connected Africa",
          description:
            "We are committed to creating a platform that fosters communication, collaboration, and understanding across linguistic and cultural divides. We will unite Africans through technology, enabling them to share ideas, solve problems, and celebrate their diversity.",
        },
      ],
      promise: {
        text: "Chat WaZoBia AI is more than just a technology platform—it’s a movement to empower Africa through language, culture, and innovation. We promise to:",
        details: [
          "Respect and celebrate the diversity of African cultures and languages.",
          "Provide accurate, reliable, and culturally relevant information.",
          "Continuously innovate and improve to meet the evolving needs of our users.",
        ],
      },
      call_to_action: {
        text: "Together, we can build a future where every African has the tools and opportunities to thrive. Chat WaZoBia AI is committed to being a platform that Africans can trust and rely on. Come, let’s build the future together! 🌍✨",
      },
    },
  ];
  return (
    <section className="vision-mission-ai">
      {/* Vision Section */}
      <div className="section-wrapper">
        <div className="content-container">
          <h2 className="section-title">Our Vision</h2>
          <span className="section-about-span"> </span>
          <p className="section-description">
            At <strong>Chat WaZoBia AI</strong>, our vision is to empower Africa
            through inclusive, accessible, and culturally relevant artificial
            intelligence. We aim to bridge gaps, celebrate diversity, and drive
            progress by leveraging the power of language and technology.
            <br />
            <br />
            <strong>1. Uniting Africa Through Language</strong>
            <br />
            We envision a future where language is no longer a barrier to
            communication, education, or opportunity. By supporting and
            promoting African languages, Chat WaZoBia AI seeks to unite people
            across the continent, fostering understanding and collaboration.
            <br />
            <br />
            <strong>2. Celebrating Cultural Diversity</strong>
            <br />
            Africa is home to a rich tapestry of cultures, traditions, and
            languages. Chat WaZoBia AI is committed to celebrating this
            diversity by ensuring that our platform respects and reflects the
            unique cultural nuances of every community we serve.
            <br />
            <br />
            <strong>3. Making Technology Accessible to All</strong>
            <br />
            We believe that technology should be inclusive and accessible to
            everyone, regardless of their location, language, or socioeconomic
            status. Chat WaZoBia AI is designed to reach users in urban centers
            and remote villages alike, ensuring that no one is left behind in
            the digital revolution.
            <br />
            <br />
            <strong>4. Preserving African Heritage</strong>
            <br />
            As the world becomes more interconnected, many African languages and
            cultural practices are at risk of being lost. Chat WaZoBia AI is
            dedicated to preserving and promoting these languages, ensuring they
            remain vibrant and relevant for future generations.
            <br />
            <br />
            <strong>5. Empowering Communities</strong>
            <br />
            We aim to empower individuals, businesses, and communities by
            providing tools and resources that enhance education, communication,
            and economic opportunities. Chat WaZoBia AI is more than just a
            platform—it’s a partner in growth and development.
            <br />
            <br />
            <strong>6. Driving Innovation in Africa</strong>
            <br />
            Chat WaZoBia AI is at the forefront of AI innovation in Africa. We
            envision a future where African-led technology solutions address
            local challenges and contribute to global advancements in artificial
            intelligence.
            <br />
            <br />
            <strong>7. Building a Connected Future</strong>
            <br />
            Our ultimate goal is to create a connected Africa where people can
            communicate, learn, and collaborate seamlessly, regardless of
            linguistic or cultural differences.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="section-wrapper">
        <div className="content-container">
          <h2 className="section-title">Our Mission</h2>
          <span className="section-about-span"> </span>
          <p className="section-description">
            The mission of <strong>Chat WaZoBia AI</strong> is to leverage the
            power of artificial intelligence to break down language barriers,
            celebrate African cultures, and empower individuals and communities
            across the continent. We are dedicated to creating a platform that
            is inclusive, accessible, and culturally relevant, ensuring that
            every African can benefit from the opportunities offered by
            technology.
            <br />
            <br />
            <strong>Key Pillars of Our Mission</strong>
            <br />
            <br />
            <strong>1. Promoting Linguistic Inclusion</strong>
            <br />
            - To support and integrate African languages into our platform,
            enabling users to communicate, learn, and access information in
            their native or preferred languages.
            <br />
            - To ensure that no one is excluded from the digital revolution due
            to language barriers.
            <br />
            <br />
            <strong>2. Celebrating Cultural Heritage</strong>
            <br />
            - To respect and reflect the cultural nuances of African communities
            in our AI interactions.
            <br />
            - To preserve and promote African languages, traditions, and
            identities in a rapidly globalizing world.
            <br />
            <br />
            <strong>3. Enhancing Accessibility</strong>
            <br />
            - To make technology accessible to all Africans, regardless of their
            location, socioeconomic status, or linguistic background.
            <br />
            - To design user-friendly tools that cater to both urban and rural
            populations.
            <br />
            <br />
            <strong>4. Empowering Through Education</strong>
            <br />
            - To provide educational resources and tools that help users learn
            new languages, acquire skills, and access knowledge.
            <br />
            - To support students, professionals, and lifelong learners in
            achieving their goals.
            <br />
            <br />
            <strong>5. Driving Economic and Social Growth</strong>
            <br />
            - To empower businesses and entrepreneurs by enabling them to reach
            diverse audiences in their preferred languages.
            <br />
            - To contribute to the economic and social development of African
            communities through innovative AI solutions.
            <br />
            <br />
            <strong>6. Fostering Innovation in Africa</strong>
            <br />
            - To lead the way in developing AI solutions that address Africa’s
            unique challenges and opportunities.
            <br />
            - To inspire and support African-led technological advancements that
            have a global impact.
            <br />
            <br />
            <strong>7. Building a Connected Africa</strong>
            <br />
            - To create a platform that fosters communication, collaboration,
            and understanding across linguistic and cultural divides.
            <br />
            - To unite Africans through technology, enabling them to share
            ideas, solve problems, and celebrate their diversity.
            <br />
            <br />
            <strong>How We Achieve Our Mission</strong>
            <br />- <strong>Multilingual AI Development:</strong> Continuously
            expanding our language database to include more African languages
            and dialects.
            <br />- <strong>Cultural Collaboration:</strong> Working with
            linguists, cultural experts, and native speakers to ensure our
            platform is accurate and respectful.
            <br />- <strong>User-Centric Design:</strong> Prioritizing
            accessibility and ease of use to ensure our platform meets the needs
            of all Africans.
            <br />- <strong>Community Engagement:</strong> Actively seeking
            feedback and input from users to improve and refine our services.
            <br />- <strong>Education and Advocacy:</strong> Promoting the
            importance of linguistic and cultural preservation through awareness
            campaigns and partnerships.
            <br />
            <br />
            <strong>Our Promise</strong>
            <br />
            Chat WaZoBia AI is committed to being a platform that Africans can
            trust and rely on. We promise to:
            <br />
            - Respect and celebrate the diversity of African cultures and
            languages.
            <br />
            - Provide accurate, reliable, and culturally relevant information.
            <br />
            - Continuously innovate and improve to meet the evolving needs of
            our users.
            <br />
            <br />
            <strong>Join Us in Our Mission</strong>
            <br />
            Chat WaZoBia AI is more than just a technology platform—it’s a
            movement to empower Africa through language, culture, and
            innovation. Together, we can build a future where every African has
            the tools and opportunities to thrive.
          </p>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="content-container">
          <h2 className="section-title">Our Commitment</h2>

          <div className="section-description">
            <br /> <p className="">{introText}</p>
            {commitmentData[0]?.commitments?.map((commitment, index) => (
              <div
                className="commitment-item"
                key={index}
                style={{ display: "flex", marginTop: index === 0 ? 0 : 32 }}
              >
                <span className="commitment-number">{index + 1}.</span>
                <div className="commitment-text">
                  <strong>{commitment.title}</strong>
                  <p>{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionAI;
