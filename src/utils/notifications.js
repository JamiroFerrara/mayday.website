import { showNotification } from '@mantine/notifications';

export function ItemAddedNotification(itemName){
  showNotification({
    title: itemName ,
    message: 'Added To Cart! 👏🔥🔥🔥',
    styles: (theme) => (getDefaultStyle(theme)),
  })
}

export function WelcomeHomeNotification(){
  showNotification({
    title: "Welcome to MaydaySoundSystem!",
    message: 'Your tekno dealers ☢️🔊',
    styles: (theme) => (getDefaultStyle(theme)),
  })
}

// Shop
// -------------------------------------

export function WelcomeShopNotification(){
  showNotification({
    title: "Welcome to the Shop!",
    message: 'Here you can find all of our merch! Happy shopping 💲💲💲',
    styles: (theme) => (getDefaultStyle(theme)),
  })
}

export function WelcomeCartNotification(){
  showNotification({
    title: "This is your cart.",
    message: 'Press the checkout button to go to final payment! Thanks for the support 🏴‍☠️',
    styles: (theme) => (getDefaultStyle(theme)),
  })
}

export function WelcomeDigitalTracksNotfication(){
  showNotification({
    title: "Welcome to the digital track section!",
    message: 'All tracks are W.A.V files ready to be played, happy DJing! 💽💽🎉🎉',
    styles: (theme) => (getDefaultStyle(theme)),
  })
}

export function WelcomeSamplePacksNotfication(){
  showNotification({
    title: "Want to improve your production arsenal?",
    message: 'Then look no further than the mayday sample pack section! 🏮🏮',
    styles: (theme) => (getDefaultStyle(theme)),
  })
}

export function WelcomeVinylsNotfication(){
  showNotification({
    title: "Welcome to the Vinyl section!",
    message: 'All of our available vinyl records. 🧿🧿',
    styles: (theme) => (getDefaultStyle(theme)),
  })
}

function getDefaultStyle(theme){
  return (
    {
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
    }
  )
}
