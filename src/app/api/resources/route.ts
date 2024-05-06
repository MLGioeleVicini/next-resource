import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
import moment from 'moment';

const createResourceSchema = z.object({
    resource_key: z.string().min(1).max(255),
    resource_value: z.string().min(1).max(255),
});

const updateResourceSchema = z.object({
    resource_value: z.string().min(1).max(255),
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    const validation = createResourceSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newResource = await prisma.resources.create({
        data: {
            resource_key: body.resource_key,
            resource_value: body.resource_value,
        },
    });

    return NextResponse.json(newResource, { status: 201 });
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();

    const validation = updateResourceSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const updateResource = await prisma.resources.updateMany({
        where: {
            id_resources: body.id_resources,
        },
        data: {
            resource_value: body.resource_value,
            last_modified: moment().toISOString(),
        },
    });

    return NextResponse.json(updateResource, { status: 201 });
}
