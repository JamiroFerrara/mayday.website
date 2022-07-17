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
          label="Pick the artists that worked on the track!"
          searchable
          transition="pop-top-left"
          placeholder="Pick all that you like"
        />

      </div>
    </>
  )
}
