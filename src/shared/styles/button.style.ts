// Button.styles.ts
export const buttonStyles = {
  base: 'inline-flex  items-center justify-center font-semibold rounded-lg transition duration-300 py-[.4em] px-4',
  variants: {
    primary:
      'border border-primary-solid bg-gradient-to-br from-primary to-secondary text-white transform hover:brightness-110',

    secondary:
      'border border-gray-300 hover:-translate-y-1  hover:brightness-110 hover:text-primary',

    link: 'bg-transparent text-primary hover:text-primary-dark hover:underline  cursor-pointer',

    muted:
      'border border-gray-300 bg-gray-200 text-gray-700  hover:bg-gray-300',
  },
  animation: 'hover:-translate-y-1 transition-all duration-300',
  icon: {
    left: 'mr-2',
    right: 'ml-2',
  },
}
