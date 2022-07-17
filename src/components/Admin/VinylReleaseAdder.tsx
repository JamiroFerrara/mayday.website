import {useState, useEffect} from 'react';
import { trpc } from '../../utils/trpc'
import { MultiSelect, SelectItem } from '@mantine/core';

let data : SelectItem[] = []

export default function VinylAdder(){
  const vinyls = trpc.useQuery(['getAllVinyls'])
  console.log(vinyls)

  useEffect(()=> {
    vinyls.data?.vinyls.map((vinyl) => {
      data.push({label: vinyl.title, value: vinyl.id.toString()})
    })
  }, [vinyls.data])

  return (
    <>
      <div className="rounded">

        <MultiSelect
          data={data}
          searchable
          transition="pop-top-left"
          placeholder="Is there a vinyl release?"
        />

      </div>
    </>
  )
}
