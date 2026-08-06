import { prisma } from "../prisma";

export async function createTrustee(item) {
    try {
        const { name, designation, photoUrl, bio, order } = item;

        const newTrustee = await prisma.trustee.create({
            data: {
                name,
                designation,
                photoUrl,
                bio,
                order: order? order : 0
            }
        })

        return newTrustee;
    }
    catch (error) {
        throw new Error(error);
    }
}

export async function getTrusteeData() {
    try {
        const trusteeData = await prisma.trustee.findAll();
        return trusteeData;
    }
    catch (error) {
        throw new Error(error);
    }
}