import {
    validateDateParams,
    validatePaginationParams,
    validateUserId,
} from "@/commons/validations/params";
import db from "@/lib/prisma";

async function getAllMovements(
    offsetParam: string | null | undefined,
    limitParam: string | null | undefined,
    fromDateParam: string | null | undefined,
    toDateParam: string | null | undefined,
    userIdParam: string | null | undefined
) {
    const pagination = validatePaginationParams(offsetParam, limitParam);
    const date = validateDateParams(fromDateParam, toDateParam);
    const user = await validateUserId(userIdParam);
    const movements = await db.movement.findMany({
        skip: pagination.offset,
        take: pagination.limit,
        where: {
            createdAt: {
                gte: date.from,
                lte: date.to,
            },
            userId: user.id,
        },
    });
    return movements;
}

export { getAllMovements };
