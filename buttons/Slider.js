import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6;

export default function Slider() {

    const DBZ = [
        "https://i.pinimg.com/originals/05/42/80/054280437905e191314f44d8732217cf.jpg",
        "https://images.wallpapersden.com/image/download/goku-new-dragon-ball-z-art_bGZqa26UmZqaraWkpJRnaWVlrWZoamU.jpg",
        "https://wallpaperaccess.com/full/2410294.jpg",
        "https://images.alphacoders.com/605/605799.jpg",
        "https://wallpapercave.com/wp/wp2527191.jpg",
        "https://wallpaperaccess.com/full/2410289.jpg",
        "https://images2.alphacoders.com/564/thumb-1920-564835.jpg",
    ]

    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scroll} >
                {
                    DBZ.map((image, index) => (
                        <Image
                            key={index}
                            style={styles.dbz}
                            source={{ uri: image }}
                        />
                    ))
                }
                <Text>Slider Images, Swipe</Text>
            </ScrollView>
            <View style={styles.likhahua}>
                <Text>Slider Images, Swipe</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        width,
        height,
    },
    scroll: {
        width,
        height,
    },
    dbz: {
        width,
        height,
        resizeMode: 'cover',
        marginTop: 100,
    },
    likhahua: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
})