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
    1: 'SUPER ADMIN',
    2: 'Admin',
    3: 'Manager',
    4: 'Staff',
  }

  return userRole[role] ?? ''
}
