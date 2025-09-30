export const Explore = () => {
  return (
    <main className="bg-gray-50 text-gray-800 py-12">
      <section className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore More</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Dive deeper into our fitness programs. Learn more about advanced
            muscle training, personalized diet plans, and recovery techniques to
            maximize your results.
          </p>
        </div>

        {/* Muscle Training Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Advanced Muscle Training
          </h2>
          <p className="mb-4">
            Take your workouts to the next level with detailed routines designed
            for strength, hypertrophy, and endurance. Track your progress and
            fine-tune your exercises.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Split & Full-Body Workouts</li>
            <li>Strength & Conditioning Programs</li>
            <li>Proper Form and Injury Prevention</li>
          </ul>
        </div>

        {/* Diet Plan Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">In-Depth Diet Plans</h2>
          <p className="mb-4">
            Nutrition strategies tailored to your fitness goals. Learn about
            meal timing, macro adjustments, and supplements to boost muscle
            growth and fat loss.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom Meal Plans</li>
            <li>High-Protein Recipes</li>
            <li>Hydration & Supplement Guides</li>
          </ul>
        </div>

        {/* Recovery Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Recovery & Wellness Techniques
          </h2>
          <p className="mb-4">
            Learn strategies to recover faster and stay injury-free. From
            mobility work to mental wellness, recovery is a critical part of
            your fitness journey.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Stretching & Mobility Routines</li>
            <li>Rest Day Programs</li>
            <li>Sleep Optimization & Stress Relief</li>
          </ul>
        </div>

        {/* Bonus Resources */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Extra Resources</h2>
          <p className="mb-6">
            Check out our expert guides, videos, and downloadable content to
            help you stay consistent and motivated.
          </p>
          <a
            href="/Resources"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            View Resources
          </a>
        </div>
      </section>
    </main>
  );
};
