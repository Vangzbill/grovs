const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  const admin = await prisma.admin.upsert({
    where: { email: 'admin@grovs.com' },
    update: {},
    create: {
      email: 'admin@grovs.com',
      password: hashedPassword,
    },
  });
  console.log({ admin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });