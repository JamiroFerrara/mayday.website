export function formatPrice(number) {
    return Intl.NumberFormat('it-it', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
    }).format(number)
}

