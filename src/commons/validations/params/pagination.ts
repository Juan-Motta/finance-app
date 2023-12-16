import { NextRequest } from "next/server";

function validatePaginationParams(
    offsetParam: string | null | undefined,
    limitParam: string | null | undefined
): validatePaginationParamsResponse {
    const offset = parseInt(offsetParam ?? "0");
    const limit = parseInt(limitParam ?? "20");
    if (isNaN(offset)) {
        throw new Error("Offset is not a number");
    } else if (isNaN(limit)) {
        throw new Error("Limit is not a number");
    } else if (offset < 0) {
        throw new Error("Offset is less than 0");
    } else if (limit < 0) {
        throw new Error("Limit is less than 0");
    }
    return { offset, limit };
}

export { validatePaginationParams };
