import { NextResponse, NextRequest } from "next/server";
import { getAllMovements } from "@/services/api/movement/getAllMovements";

export async function GET(
    request: NextRequest,
    args: UserMovementRequestArguments
): Promise<NextResponse> {
    try {
        const url = new URL(request.url);

        const offsetParam = url.searchParams.get("offset");
        const limitParam = url.searchParams.get("limit");
        const fromDateParam = url.searchParams.get("from");
        const toDateParam = url.searchParams.get("to");
        const userIdParam = args.params.userId;

        const movements = await getAllMovements(
            offsetParam,
            limitParam,
            fromDateParam,
            toDateParam,
            userIdParam
        );

        return NextResponse.json({
            success: true,
            data: movements,
            errors: null,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                data: null,
                errors: [(error as Error).message],
            },
            { status: 400 }
        );
    }
}
