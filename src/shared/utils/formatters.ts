export function formatPriceToUSD(price: number) {
  if (isNaN(price)) {
    return '$0.00'
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

export function formatUserRole(role: number): string {
  const userRole: Record<number, string> = {
    4: 'SUPER ADMIN',
    3: 'Admin',
    2: 'Manager',
    1: 'Staff',
  }

  return userRole[role] ?? ''
}
