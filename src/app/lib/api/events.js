import { prisma } from "../prisma";

export async function getAllEvents() {
    try {
        const allEvents = await prisma.events.findMany({
            orderBy: 'desc'
        });
        return allEvents;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function getAllConferences() {
    try {
        const allConferences = await prisma.events.findMany({
            where: {
                category: "CONFERENCE"
            },
            orderBy: {
                startDate: 'desc'
            }
        });
        return allConferences;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function getConferencesByYear(targetYear) {
    try {
        const conferences = await prisma.events.findMany({
            where: {
                startDate: {
                    gte: new Date(`${targetYear}-01-01T00:00:00.000Z`),
                    lt: new Date(`${targetYear + 1}-01-01T00:00:00.000Z`),
                },
                category: 'CONFERENCE'
            },
            orderBy: {
                startDate: 'desc'
            }
        });
        return conferences;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function getEventByYear(targetCategory, targetYear) {
    try {
        const events = await prisma.events.findMany({
            where: {
                category: targetCategory,
                startDate: {
                    gte: new Date(`${targetYear}-01-01T00:00:00.000Z`),
                    lt: new Date(`${targetYear + 1}-01-01T00:00:00.000Z`),
                },
            }
        })
        return events;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function createEvent(event) {
    try {
        const { title, location, category, startDate, endDate, year, description, url } = event;

        if (!title || !location || !category || !year) {
            throw new Error('missing required fields !!!');
        }

        const newEvent = await prisma.events.create({
            data: {
                title,
                location,
                category,
                startDate,
                endDate,
                year,
                description: description ? description : '',
                url: url ? url : '',
            }
        })
        return newEvent;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function getHomeConferences() {
    try {
        const featuredEvents = prisma.events.findMany({
            take: 3,                  // Limits the result to 3 records
            orderBy: {
                createdAt: 'desc',    // Sorts by newest creation date first
            },
        })
        return featuredEvents;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function getUpcomingConferences() {
    try {
        const upcomingConferences = await prisma.events.findMany({
            where: {
                category: "CONFERENCE",
                startDate: {
                    gte: new Date(),
                },
            },
            orderBy: {
                startDate: 'asc',
            },
        });
        return upcomingConferences;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getPastConferences() {
    try {
        const pastConferences = await prisma.events.findMany({
            where: {
                category: "CONFERENCE",
                endDate: {
                    lt: new Date()
                },
            },
            orderBy: {
                endDate: 'desc'
            }
        })
        return pastConferences;
    }
    catch (error) {
        throw new Error(error);
    }
}