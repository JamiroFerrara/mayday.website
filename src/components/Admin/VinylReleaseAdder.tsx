import {useState, useEffect} from 'react';
import { trpc } from '../../utils/trpc'
import { MultiSelect, SelectItem } from '@mantine/core';

let data : SelectItem[] = []

export default function AristAdder(){
  const artists = trpc.useQuery(['getAllArtists'])
  console.log(artists)

  useEffect(()=> {
    artists.data?.artist.map((artist) => {
      data.push({label: artist.artistName, value: artist.id.toString()})
    })
  }, [artists.data])

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
