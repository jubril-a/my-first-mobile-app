import { Stack } from "expo-router"

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "second"
        }}
      />
      <Stack.Screen
        name="nest1"
        options={{
          title: "Nest 1"
        }}
      />
      <Stack.Screen
        name="nest2"
        options={{
          title: "Nest 2"
        }}
      />
    </Stack>
  )
}

export default Layout
