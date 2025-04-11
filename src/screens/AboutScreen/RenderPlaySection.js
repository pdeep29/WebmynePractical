import colorConstant from "../../utils/colorConstant"
import { useEffect, useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { getNextTenDays } from "../../utils/utils"
import { hp, wp } from "../../utils/dimensions"
import moment from "moment"
import { useDispatch } from "react-redux"
import LoadingView from "../../Components/LoadingView"
import * as AboutActions from './about.action'
import RenderFlashMessage from "../../Components/RenderFlashMessage"
const slotData = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00"
];
const RenderPlaySection = ({ setLoading }) => {
    const dispatch = useDispatch()
    const dayDateArray = getNextTenDays('2024-07-17')
    const [selectedDate, setSelectedDate] = useState(null)
    const [playData, setPlayData] = useState(null)
    const [activityType, setActivityType] = useState(null)
    const [selectedSlot, setSelectedSlot] = useState(null)
    useEffect(() => {
        let demoData = {
            "date": moment(new Date()).format('YYYY-MM-DD'),
            "activity_category_id": 1,
            "min_price": 0,
            "max_price": 0,
            "location_id": 94
        }
        InitiateApiCall(demoData)
    }, [])

    function StoreDataCallApi(item) {

        setSelectedDate(item)
        let demoData = {
            "date": moment(new Date()).format('YYYY-MM-DD'),
            "activity_category_id": 1,
            "min_price": 0,
            "max_price": 0,
            "location_id": 94
        }
        InitiateApiCall(demoData)
    }
    function InitiateApiCall(demoData) {


        setLoading(true)
        dispatch(AboutActions.getPlayAbout(demoData, onSuccess, onFaliur))
    }



    function onSuccess(data) {
        setLoading(false)
        setPlayData(data)

    }
    function onFaliur(data) {
        setLoading(false)

        RenderFlashMessage('Something Went Wrong Please Try After Some Time', 'danger')
    }
    return (<View style={{ flex: 1, }}>
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: wp(95), alignSelf: 'center', marginTop: hp(2) }}>
            {dayDateArray.map((item, index) => {
                let isSelected = selectedDate === item
                return (<TouchableOpacity key={index} style={{
                    height: hp(5.5), marginRight: 6, paddingHorizontal: 10,
                    backgroundColor: isSelected ? colorConstant.ThemeGreenColor : colorConstant.White, borderWidth: 2, borderColor: colorConstant.ThemeGreenColor,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 100
                }} onPress={() => {
                    StoreDataCallApi(item)
                }}>
                    <Text style={{
                        fontSize: hp(2.5), color: isSelected ? colorConstant.White : colorConstant.Black,
                        fontWeight: '500',
                    }}>{moment(item).format('ddd, D MMMM')}</Text>
                </TouchableOpacity>)
            })}

        </ScrollView>
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: wp(95), alignSelf: 'center', marginTop: hp(2) }}>

            {playData != null && playData.activity_types && playData.activity_types.map((item, index) => {
                console.log('item +++++', item)
                let isSelected = activityType === item.id
                return (<TouchableOpacity key={index} style={{
                    height: hp(5.5), marginRight: 6, paddingHorizontal: 10,
                    backgroundColor: isSelected ? colorConstant.ThemeGreenColor : colorConstant.White, borderWidth: 2, borderColor: colorConstant.ThemeGreenColor,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: wp(46)
                }} onPress={() => setActivityType(item.id)}>
                    <Text style={{
                        fontSize: hp(2.5), color: isSelected ? colorConstant.White : colorConstant.Black, fontWeight: '500',

                    }}>{item.name}</Text>
                </TouchableOpacity>)
            })}
        </ScrollView>
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: wp(95), alignSelf: 'center', marginTop: hp(2) }}>

            {slotData.map((item, index) => {
                console.log('item', item)
                let isSelected = selectedSlot === item
                return (<TouchableOpacity key={index} style={{
                    marginRight: 6, paddingHorizontal: 5, paddingVertical: 11,
                    backgroundColor: isSelected ? colorConstant.ThemeGreenColor : colorConstant.White, borderWidth: 2, borderColor: colorConstant.ThemeGreenColor,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 10,
                }} onPress={() => setSelectedSlot(item)}>
                    <Text style={{
                        fontSize: hp(2.2), color: isSelected ? colorConstant.White : colorConstant.Black, fontWeight: '300',

                    }}>{item}</Text>
                </TouchableOpacity>)
            })}
        </ScrollView>
        {
            playData != null && activityType != null && playData.activity_types && playData.activity_types.filter(j => j.id === activityType)[0].hours.map((item, index) => {
                console.log('item = data ', item)
                return (<View style={{
                    width: wp(95), alignSelf: 'center',
                    paddingHorizontal: 10, paddingVertical: 7,
                    marginVertical: 5,

                }}>
                    {item.resources.map((d, index) => {
                        return (<View style={{ marginTop: 10 }}>
                            <Text style={{
                                fontSize: hp(2.5), color: colorConstant.Black, fontWeight: '500',

                            }}>{d.type_name}</Text>

                            <ScrollView horizontal
                                showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: wp(95), alignSelf: 'center', marginTop: hp(2) }}>

                                {d.events.map((j, index) => {
                                    return (<TouchableOpacity key={index} style={{
                                        marginRight: 6,
                                        backgroundColor: colorConstant.White,
                                        alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: wp(40),
                                        borderRadius: 10, overflow: 'hidden',
                                        shadowColor: '#989898', elevation: 5, marginBottom: 5
                                    }} >
                                        <View style={{
                                            width: '100%',
                                            backgroundColor: colorConstant.ThemeGreenColor, alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                fontSize: hp(2), color: colorConstant.White, fontWeight: '500', paddingVertical: 10,

                                            }}>Tee Time: {moment(j.start).format('HH:mm ')}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <View style={{ width: wp(18), alignItems: 'center' }}>
                                                <View style={{
                                                    width: wp(10), height: wp(10), borderWidth: 1, borderColor: colorConstant.Black,
                                                    borderRadius: 100, borderStyle: 'dashed', alignItems: "center", marginTop: 5
                                                }}>
                                                    <Text style={{ color: colorConstant.Black, fontSize: wp(6), }}>+</Text>

                                                </View>
                                                <Text style={{ color: colorConstant.Black, fontSize: hp(1.8), }}>Empty</Text>

                                            </View>
                                            <View style={{ width: wp(18), alignItems: 'center' }}>
                                                <View style={{
                                                    width: wp(10), height: wp(10), borderWidth: 1, borderColor: colorConstant.Black,
                                                    borderRadius: 100, borderStyle: 'dashed', alignItems: "center", marginTop: 5
                                                }}>
                                                    <Text style={{ color: colorConstant.Black, fontSize: wp(6), }}>+</Text>

                                                </View>
                                                <Text style={{ color: colorConstant.Black, fontSize: hp(1.8), }}>Empty</Text>

                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <View style={{ width: wp(18), alignItems: 'center' }}>
                                                <View style={{
                                                    width: wp(10), height: wp(10), borderWidth: 1, borderColor: colorConstant.Black,
                                                    borderRadius: 100, borderStyle: 'dashed', alignItems: "center", marginTop: 5
                                                }}>
                                                    <Text style={{ color: colorConstant.Black, fontSize: wp(6), }}>+</Text>

                                                </View>
                                                <Text style={{ color: colorConstant.Black, fontSize: hp(1.8), }}>Empty</Text>

                                            </View>
                                            <View style={{ width: wp(18), alignItems: 'center' }}>
                                                <View style={{
                                                    width: wp(10), height: wp(10), borderWidth: 1, borderColor: '#989898',
                                                    borderRadius: 100, borderStyle: 'dashed', alignItems: "center", marginTop: 5
                                                }}>
                                                    <Text style={{ color: colorConstant.Black, fontSize: wp(6), }}>+</Text>

                                                </View>
                                                <Text style={{ color: colorConstant.Black, fontSize: hp(1.8), }}>Empty</Text>

                                            </View>
                                        </View>
                                        <View style={{
                                            borderBottomWidth: 1,
                                            borderColor: '#989898',
                                            borderStyle: 'dotted',
                                            marginVertical: 9,
                                            width: '90%',
                                        }} />
                                        <Text style={{
                                            fontSize: hp(2), color: colorConstant.ThemeGreenColor, fontWeight: '500', marginBottom: 5

                                        }}>{j.price.display}</Text>
                                        {/* price→display */}
                                    </TouchableOpacity>)
                                })}
                            </ScrollView>
                        </View>
                        )

                    })}
                </View>)
            })
        }
        {/* <FlatList data={playData != null && activityType != null && playData.activity_types ? playData.activity_types.filter(j => j.id === activityType)[0].hours : []}
            extraData={activityType}
            renderItem={(item) => {
                let data = item.item
                console.log('item = data ', item.resources)
                return (<View style={{
                    width: wp(95), alignSelf: 'center', backgroundColor: colorConstant.White,
                    borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7,
                    marginVertical: 5,
                    shadowColor: colorConstant.Black,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 0,
                    elevation: 5,
                }}>

                    {item.resources.map((d, index) => {
                        return (<View>
                            <Text style={{
                                fontSize: hp(2.5), color: colorConstant.Black, fontWeight: '500',

                            }}>{d.type_name}</Text>

                            <ScrollView horizontal
                                showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: wp(95), alignSelf: 'center', marginTop: hp(2) }}>

                                {item.resources.map((item, index) => {
                                    console.log('item +++++', item)
                                    let isSelected = activityType === item.id
                                    return (<TouchableOpacity key={index} style={{
                                        height: hp(5.5), marginRight: 6, paddingHorizontal: 10,
                                        backgroundColor: isSelected ? colorConstant.ThemeGreenColor : colorConstant.White, borderWidth: 2, borderColor: colorConstant.ThemeGreenColor,
                                        alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: wp(46)
                                    }} onPress={() => setActivityType(item.id)}>
                                        <Text style={{
                                            fontSize: hp(2.5), color: isSelected ? colorConstant.White : colorConstant.Black, fontWeight: '500',

                                        }}>{item.name}</Text>
                                    </TouchableOpacity>)
                                })}
                            </ScrollView>
                        </View>
                        )

                    })}
                </View>)
            }}
        /> */}

    </View >)
}
export default RenderPlaySection
const styles = StyleSheet.create({
    titleView: {
        fontSize: hp(2),
        fontWeight: '500',
        color: '#6E6E6E',
    },
    subtitleView: {
        fontSize: hp(2),
        fontWeight: '500',
        color: '#989898',
    }

})