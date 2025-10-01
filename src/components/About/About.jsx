import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-800 py-12">
      <section className="container mx-auto px-4">
        {/* About Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Lift and Grow</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Lift and Grow, we are passionate about helping you reach your
            fitness goals. Whether you're building muscle, following a diet
            plan, or focusing on recovery, we've got you covered with expert
            guidance and easy-to-follow tips.
          </p>
        </div>

        {/* Muscle Training Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <img
            src="/muscle trainning2.jpg"
            alt="Muscle Training"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Muscle Training</h2>
            <p className="mb-4">
              Our training plans focus on building strength, improving
              endurance, and sculpting your physique. From beginner routines to
              advanced programs, we provide detailed exercises, proper form
              tips, and progress tracking.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Strength Training Programs</li>
              <li>Bodyweight & Gym Workouts</li>
              <li>Exercise Tutorials with Tips</li>
            </ul>
          </div>
        </div>

        {/* Diet Plan Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12 md:flex-row-reverse">
          <img
            src="/diet-plan.jpg"
            alt="Diet Plan"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Diet Plans</h2>
            <p className="mb-4">
              Nutrition is key to achieving your fitness goals. We provide meal
              plans, healthy recipes, and macronutrient guides tailored to
              muscle growth, fat loss, and overall wellness.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Balanced Meal Plans</li>
              <li>Protein-Rich Recipes</li>
              <li>Supplements Guidance</li>
            </ul>
          </div>
        </div>

        {/* Recovery Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <img
            src="/recovery.jpg"
            alt="Recovery"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recovery & Wellness</h2>
            <p className="mb-4">
              Recovery is just as important as training. Learn about rest days,
              stretching, sleep optimization, and mental wellness techniques to
              prevent injuries and maintain long-term progress.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Rest & Active Recovery Tips</li>
              <li>Stretching & Mobility Exercises</li>
              <li>Sleep & Stress Management</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Start Your Fitness Journey Today!
          </h2>
          <p className="mb-6">
            Join Lift and Grow and take the first step towards a healthier,
            stronger you.
          </p>

          <Link to="/Explore">
            {" "}
            <a
              href="/plans"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Explore Plans
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
