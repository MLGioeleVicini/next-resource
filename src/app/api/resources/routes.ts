import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createResourceSchema = z.object({
  resource_key: z.string().min(1).max(255)
})

export async function POST(req: NextRequest){
  const body = await req.json();

  const validation= createResourceSchema.safeParse(body);

  if(!validation.success)
    return NextResponse.json(validation.error.errors, {status:400})
}