import {useState, useEffect} from 'react';
import { trpc } from '../../utils/trpc'
import { MultiSelect, SelectItem } from '@mantine/core';

let data : SelectItem[] = []

interface Props {
  values: string[]
  setValues: any
}

export default function AristAdder(props:Props){
  const { values, setValues } = props

  const artists = trpc.useQuery(['getAllArtists'])
  // console.log(artists)

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
          value={values}
          onChange={(a) => setValues(a)}
          label="Pick the artists that worked on the track!"
          searchable
          transition="pop-top-left"
          placeholder="Search for an artist"
        />

      </div>
    </>
  )
}
