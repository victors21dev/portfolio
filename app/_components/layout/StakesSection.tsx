import { stacks } from "@/app/data/stake";

const StackSection = () => {
  return (
    <section id="stack" className="py-20">
      <div className="container mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Stack Técnica</h2>
          <p className="text-muted-foreground">
            Tecnologias organizadas por domínio de especialização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((group) => (
            <div
              key={group.category}
              className="border rounded-2xl p-6 space-y-4 bg-background"
            >
              <h3 className="text-xl font-semibold">{group.category}</h3>

              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
