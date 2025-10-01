import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <main className="container mx-auto px-4 py-10 space-y-16 font-serif">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Build Muscle, Eat Smart</h1>
          <p className="text-lg text-gray-600">
            Your journey to strength and fitness starts here with guided workout
            plans and balanced diets.
          </p>
          <img
            src="/biceps.png"
            alt="Muscle Training"
            className="mx-auto rounded-2xl shadow-lg max-h-96 object-cover"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-4 font-serif">
              Muscle Building Workouts
            </h2>
            <p className="text-gray-600 mb-4  font-serif ">
              Follow scientifically backed routines for strength training,
              hypertrophy, and endurance. Get step-by-step guides with images
              for each exercise.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 font-bold font-serif">
              <li>Beginner to Advanced Plans</li>
              <li>Targeted Muscle Group Training</li>
              <li>Weekly Progress Tracking</li>
            </ul>
          </div>
          <div>
            <img
              src="/muscle-plan.jpg"
              alt="Workout Plan"
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/diet-plan.jpg"
              alt="Healthy Food"
              className="rounded-2xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-semibold mb-4 font-serif">
              Diet Plans for Growth
            </h2>
            <p className="text-gray-600 mb-4 font-serif">
              Nutrition is the foundation of fitness. Choose from custom diet
              plans designed for muscle gain, fat loss, or balanced health.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 font-serif font-bold">
              <li>High-Protein Meal Guides</li>
              <li>Calorie Calculator Integration</li>
              <li>Vegan & Vegetarian Options</li>
            </ul>
          </div>
        </section>

        <section className="text-center space-y-4">
          <h2 className="flex text-center gap-3 text-3xl font-bold ml-111">
            Ready to Transform
            <img
              src="/musclebuildingicon.png"
              alt="icon"
              className="w-8 h-8 "
            />
          </h2>
          <p className="text-gray-600">
            Start today with personalized workout and diet plans tailored to
            your goals.
          </p>
          <Link to="/about" className="hover:underline">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700">
              Get Started
            </button>
          </Link>{" "}
        </section>
      </main>
    </div>
  );
}
