/*
  TASK 2 - Page component is React Server Component. Make the House component to be the client-only component and use it in the Page component.
  Docs: https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive
  Url: http://localhost:3000/daenerys  
*/

export default async function Princess() {

  const daenerysFetch = fetch('https://anapioficeandfire.com/api/characters/271')
  const jon = await (await daenerysFetch).json() as IHero

  return (
    <div>
      <h1>{jon.name}</h1>
      <h2>{jon.titles}</h2>

      {/* TODO: make it client component with data fetching https://www.anapioficeandfire.com/api/houses/285
          hint: use the useEffect hook.      
      */}
      <House />

    </div>
  );
}

interface IHero {
  name: string;
  titles: string;
}

export function House() {
  const house = { name: "TODO", coatOfArms: "TODO" }
  if (!house) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{house.name}</h2>
      <h3>{house.coatOfArms}</h3>
    </div>
  );
}

interface IHouse {
  name: string;
  coatOfArms: string;
}