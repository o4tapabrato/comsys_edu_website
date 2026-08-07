import { prisma } from "../prisma";

export async function getAllEvents() {
    try {
        const allEvents = await prisma.events.findMany();
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
                date: 'desc'
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
                date: {
                    gte: new Date(`${targetYear}-01-01T00:00:00.000Z`),
                    lt: new Date(`${targetYear + 1}-01-01T00:00:00.000Z`),
                },
                category: 'CONFERENCE'
            },
            orderBy: {
                date: 'desc'
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
                date: {
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
        const { title, location, category, year, description, url } = event;

        if (!title || !location || !category || !year) {
            throw new Error('missing required fields !!!');
        }

        const newEvent = await prisma.events.create({
            data: {
                title,
                location,
                category,
                year,
                description: description? description : '',
                url: url? url : '',
            }
        })
        return newEvent;
    }
    catch (error) {
        throw new Error(error);
    }
}