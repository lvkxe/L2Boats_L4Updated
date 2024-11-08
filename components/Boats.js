import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boats = ({ icon_name, name, description, picture }) => {
    return (
        <View style={styles.boatContainer}>
            <Text style={styles.header}>GetABoat - For Sale</Text>
            <View style={styles.titleContainer}>
                <Icon name={icon_name} size={30} color="#B23B23" style={styles.icon} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Boats
                icon_name="sailboat"
                name="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away"
                picture={require('../img/sea_ray.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others"
                picture={require('../img/four_winns.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Flipper 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic"
                picture={require('../img/flipper.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Princess V48"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior"
                picture={require('../img/princess.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Bayliner 175 Bowrider"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance"
                picture={require('../img/bayliner.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Fairline Targa 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit"
                picture={require('../img/fairline.jpg')}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'grey',
    },
    boatContainer: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 20
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'darkred',
        marginBottom: 10

    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 8,
    },
    name: {
        fontSize: 22,
        fontWeight: '600',
        color: 'darkred',
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: 'grey',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
});

export default AllBoats;

