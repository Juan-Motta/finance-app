import db from "@/lib/prisma";

async function validateUserId(userId: string | null | undefined) {
    if (!userId) {
        throw new Error("User id is required");
    }
    const id = parseInt(userId);
    if (isNaN(id)) {
        throw new Error("Invalid user id");
    }
    const user = await db.user.findFirst({
        where: {
            id,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export { validateUserId };
