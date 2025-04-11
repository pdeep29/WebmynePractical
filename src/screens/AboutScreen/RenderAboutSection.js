import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colorConstant from '../../utils/colorConstant';
import { hp, wp } from '../../utils/dimensions';
import WebIconSvg from '../../assets/svgIcons/WebIconSvg';
import PhoneIconSvg from '../../assets/svgIcons/PhoneIconSvg';
import LocationIconSvg from '../../assets/svgIcons/LocationIconSvg';
import BedIconSvg from '../../assets/svgIcons/BedIconSvg';
import BuildingIconSvg from '../../assets/svgIcons/BuildingIconSvg';
import BathTubIconSvg from '../../assets/svgIcons/BathTubIconSvg';
import ReadMore from '@fawazahmed/react-native-read-more';
import WebView from 'react-native-webview';
import WifiIconSvg from '../../assets/svgIcons/WifiIconSvg';
import ResturantIconSvg from '../../assets/svgIcons/ResturantIconSvg';
import ParkingIconSvg from '../../assets/svgIcons/ParkingIconSvg';
import MeetingRoomIconSvg from '../../assets/svgIcons/MeetingRoomIconSvg';
import ElevatorIconSvg from '../../assets/svgIcons/ElevatorIconSvg';

const RenderFacilitiesItem = ({ title, extraStyle, icon }) => {
    return (<View style={[styles.detailItem, { ...extraStyle }]}>
        {/* Replace with your icon */}
        {icon()}
        <Text style={styles.actionButtonText}>{title}</Text>
    </View>)
}

const RenderAboutSection = ({ data }) => {

    console.log('data', data)
    let { Description, point } = data

    const latitude = point != null ? point.latitude : 22.304525;
    const longitude = point != null ? point.longitude : 73.164298;
    const leafletMap = `
    <html>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      <style>
        #map { height: 100%; }
        body { margin: 0; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var map = L.map('map').setView([${latitude}, ${longitude}], 16);
    
        L.tileLayer('http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}', {
          maxZoom: 17,
        }).addTo(map);

        var redIcon = L.icon({
          iconUrl: 'https://w7.pngwing.com/pngs/345/54/png-transparent-green-location-icon-illustration-computer-icons-google-maps-google-map-maker-adress-angle-leaf-grass.png',
          iconSize: [100, 100],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });
            L.marker([${latitude}, ${longitude}], {icon: redIcon}).addTo(map)
       
      </script>
    </body>
    </html>
  `;
    return (<View style={{ backgroundColor: colorConstant.WhiteShade }}>


        <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
                {/* Replace with your icon */}
                <LocationIconSvg height={hp(3.5)} width={hp(3.5)} />
                <Text style={styles.actionButtonText}>Directions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                {/* Replace with your icon */}
                <WebIconSvg height={hp(4)} width={hp(4)} />

                <Text style={styles.actionButtonText}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                {/* Replace with your icon */}
                <PhoneIconSvg height={hp(4)} width={hp(4)} />

                <Text style={styles.actionButtonText}>Contact</Text>
            </TouchableOpacity>
        </View>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Details</Text>
            <View style={styles.detailsRow}>
                <View style={styles.detailItem}>
                    {/* Replace with your icon */}
                    <BuildingIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.ThemeGreenColor} />
                    <Text style={styles.actionButtonText}>Hotels</Text>
                </View>
                <View style={styles.detailItem}>
                    {/* Replace with your icon */}
                    <BedIconSvg height={hp(4)} width={hp(4)} customStroke={colorConstant.ThemeGreenColor} />
                    <Text style={styles.actionButtonText}>4 Bedrooms</Text>
                </View>
                <View style={styles.detailItem}>
                    {/* Replace with your icon */}
                    <BathTubIconSvg height={hp(3.5)} width={hp(3.5)} fill={colorConstant.ThemeGreenColor} />
                    <Text style={styles.actionButtonText}>2 Bathrooms</Text>
                </View>
                <View style={styles.detailItem}>
                    {/* Replace with your icon */}
                    <LocationIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.ThemeGreenColor} />

                    <Text style={styles.actionButtonText}>4000 sq ft</Text>
                </View>
            </View>
        </View>

        {/* Description Section */}
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>

            <View style={{
                flex: 1,
                paddingHorizontal: 5
            }}>
                <ReadMore numberOfLines={5} style={styles.descriptionText} seeMoreText={'Read More...'} seeLessText={'Read Less...'}

                    seeMoreStyle={styles.seeMoreLessStyle}
                    seeLessStyle={styles.seeMoreLessStyle}

                >
                    {Description}
                </ReadMore>
            </View>
        </View>
        {/* Facilities Section */}
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Facilities</Text>
            <View style={styles.detailsRow}>
                <RenderFacilitiesItem extraStyle={{ minWidth: wp(30) }} title={'Wifi'}
                    icon={() => <WifiIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.ThemeGreenColor} />} />

                <RenderFacilitiesItem extraStyle={{ minWidth: wp(30) }} title={'Resturant'}
                    icon={() => <ResturantIconSvg height={hp(5)} width={hp(5)} fill={colorConstant.ThemeGreenColor} />} />

                <RenderFacilitiesItem extraStyle={{ minWidth: wp(30) }} title={'Parking'}
                    icon={() => <ParkingIconSvg height={hp(4.5)} width={hp(4.5)} fill={colorConstant.ThemeGreenColor} />} />


            </View>
            <View style={{ height: hp(2) }} />
            <View style={styles.detailsRow}>
                <RenderFacilitiesItem extraStyle={{ minWidth: wp(30) }} title={'Meeting Room'}
                    icon={() => <MeetingRoomIconSvg height={hp(3.5)} width={hp(3.5)} fill={colorConstant.ThemeGreenColor} />} />

                <RenderFacilitiesItem extraStyle={{ minWidth: wp(30) }} title={'Elevator'}
                    icon={() => <ElevatorIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.ThemeGreenColor} />} />

                <RenderFacilitiesItem extraStyle={{ minWidth: wp(30) }} title={'Fitness Room'}
                    icon={() => <BuildingIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.ThemeGreenColor} />} />
            </View>
        </View>
        <View style={{ height: hp(2) }} />
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Location</Text>
            <View style={{ width: wp(90), alignSelf: 'center' }}>


                <WebView
                    originWhitelist={['*']}
                    source={{ html: leafletMap }}
                    style={{ height: hp(20), width: wp(90), }}
                />
            </View>
        </View>


        <View style={{ height: hp(2) }} />

    </View>)
}
export default RenderAboutSection
const styles = StyleSheet.create({


    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: colorConstant.WhiteShade
    },
    actionButton: {
        alignItems: 'center',
    },
    actionButtonText: {
        color: colorConstant.Black, fontSize: hp(1.5), fontWeight: '500'
    },
    detailsContainer: {
        paddingHorizontal: 16,
        backgroundColor: colorConstant.WhiteShade

    },
    detailsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colorConstant.Black
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    detailItem: {
        alignItems: 'center', justifyContent: 'space-between',
        minHeight: hp(6),
    },
    descriptionContainer: {
        padding: 16,
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colorConstant.Black
    },
    descriptionText: {
        fontSize: hp(1.8),
        lineHeight: 24,
        color: colorConstant.Grey


    },
    seeMoreLessStyle: { color: colorConstant.ThemeGreenColor, fontSize: hp(1.8), }
});