import {useState, useEffect} from 'react';
import { trpc } from '../../../utils/trpc'
import { MultiSelect, SelectItem } from '@mantine/core';

let data : SelectItem[] = []

interface Props {
  values: string[]
  setValues: any
}

export default function GenreAdder(props:Props){
  const { values, setValues } = props
  const genres = trpc.useQuery(['getAllGenres'])

  useEffect(()=> {
    genres.data?.genres.map((genre) => {
      data.push({label: genre.name, value: genre.id.toString()})
    })
  }, [genres.data])

  return (
    <>
      <div className="rounded">

        <MultiSelect
          data={data}
          value={values}
          onChange={(a) => setValues(a)}
          searchable
          transition="pop-top-left"
          placeholder="Genre"
        />

      </div>
    </>
  )
}
