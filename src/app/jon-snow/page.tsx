// TASK 3. start fetching in parallel BUT wait of jon to feteched and then use Suspense to wait for the house to be fetched - use House component
// TASK 4. wait for both to be fetched and then render the page. NO Suspense is needed. use House2 component

// Docs: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#data-fetching-patterns
// Url: http://localhost:3000/jon-snow

import { Suspense } from "react";

export default function Page() {

  const jonFetch = {}// fetch 'https://anapioficeandfire.com/api/characters/583'
  const jonsHouseFetch = {} //fetch 'https://anapioficeandfire.com/api/houses/362'

  const jon = {} as IHero

  return (
    <div>
      <h1>{jon.name}</h1>
      <h2>{jon.titles}</h2>
      {/* Wrap the House component in Suspense 
          You need to use @ts-expect-error Async Server Component
      */}

    </div>
  );
}


async function House({ promise }: { promise: Promise<IHouse> }) {

  // TODO : get date from promise
  const house = {}
  return (
    <div>
      <h2>{house.name}</h2>
      <h3>{house.coatOfArms}</h3>
    </div>
  );
}



function House2({ house }: { house: IHouse }) {
  // continue here  
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

interface IHero {
  name: string;
  titles: string;
}

