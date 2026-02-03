import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.career.count();
  if (count > 0) return;

  await prisma.career.createMany({
    data: [
      {
        title: "Business Analyst",
        industry: "Business / Tech",
        description: "Analyzes requirements, maps processes, and translates business needs into system improvements."
      },
      {
        title: "Data Analyst",
        industry: "Analytics",
        description: "Uses SQL/Excel/Python to clean data, build dashboards, and generate insights for decisions."
      },
      {
        title: "UX Designer",
        industry: "Product",
        description: "Designs user experiences through research, wireframes, prototypes, and usability testing."
      },
      {
        title: "Product Manager",
        industry: "Product",
        description: "Owns product direction, prioritizes roadmap, and aligns teams to deliver user value."
      }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
