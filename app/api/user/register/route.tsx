import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';
export async function GET(): Promise<NextResponse> {
	return NextResponse.json({
		msg: 'this is only testing GET. your request have been ignored.'
	});
}
export async function POST(request: NextRequest): Promise<NextResponse> {
	return NextResponse.json({
		msg: 'this is only testing POST. your request have been ignored.',
		req: await request.json()
	});
}