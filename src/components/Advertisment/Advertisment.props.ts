export interface AdvertismentProps {
  _id: string
  title: string
  name: string
  createdAt: string
  pictures: string[]
  rating: {
    value: number
    count: number
  }
  isLoading?: boolean
}
