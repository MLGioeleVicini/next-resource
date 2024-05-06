"use client"

import EditableCell from '@/components/SearchableList/EditableCell';
import { Button } from '@/components/ui/button';
import { Resources } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';

export const columns: ColumnDef<Resources>[] = [
    {
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === 'asc');
                    }}
                >
                    ID +-
                </Button>
            );
        },
        accessorKey: 'id_resources',
    },
    {
        header: 'Page',
        accessorKey: 'page_keys',
        cell: EditableCell,
    },
    {
        header: 'Resource Key',
        accessorKey: 'resource_key',
        cell: EditableCell,
    },
    {
        header: 'Resource Value',
        accessorKey: 'resource_value',
        cell: EditableCell,
    },
    {
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === 'asc');
                    }}
                >
                    Ultimo aggiornamento +-
                </Button>
            );
        },
        accessorKey: 'last_modified',
        cell: ({ row }) => {
            const date = row.getValue('last_modified');
            const formatted = moment(date as string).format(
                'YYYY-MM-DD HH:mm:ss'
            );

            return <div>{formatted}</div>;
        },
    },
];
