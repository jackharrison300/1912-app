const OurPeople = () => {
  const leadershipTeam = [
    {
      name: "Joe Pitts",
      title: "Chairman & CEO",
      image: "/assets/people/joe_pitts.jpg"
    },
    {
      name: "Clay Robinson",
      title: "Vice Chairman & EIC",
      image: "/assets/people/clay_robinson.jpg"
    },
    {
      name: "Zach Brown",
      title: "CFO & Strategic Advisor",
      image: "/assets/people/zach_brown.jpg"
    },
    {
      name: "Stephen Matter",
      title: "Strategic Advisor",
      image: "/assets/people/stephen_matter.jpg"
    },
    {
      name: 'Jared "JJ" Cichoke',
      title: "Analyst",
      image: "/assets/people/jj_cichoke.jpg"
    },
    {
      name: "Joseph Kavetsky",
      title: "Managing Editor",
      image: "/assets/people/joseph_kavetsky.jpg"
    }
  ];

  const advisoryBoard = [
    {
      name: "Lorna Romero",
      title: "Elevate Strategies",
      image: "/assets/people/lorna_romero.jpg"
    },
    {
      name: "Jenny Clark",
      title: "Love Your School",
      image: "/assets/people/jenny_clark.jpg"
    },
    {
      name: "Clint Bolick",
      title: "Arizona Supreme Court",
      image: "/assets/people/clint_bolick.jpg"
    },
    {
      name: "Austin Jack",
      title: "J.D. Strategies",
      image: "/assets/people/austin_jack.jpg"
    },
    {
      name: "John Hamby",
      title: "Resilience Lab",
      image: "/assets/people/john_hamby.jpg"
    },
    {
      name: "Dr. Michael Clark",
      title: "Arizona Corporation Commission",
      image: "/assets/people/michael_clark.jpg"
    },
    {
      name: "George Khalaf",
      title: "Resolute Group",
      image: "/assets/people/george_khalaf.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our People</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team and advisory board who are making a bet on Arizona's future.
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-desert-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-desert-600 font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <div className="w-24 h-1 bg-desert-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-desert-600 font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-desert-600 to-desert-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              We're building a community of leaders, thinkers, and doers who believe in Arizona's potential. 
              Join us in making Arizona the best place in the world to pursue education, raise a family, and build a career.
            </p>
            <a 
              href="https://www.1912wt.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-desert-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe to Our Newsletter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurPeople;
