import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import StarryBackground from "./StarryBackground";

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  description: string;
  gpa: string;
}

interface EducationTimelineProps {
  education: EducationItem[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
  return (
    <section className="py-20 relative">
      <StarryBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">
            Academic journey that shaped my technical foundation
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400/50 to-purple-500 h-full hidden md:block"></div>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-background shadow-lg hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(168,85,247,0.9)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] rounded-lg p-6 bg-card transition-shadow duration-300`}
                >
                  <Card>
                    <CardHeader>
                      <div className={`flex items-start justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="space-y-2">
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-purple-600 font-medium">{edu.school}</CardDescription>
                          <div className={`flex items-center space-x-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                            <span>{edu.year}</span>
                            <Badge variant="outline">SGPA: {edu.gpa}</Badge>
                          </div>
                        </div>
                        <GraduationCap className="h-8 w-8 text-purple-600" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
