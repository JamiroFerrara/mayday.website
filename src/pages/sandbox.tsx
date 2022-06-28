import { Group, Button } from '@mantine/core';
import { ItemAddedNotification } from '../utils/notifications'

export default function SandboxPage(){

  return(
    <>
      <Group position="center">
        <Button
          variant="outline"
          onClick={() => ItemAddedNotification()}
        >
          Show customized notification
        </Button>
      </Group>
    </>
  )
}
