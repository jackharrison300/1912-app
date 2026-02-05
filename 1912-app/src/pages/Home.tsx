const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-desert-50 to-desert-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/assets/logos/gold_black_sm.jpg" 
            alt="1912 Logo"
            className="mx-auto mb-8 h-32 w-auto"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About 1912
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-desert-700 mb-8">
            An Oasis of Local Journalism and Commentary in the Desert
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            1912 is Arizona's premier political newsletter, providing its readers with in-depth coverage of the state's political happenings and informed analysis and commentary from elected officials, subject matter experts, and our own experienced analysts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>We fill gaps in coverage at the State Capitol and across Arizona, offering a unique blend of straight news and analysis.</strong>
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                More than a simple newsletter, we are bringing together people who are dedicated to the ethos of the American West, and the presence of a distinctly Western voice in the national media ecosystem. A voice defined by Arizona and the West's independent spirit; committed to reporting the facts as they are and addressing the contemporary issues we confront.
              </p>
            </div>

            {/* Arizona Landscape Image */}
            <div className="mb-12">
              <img 
                src="/assets/about/arizona_desert_landscape.jpg" 
                alt="Arizona Desert Landscape" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Due to the nature of frontier life, no strong media institutions were planted in the early West which could reasonably rival the larger papers that occupied the bustling coasts on either side of the nation. Today, Arizona and the Southwest have far more resources, people, and infrastructure, and they are still imbued by the spirit of the West.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are the most dynamic region of the nation in the 21st century, yielding enormous agricultural outputs, producing next generation semiconductors at-scale, building interplanetary rockets, and welcoming inbound migrants from New York to New Delhi.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This surge in population and resources provides Arizona and the West an opportunity to forge a real and independent national voice.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Defined by the same attitude that inspired pioneers to go west, American Indians to build civilizations and thrive despite hardship, and Latinos to cohabitate with their westward neighbors, the time is now for the West to project its voice. This is the future of American journalism – and it may just be the future of America.
              </p>
            </div>

            {/* Best Multimedia Image */}
            <div className="mb-12">
              <img 
                src="/assets/about/best_multimedia.jpg" 
                alt="Best Multimedia of the Year 2022" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Read 1912 Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Read 1912?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  In-Depth Local and Regional Coverage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in the power of local journalism. Our focus is on stories that matter to Arizonans and the Southwest, covering everything from water rights and energy policy to wacky politics and community events. Our Weekly Round-Ups are the only resource that provides a comprehensive account of Arizona's political happenings in one place.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Engaged and Informed Citizenry
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to empowering our readers. By providing thorough and nuanced reporting, we aim to encourage active citizenship and community involvement, whether it's through volunteering, participating in local governance, or simply staying informed.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Building Community
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our publication serves as a hub for Arizonans and Westerners to connect over shared interests and concerns. We're more than reporters; we're community builders.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Restoring the Fabric of Local Media
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With the decline of local newspapers, we are stepping in to knit communities back together. Our nonprofit model is designed to serve the public interest, ensuring that our focus remains on delivering quality journalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phoenix Rising Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-desert-600 to-desert-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">A Phoenix Rising From the Ashes</h2>
              <p className="text-lg mb-6 leading-relaxed">
                1912 was born from the challenges and triumphs of the Western Tribune. After facing a devastating cyberattack in January 2023, we saw an opportunity to rise from the ashes, stronger and more focused than ever. Our name, 1912, is a nod to the year Arizona became a state, symbolizing resilience and new beginnings.
              </p>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
                <p className="text-lg mb-6">
                  We invite you to be part of 1912. Subscribe to our newsletter, engage with our stories, and become an active participant in the ongoing story that is Arizona and the American West.
                </p>
                <p className="text-lg font-medium">
                  Join us as we navigate the next frontier of journalism.
                </p>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-8 italic">
              1912 is a publication of the Western Tribune, a 501(c)(3) nonprofit news media company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
