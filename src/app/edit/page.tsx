import { PrismaClient, Resources } from "@prisma/client"
import {columns} from './columns'
import { DataTable } from "@/components/SearchableList/SearchableList";

const prisma = new PrismaClient()

const EditPage = async() => {

  const resources: Array<Resources> = await prisma.resources.findMany();

  return (
    <>
      <h1>EditPage</h1>
      <DataTable columns={columns} data={resources} />
    </>
  )
} 

export default EditPage