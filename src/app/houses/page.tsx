/*  
  Task 1. Implement the fetching of data from the API https://anapioficeandfire.com/api/houses/ using fetch method in the Page component.
  Docs: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components
  Url: http://localhost:3000/houses
*/

export default function Page() {

  const data = [] as any[]

  return <div className="houses">
    <h1>Houses</h1>
    <ul>{data.map((x: any) => <li>
      <h2 key={x.name}>{x.name} - {x.region}</h2>
      <p>Words: {x.words}</p>
    </li>)}
    </ul>
  </div>;
}