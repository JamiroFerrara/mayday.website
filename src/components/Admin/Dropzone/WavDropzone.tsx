import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Upload, Music, X } from 'tabler-icons-react';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import { useState } from 'react';

interface Props {
  className?: string
  title: string
  description?: string
  Audio: any
  setAudio: any
}

export default function WavDropzone(props:Props) {
  const { className, title, description, Audio, setAudio } = props;
  const theme = useMantineTheme();

  function onFileDrop(files: any){
    // setAudio(files[0].name)
    const reader = new FileReader();
    reader.onload = function () { setAudio(reader.result); };
    reader.readAsDataURL(files[0]);
  }

  return (
    <Dropzone
      className={'bg-zinc-900 hover:bg-zinc-800 ' + className} 
      onDrop={(files) => onFileDrop(files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={['audio/wav']}
    >
      {(status) => children(status, theme, Audio, title, description)}
    </Dropzone>
  );
}

function children(status: DropzoneStatus, theme: MantineTheme, audio: any, title: string, description: string | undefined){
  if (audio){
    return (
      <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        {/* <div className='flex flex-row justify-center'>Uploaded!</div> */}
        <div>{audio}</div>
      </Group>
    )
  } else {
    return (
      <Group position="center" style={{ minHeight: 200, pointerEvents: 'none' }}>
        <ImageUploadIcon className='' status={status} style={{ color: getIconColor(status, theme) }} size={80} />

        <div>
          <Text size="xl" inline>
            {title}
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            {description}
          </Text>
        </div>
      </Group>
    )
  }
}

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }: any & { status: DropzoneStatus }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Music {...props} />;
}
