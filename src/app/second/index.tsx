import { Button } from '@react-navigation/elements'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const second = () => {
  return (
    <View className='flex-1 justify-center items-center bg-green-600'>
      <Text className="text-5xl text-white mb-4 text-center">Second</Text>
      <Link href="/second/nest1" className='mb-4' asChild>
        <Button>go to first nest</Button>
      </Link>
      <Link href="/second/nest2" asChild>
        <Button>go to second nest</Button>
      </Link>
    </View>
  )
}

export default second
