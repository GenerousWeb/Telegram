import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from 'stream-chat-expo';


export default function HomeLayout() {
    const client = StreamChat.getInstance('zerp4a4xj2pu', {timeout: 6000})

    useEffect(() => {
        const connect = async () => {
            console.log('connect user')
            await client.connectUser(
                {
                    id: "jlahey",
                    name: "Jim Lahey",
                    image: "https://i.imgur.com/fR9Jz14.png",
                },
                client.devToken('jlahey')
            );
            const channel = client.channel('messaging', 'the_park');
            await channel.watch();
        }
        console.log('call connect')
        if(client.user === undefined)connect();
        
    })

    return (
        <OverlayProvider>
            <Chat client={client}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
                </Stack>
            </Chat>
        </OverlayProvider>
    )
}