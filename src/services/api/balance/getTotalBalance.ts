import db from "@/lib/prisma";
import { validateUserId } from "@/commons/validations/params";

async function getTotalBalance(
    userId: string | null | undefined
): Promise<number> {
    const user = await validateUserId(userId);
    const balance = await db.balance.findFirst({
        where: {
            userId: user.id,
        },
    });
    return balance?.value ?? 0;
}

export { getTotalBalance };
