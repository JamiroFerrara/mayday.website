import { showNotification } from '@mantine/notifications';

export function ItemAddedNotification(itemName){
  showNotification({
    title: itemName ,
    message: 'Added To Cart! 👏🔥🔥🔥',
    styles: (theme) => ({
      root: {
        backgroundColor: theme.colors.dark[6],
        borderColor: theme.colors.dark[6],

        '&::before': { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: theme.colors.dark[3] },
      },
    }),
  })
}
