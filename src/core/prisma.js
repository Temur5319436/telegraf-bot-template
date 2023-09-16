const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Gracefully disconnect from the database when the application exits
process.on('beforeExit', async () => {
    console.log('Before exit: Disconnecting from the database...');
    await prisma.$disconnect();
    console.log('Database disconnected.');
});

// Handle unhandled promise rejections and errors
process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
    // Ensure to disconnect from the database before exiting due to an error
    prisma.$disconnect().then(() => {
        process.exit(1); // Exit with a non-zero code to indicate an error
    });
});


module.exports = prisma