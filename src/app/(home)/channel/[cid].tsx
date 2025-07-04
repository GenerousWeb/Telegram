import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Channel as ChannelType } from "stream-chat";
import { Channel, MessageInput, MessageList, useChatContext } from "stream-chat-expo";

export default function ChannelScreen() {
    const [channel, setChannel] = useState<ChannelType | null>(null);
    const {cid} = useLocalSearchParams<{cid: string}>();

    const {client} = useChatContext();

    useEffect(() => {
        console.log('inside channel', cid);
        const fetchChannel = async () => {
            console.log('inside fetch')
            client.queryChannels({cid}).then((channels) => setChannel(channels[0])).catch(er => console.log(er));
  
        }
        console.log('calling fetch')
        fetchChannel();
    }, [cid, client])

    if(!channel) {
        return <ActivityIndicator />
    }
    return ( <Channel channel={channel}>
                <MessageList/>
                <SafeAreaView edges={['bottom']}><MessageInput/></SafeAreaView>
                
            </Channel>)
}