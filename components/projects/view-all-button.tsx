import { Button } from "@/components/ui/button"

export const ViewAllButton = () => {
    return (
        <div className="text-center mt-12">
            <a
                href="https://github.com/MumtazMert"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                >
                    View All Projects
                </Button>
            </a>
        </div>
    )
}