export const Resources = () => {
  const resources = [
    {
      title: "Full-Body Workout Guide",
      type: "PDF",
      link: "/fullbody.pdf",
    },
    {
      title: "7-Day Meal Plan for Muscle Gain",
      type: "PDF",
      link: "/7daymealplan.pdf",
    },
    {
      title: "Post-Workout Recovery Techniques",
      type: "Video",
      link: "https://youtu.be/5z2vWpdMo8k?si=ZlzTPqiqXOU5iOBS",
    },
    {
      title: "Healthy Recipes Collection",
      type: "PDF",
      link: "/healthyfood.pdf",
    },
    {
      title: "Yoga & Stretching for Recovery",
      type: "Video",
      link: "https://youtu.be/KrUnq66qn_k?si=YRY01UahjWSqH8P7",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800 py-12">
      <section className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our curated resources to help you with muscle training, diet
            plans, and recovery techniques. Download PDFs, watch videos, and
            gain practical knowledge to accelerate your fitness journey.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
              <p className="text-sm mb-4">Type: {res.type}</p>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {res.type === "PDF" ? "Download" : "Watch Video"}
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Stay Consistent!</h2>
          <p className="mb-6">
            Keep exploring our resources regularly to stay on track with your
            fitness goals.
          </p>
          <a
            href="/about"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Back to About
          </a>
        </div>
      </section>
    </main>
  );
};
