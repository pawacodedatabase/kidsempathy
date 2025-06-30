import { motion } from 'framer-motion';

import team1 from '../assets/team_1.jpg'
import team2 from '../assets/team_2.jpg'
import team3 from '../assets/team_3.jpg'
import team4 from '../assets/team_4.jpg'

const teamImages = [
 team1, team2,team3,team4
];

const OurTeam = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 relative"
          >
            <img
              src={image}
              alt={`Team member ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
