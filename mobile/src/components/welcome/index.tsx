import { Image, Text, View } from "react-native"

import { s } from "./styles"

export function Welcome(){
    return (
        <view>
            <Image source={require("@/assets/logo_icon.png")} style={s.logo} />

            <Text style={s.title}>Boas Vindas ao Nearby</Text>

            <Text style={s.subtitle}>
                 Tenha cupons de vantagem para usar em {"\n"}
                 seus estabelecimentos favoritos.
            </Text>
        </view>
    )
}