import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Upload, Photo, X } from 'tabler-icons-react';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import { useState } from 'react';

interface Props {
  className?: string
  title: string
  description?: string
  Image?: string | ArrayBuffer | null
  setImage:any 
}

export default function AdminDropzone(props:Props) {
  const { className, title, description, Image, setImage } = props
  const [isUrl, setIsUrl] = useState<boolean>(false)
  const theme = useMantineTheme();
  console.log(Image);

  function onFileDrop(files: any){
    const reader = new FileReader();
    reader.onload = function () { setImage(reader.result); };
    reader.readAsDataURL(files[0]);
  }

  return (
    <>
      <Dropzone
        className={'bg-zinc-900 hover:bg-zinc-800 ' + className} 
        onDrop={(files) => onFileDrop(files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={['image/png', 'image/jpeg']}
      >
        {(status) => children(status, theme, Image, title, description)}
      </Dropzone>
    </>
  );
}

function children(status: DropzoneStatus, theme: MantineTheme, image: any, title: string, description: string | undefined){
  if (image){
    return (
      <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        {/* <div className='flex flex-row justify-center'>Uploaded!</div> */}
        <img className='h-full w-full' src={image} alt=""/>
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

  return <Photo {...props} />;
}
