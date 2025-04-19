import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { AIProject } from "./types"

export const AIProjectCard = ({ project }: { project: AIProject }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <motion.div variants={itemVariants}>
            <Card className="bg-[#151515] border-[#2a2a2a] overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden group">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 p-2 bg-[#151515]/80 rounded-full">
                        {project.icon}
                    </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-2 py-1 bg-[#252525] text-xs rounded-full text-slate-300"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-primary text-primary hover:bg-primary/10 w-full"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                Code
                            </Button>
                        </a>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            <Button
                                size="sm"
                                className="bg-primary hover:bg-primary/80 w-full"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </Button>
                        </a>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}