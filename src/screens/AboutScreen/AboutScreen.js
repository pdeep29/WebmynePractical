import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import colorConstant from '../../utils/colorConstant';
import { hp, wp } from '../../utils/dimensions';
import { ImageBaseUrl } from '../../api/ApiConstant';
import BackIconSvg from '../../assets/svgIcons/BackIconSvg';
import HeartIconSvg from '../../assets/svgIcons/HeartIconSvg';
import LocationIconSvg from '../../assets/svgIcons/LocationIconSvg';
import RenderAboutSection from './RenderAboutSection';
import { useDispatch, useSelector } from 'react-redux';
import LoadingView from '../../Components/LoadingView';
import * as AboutActions from './about.action'
import moment from 'moment';
import { setToken } from '../../api';
import RenderFlashMessage from '../../Components/RenderFlashMessage';
import RenderPlaySection from './RenderPlaySection';
import RenderLearnSection from './RenderLearnSection';



const RenderTab = ({ onClick, active, title }) => {
    return (<TouchableOpacity style={[styles.tab, { borderBottomWidth: active === true ? 3 : 0, borderBottomColor: active === true ? colorConstant.ThemeGreenColor : 'transparent' }]} onPress={onClick}>
        <Text style={[styles.tabText, { color: active === true ? colorConstant.ThemeGreenColor : colorConstant.Black, fontWeight: active === true ? '600' : '500' }]}>{title}</Text>
    </TouchableOpacity>)
}
const AboutScreen = () => {
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const dispatch = useDispatch()
    const [aboutPlayData, setAboutPlayData] = useState(null)
    const [aboutLearnData, setAboutLearnData] = useState(null)
    useEffect(() => {
        setToken('DEBUG')
        console.log('active called')
        InitiateApiCall(activeTab)
    }, [])
    useEffect(() => {
        console.log('active called')
        InitiateApiCall(activeTab)
    }, [activeTab])
    function InitiateApiCall(activeTab) {
        let demoData = {
            "date": moment(new Date()).format('YYYY-MM-DD'),
            "activity_category_id": 1,
            "min_price": 0,
            "max_price": 0,
            "location_id": 94
        }
        // setLoading(true)
        if (activeTab === 0) {
            // setLoading(true)
            dispatch(AboutActions.getPlayAbout(demoData, onSuccess, onFaliur))
        }
        if (activeTab === 2) {
            // setLoading(true)
            dispatch(AboutActions.getLearAbout(demoData, onSuccessLearn, onFaliurLearn))
        }

    }
    function onSuccess(data) {
        setLoading(false)
        setAboutPlayData(data)

    }
    function onFaliur(data) {
        setLoading(false)

        RenderFlashMessage('Something Went Wrong Please Try After Some Time', 'danger')
    }
    function onSuccessLearn(data) {
        setLoading(false)
        setAboutLearnData(data)

    }
    function onFaliurLearn(data) {
        setLoading(false)
        console.log('ErrorData', data)
        RenderFlashMessage('Something Went Wrong Please Try After Some Time', 'danger')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={styles.container} stickyHeaderIndices={[2]}>
                {/* Image Section */}
                <View>

                    {activeTab != 0 ? <View style={{
                        height: hp(5), width: wp(95), justifyContent: 'space-between', alignItems: 'center',
                        alignSelf: 'center', flexDirection: 'row', backgroundColor: colorConstant.White
                    }}>
                        <BackIconSvg height={hp(4)} width={hp(4)} fill={colorConstant.Black} />
                        <HeartIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.Black} />
                    </View> : <View style={{
                        backgroundColor: colorConstant.White
                    }}>
                        {aboutPlayData != null && aboutPlayData.image ? <>

                            <Image
                                source={{ uri: ImageBaseUrl + aboutPlayData.image }} // Replace with your image URL
                                style={styles.image}
                            />
                            <View style={{
                                height: hp(6), width: wp(95), position: 'absolute', top: 0, justifyContent: 'space-between', alignItems: 'center',
                                alignSelf: 'center', flexDirection: 'row'
                            }}>
                                <BackIconSvg height={hp(4)} width={hp(4)} fill={colorConstant.White} />
                                <HeartIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.White} />
                            </View>
                        </> : <View style={{
                            height: hp(5), width: wp(95), justifyContent: 'space-between', alignItems: 'center',
                            alignSelf: 'center', flexDirection: 'row', backgroundColor: colorConstant.White
                        }}>
                            <BackIconSvg height={hp(4)} width={hp(4)} fill={colorConstant.Black} />
                            <HeartIconSvg height={hp(3.5)} width={hp(3.5)} customStroke={colorConstant.Black} />
                        </View>}
                    </View>}
                </View>

                {/* Title and Address */}
                <View>

                    {aboutPlayData != null ?
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{aboutPlayData && aboutPlayData.name}</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', paddingVertical: 5 }}>
                                <LocationIconSvg height={hp(2.5)} width={hp(2.5)} customStroke={colorConstant.ThemeGreenColor} />
                                <Text style={styles.address}>{aboutPlayData && aboutPlayData.address}</Text>

                            </View>
                        </View>
                        : <View />
                    }
                </View>

                {/* Navigation Tabs */}
                <View>
                    <View style={styles.tabsContainer}>
                        <RenderTab onClick={() => setActiveTab(0)} active={activeTab === 0 ? true : false} title={"About"} />
                        <RenderTab onClick={() => setActiveTab(1)} active={activeTab === 1 ? true : false} title={"Play"} />
                        <RenderTab onClick={() => setActiveTab(2)} active={activeTab === 2 ? true : false} title={"Learn"} />
                    </View>
                </View>
                {activeTab === 0 && <RenderAboutSection data={{ 'Description': aboutPlayData != null && aboutPlayData.description ? aboutPlayData.description : '-', 'point': aboutPlayData != null && aboutPlayData.point ? aboutPlayData.point : null }} />}
                {activeTab === 1 && <RenderPlaySection setLoading={d => setLoading(d)} />}
                {activeTab === 2 && <RenderLearnSection learnData={aboutLearnData} />}
            </ScrollView>
            {loading && <LoadingView />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstant.White,
    },
    image: {
        width: wp(100),
        height: hp(38), // Adjust as needed
    },
    titleContainer: {
        // padding: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: colorConstant.White
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colorConstant.Black
    },
    address: {
        fontSize: 16,
        color: colorConstant.Grey, paddingLeft: 5
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // paddingVertical: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#eee',
        backgroundColor: colorConstant.White,
        shadowColor: colorConstant.Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 5,
        height: hp(5),
    },
    tab: {
        width: wp(25),

    },
    tabText: {
        fontSize: hp(2),
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: hp(5),
        color: colorConstant.Black

    },

});

export default AboutScreen;