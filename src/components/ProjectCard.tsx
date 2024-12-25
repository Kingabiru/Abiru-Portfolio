import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
}

function ProjectCard({ title, description, category }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-secondary/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
    >
      <span className="inline-block px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-200 mb-3">
        {category}
      </span>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default ProjectCard;