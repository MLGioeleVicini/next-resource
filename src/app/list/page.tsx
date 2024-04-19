import { PrismaClient, Resources } from "@prisma/client"

const prisma = new PrismaClient()

async function getResources(){
  return await prisma.resources.findMany()
}



const ListPage = async() => {
   const resources: Array<Resources> = await getResources();

  return (
    <>
<div>ListPage</div>

<table>
  <tbody>
    <tr>
      <th>Items</th>
      <th>Items</th>
      <th>Items</th>
      <th>Items</th>
      <th>Items</th>
      <th>Items</th>
    </tr>
    {resources.map((resource) => (
      <tr key={resource.id_resources}>
        <td>{resource.id_resources}</td>
        <td>{resource.resource_extension}</td>
        <td>{resource.id_localization}</td>
        <td>{resource.page_keys}</td>
        <td>{resource.resource_key}</td>
        <td>{resource.resource_value}</td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
} 

export default ListPage