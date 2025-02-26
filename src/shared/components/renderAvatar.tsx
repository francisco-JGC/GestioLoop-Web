import { Image } from "@unpic/react"

interface IProps {
  image_url?: string
  chart?: string
  size?: number
}

export const RenderAvatar = ({ image_url, chart = 'A', size = 13 }: IProps) => {
  const styles = `rounded-full w-${size} h-${size} border`
  return (
    <div>
      {
        image_url ? (
          <Image
            src={image_url}
            width={120}
            height={120}
            alt="avatar"
            className={`${styles} object-cover`}
          />
        ) : (
          <div className={`${styles}} bg-gray-50 flex items-center justify-center font-semibold text-gray-700 uppercase`}>
            {chart}
          </div>
        )
      }
    </div>
  )
}