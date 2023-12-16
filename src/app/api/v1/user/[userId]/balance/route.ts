import { NextResponse, NextRequest } from "next/server";
import { getTotalBalance } from "@/services/api/balance/getTotalBalance";

export async function GET(
    request: NextRequest,
    args: UserRouteRequestArguments
): Promise<NextResponse> {
    try {
        const userIdParam = args.params.userId;

        const balance = await getTotalBalance(userIdParam);

        return NextResponse.json({
            success: true,
            data: { balance },
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
