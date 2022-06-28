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

export function WelcomeHomeNotification(){
  showNotification({
    title: "Welcome to MaydaySoundSystem!",
    message: 'Your tekno dealers ☢️🔊',
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

export function WelcomeShopNotification(){
  showNotification({
    title: "Welcome to the Shop!",
    message: 'Here you can find all of our merch! Happy shopping 💲💲💲',
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

export function WelcomeCartNotification(){
  showNotification({
    title: "This is your cart.",
    message: 'Press the checkout button to go to final payment! Thanks for the support 🏴‍☠️',
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
